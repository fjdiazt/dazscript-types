import * as fs from 'fs';
import * as path from 'path';
import { DocMethod, DocumentationData, generateJSDocComment, parseDocsFromUrl } from './docParser';
import { buildClassRegistry, ClassRegistry, removeInheritedMembers } from './inheritanceFilter';

interface Options {
    /** When true, issues are only printed to console and not written into the file. */
    noFileIssues: boolean;
}

interface FileToProcess {
    filePath: string;
    docUrl: string;
}

async function main() {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.error('Usage: ts-node enrichFromDocs.ts <file.d.ts|folder> [--no-backup] [--no-file-issues]');
        process.exit(1);
    }

    const targetPath = args[0];
    const options: Options = {
        noFileIssues: args.includes('--no-file-issues'),
    };

    let filesToProcess: FileToProcess[] = [];

    if (fs.statSync(targetPath).isDirectory()) {
        console.log(`Scanning folder: ${targetPath}`);
        filesToProcess = scanFolderForDocs(targetPath);
    } else {
        console.log(`Processing file: ${targetPath}`);
        const docUrl = extractDocUrlFromFile(targetPath);
        if (docUrl) {
            filesToProcess.push({ filePath: targetPath, docUrl });
        } else {
            console.error(`No @docurl found in ${targetPath}`);
            process.exit(1);
        }
    }

    if (filesToProcess.length === 0) {
        console.error('No files with @docurl found');
        process.exit(1);
    }

    console.log(`Found ${filesToProcess.length} file(s) to process\n`);

    // Build a registry of all .d.ts files in the types directory so that
    // removeInheritedMembers can resolve the full ancestor chain.
    const typesDir = path.join(path.dirname(filesToProcess[0].filePath), '..', '..', 'types');
    const registry = buildRegistryFromDir(typesDir);

    for (const file of filesToProcess) {
        try {
            await processFile(file.filePath, file.docUrl, options, registry);
        } catch (error) {
            console.error(`Error processing ${file.filePath}:`, error);
        }
    }

    console.log('\n✓ Done!');
}

function scanFolderForDocs(folderPath: string): FileToProcess[] {
    const files: FileToProcess[] = [];
    const entries = fs.readdirSync(folderPath, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(folderPath, entry.name);
        if (entry.isDirectory()) {
            files.push(...scanFolderForDocs(fullPath));
        } else if (entry.name.endsWith('.d.ts')) {
            const docUrl = extractDocUrlFromFile(fullPath);
            if (docUrl) {
                files.push({ filePath: fullPath, docUrl });
            }
        }
    }

    return files;
}

function buildRegistryFromDir(dir: string): ClassRegistry {
    const contents: string[] = [];
    const collect = (d: string) => {
        if (!fs.existsSync(d)) return;
        for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
            const full = path.join(d, entry.name);
            if (entry.isDirectory()) collect(full);
            else if (entry.name.endsWith('.d.ts')) contents.push(fs.readFileSync(full, 'utf-8'));
        }
    };
    collect(dir);
    return buildClassRegistry(contents);
}

function extractDocUrlFromFile(filePath: string): string | null {
    const content = fs.readFileSync(filePath, 'utf-8');

    // Look for @docurl in JSDoc at top of file
    const docUrlMatch = content.match(/\/\*\*[\s\S]*?@docurl\s+(https?:\/\/[^\s]+)[\s\S]*?\*\//);
    if (docUrlMatch) {
        return docUrlMatch[1];
    }

    // Look for @docurl in comment
    const commentMatch = content.match(/\/\/\s*@docurl\s+(https?:\/\/[^\s]+)/);
    if (commentMatch) {
        return commentMatch[1];
    }

    return null;
}

async function processFile(filePath: string, docUrl: string, options: Options, registry: ClassRegistry): Promise<void> {
    console.log(`\n📄 Processing: ${path.basename(filePath)}`);
    console.log(`   URL: ${docUrl}`);

    // Read current file
    const originalContent = fs.readFileSync(filePath, 'utf-8');

    // Fetch documentation
    console.log('   Fetching documentation...');
    const docs = await parseDocsFromUrl(docUrl);
    console.log(`   ✓ Found: ${docs.methods.size} methods, ${docs.properties.size} properties, ${docs.signals.size} signals`);

    // ── Validate inheritance ───────────────────────────────────────────────
    const issues: string[] = [];

    if (docs.inherits) {
        const fileInherits = extractDeclaredInherits(originalContent);
        if (fileInherits && fileInherits !== docs.inherits) {
            const msg = `Inheritance mismatch: file declares 'extends ${fileInherits}' but docs list '${docs.inherits}' as direct parent`;
            issues.push(msg);
            console.warn(`   ⚠ ${msg}`);
        }
    }

    // Enrich content
    const enrichedContent = enrichFileContent(originalContent, docs, issues, options.noFileIssues);

    // Remove members already documented in ancestor classes (only when no
    // inheritance mismatch — removeInheritedMembers skips files with issues block)
    const finalContent = removeInheritedMembers(enrichedContent, registry);

    // Write back
    fs.writeFileSync(filePath, finalContent, 'utf-8');
    console.log(`   ✓ Updated`);
}

/**
 * Returns true if the JSDoc block lines contain a description (not just @tags).
 * An auto-generated stub only has @param/@returns lines with no leading description.
 */
export function hasDescriptionInJSDoc(jsDocLines: string[]): boolean {
    for (const line of jsDocLines) {
        const trimmed = line.trim();

        // Single-line: /** description */ — check inner content
        if (trimmed.startsWith('/**') && trimmed.endsWith('*/')) {
            const inner = trimmed.slice(3, -2).trim();
            if (inner && !inner.startsWith('@')) return true;
            continue;
        }

        // Skip delimiters
        if (trimmed === '/**' || trimmed === '*/') continue;

        // A `*` content line that does NOT start with a tag is a description
        if (trimmed.startsWith('*')) {
            const content = trimmed.replace(/^\*+\s*/, '').trim();
            if (content && !content.startsWith('@')) return true;
        }
    }
    return false;
}

/**
 * Count the number of parameters in a method/function signature string.
 */
export function countParams(signature: string): number {
    const match = signature.match(/\(([^)]*)\)/);
    if (!match || !match[1].trim()) return 0;
    return match[1].split(',').length;
}

/**
 * Find the doc overload that best matches a given file signature.
 * Prefers an unused overload whose parameter count matches; falls back to the
 * next unused overload, and finally to the first overload.
 */
function findMatchingDocOverload(
    name: string,
    signature: string,
    docs: DocumentationData,
    usedOverloads: Map<string, Set<number>>
): DocMethod | null {
    const overloads = docs.methods.get(name);
    if (!overloads || overloads.length === 0) return null;

    const paramCount = countParams(signature);

    if (!usedOverloads.has(name)) {
        usedOverloads.set(name, new Set());
    }
    const used = usedOverloads.get(name)!;

    // Prefer an unused overload with the same parameter count
    for (let i = 0; i < overloads.length; i++) {
        if (!used.has(i) && overloads[i].params.length === paramCount) {
            used.add(i);
            return overloads[i];
        }
    }

    // Fall back to any unused overload
    for (let i = 0; i < overloads.length; i++) {
        if (!used.has(i)) {
            used.add(i);
            return overloads[i];
        }
    }

    // All overloads already matched — reuse first
    return overloads[0];
}

/**
 * Apply a leading indent string to every non-empty line of a JSDoc comment,
 * and strip the trailing newline so the caller controls line endings.
 */
function applyIndent(jsDoc: string, indent: string): string {
    return jsDoc
        .split('\n')
        .map(l => (l ? indent + l : l))
        .join('\n')
        .trimEnd();
}

/** Strip trailing blank lines from a buffered JSDoc block before emitting before a declaration. */
function emitJSDoc(output: string[], lines: string[]): void {
    let end = lines.length;
    while (end > 0 && lines[end - 1].trim() === '') end--;
    output.push(...lines.slice(0, end));
}

/**
 * Rebuild a declaration line using authoritative types from the docs.
 * @internal exported for testing
 *
 * For methods: reconstructs `name(param: Type, ...): ReturnType;` using doc param
 *   names, types, and optional markers. Never downgrades a specific type to `any[]`.
 * For properties: replaces the type token in-place.
 * Returns the original line unchanged when no doc data is available.
 */
export function buildFixedDeclaration(
    line: string,
    indent: string,
    name: string,
    overload: DocMethod | null,
    docs: DocumentationData
): string {
    if (overload) {
        // Signal: convert to ISignalT<T> / ISignalT<void> property format
        if (docs.signals.has(name)) {
            const typeArgs = overload.params.length === 0
                ? 'void'
                : overload.params.map(p => p.type).join(', ');
            const signalType = `ISignalT<${typeArgs}>`;
            // If already in property format, update type; otherwise rebuild as property
            if (!line.includes('(')) {
                return line.replace(/(:\s*)[\w\[\]<>.,\s|]+(\s*;)/, `$1${signalType}$2`);
            }
            return `${indent}${name}: ${signalType};`;
        }

        const paramStrs = overload.params.map(p => {
            const opt = p.default !== null ? '?' : '';
            return `${p.name}${opt}: ${p.type}`;
        });

        // Don't downgrade a specific existing type to the generic any[]
        const newReturn = overload.return;
        const existingReturnMatch = line.match(/\)\s*:\s*([\w\[\]<>,.\s|]+?)\s*;/);
        const existingReturn = existingReturnMatch ? existingReturnMatch[1].trim() : '';
        const finalReturn =
            newReturn === 'any[]' && existingReturn && existingReturn !== 'any[]'
                ? existingReturn
                : newReturn;

        const trailingComment = line.match(/\/\/.*$/)?.[0];
        const suffix = trailingComment ? ' ' + trailingComment : '';
        return `${indent}${name}(${paramStrs.join(', ')}): ${finalReturn};${suffix}`;
    }

    if (docs.properties.has(name)) {
        const prop = docs.properties.get(name)!;
        if (!prop.type || prop.type === 'any[]') return line;
        // Replace type in `propName: OldType;` or `propName?: OldType;`
        return line.replace(/(:\s*)[\w\[\]<>.,\s|]+(\s*;)/, `$1${prop.type}$2`);
    }

    return line;
}

/** Extract the class name after `extends` in a `declare class` statement. */
export function extractDeclaredInherits(content: string): string {
    const m = content.match(/declare class \w+ extends (\w+)/);
    return m ? m[1] : '';
}

const ISSUES_BLOCK_START = '/* @enricher-issues';

/** Build the issues comment block written at the top of the file. */
function buildIssuesBlock(issues: string[]): string {
    const lines = issues.map(i => ` * - ${i}`).join('\n');
    return `/* @enricher-issues\n * ⚠ Issues found by enricher — fix manually or re-run after correcting source:\n${lines}\n */`;
}

/** Strip an existing issues block from the top of the content (for idempotency). */
function stripIssuesBlock(content: string): string {
    if (!content.startsWith(ISSUES_BLOCK_START)) return content;
    const end = content.indexOf('*/');
    if (end === -1) return content;
    return content.slice(end + 2).replace(/^\n/, '');
}

/**
 * Core enrichment logic.
 *
 * Strategy (per declaration):
 *  - If existing JSDoc already has a description → keep it (idempotent).
 *  - If existing JSDoc is `@undocumented` and method is still undocumented → keep it.
 *  - Otherwise (partial stub / no JSDoc / stale @undocumented) → generate fresh JSDoc:
 *      documented   → full JSDoc with description + @param + @returns
 *      undocumented → `/** @undocumented *\/`
 *
 * Duplicate signatures (identical name + params) are only documented once;
 * subsequent copies keep whatever JSDoc they already carry (or none).
 */
export function enrichFileContent(content: string, docs: DocumentationData, issues: string[] = [], noFileIssues = false): string {
    // Strip any stale issues block so we don't duplicate it
    content = stripIssuesBlock(content);

    const lines = content.split('\n');
    const output: string[] = [];
    const processedSignatures = new Set<string>();
    const usedOverloads = new Map<string, Set<number>>();
    const resolvedOverloads = new Map<string, DocMethod | null>();

    // Pending JSDoc lines (buffered between the /** ... */ block and the declaration)
    let pendingJSDoc: string[] | null = null;
    let inJSDoc = false;

    for (const line of lines) {
        const trimmed = line.trim();

        // ── declare class — inject class summary into the class JSDoc ────────
        if (trimmed.startsWith('declare class') && docs.classSummary) {
            if (pendingJSDoc === null) {
                // No existing JSDoc — create one with just the summary
                output.push(`/**\n * ${docs.classSummary}\n */`);
            } else {
                // Existing JSDoc (e.g. @docurl) — prepend summary if absent
                const hasSummary = pendingJSDoc.some(l => {
                    const t = l.trim();
                    return t.startsWith('*') && !t.startsWith('*/') && !t.startsWith('* @');
                });
                if (!hasSummary) {
                    const openIdx = pendingJSDoc.findIndex(l => l.trim() === '/**');
                    const indent = (pendingJSDoc[0]?.match(/^(\s*)/) ?? ['', ''])[1];
                    pendingJSDoc.splice(openIdx + 1, 0, `${indent} * ${docs.classSummary}`);
                }
            }
        }

        // ── JSDoc block start ────────────────────────────────────────────────
        if (trimmed.startsWith('/**')) {
            // Ensure one blank line before JSDoc if the preceding output isn't already blank
            if (output.length > 0 && output[output.length - 1].trim() !== '') {
                output.push('');
            }
            pendingJSDoc = [line];
            inJSDoc = !trimmed.endsWith('*/'); // single-line /** ... */ closes immediately
            continue;
        }

        // ── Inside a multi-line JSDoc block ──────────────────────────────────
        if (inJSDoc) {
            pendingJSDoc!.push(line);
            if (trimmed.endsWith('*/')) {
                inJSDoc = false;
            }
            continue;
        }

        // ── Blank line between JSDoc closer and declaration ───────────────────
        // Buffer it so we can decide later whether to keep or discard.
        if (pendingJSDoc !== null && trimmed === '') {
            pendingJSDoc.push(line);
            continue;
        }

        // ── Try to match a TypeScript declaration ─────────────────────────────
        // Method:   name(...): ReturnType;  (optional trailing // comment)
        const methodMatch = trimmed.match(/^(\w+)\s*\([^)]*\)\s*:\s*[\w\[\]<>,.\s|]+;?\s*(?:\/\/.*)?$/);
        // Property: name: Type; or name?: Type;  (optional trailing // comment)
        const propertyMatch = methodMatch ? null : trimmed.match(/^(\w+)\??\s*:\s*[\w\[\]<>,.\s|]+;?\s*(?:\/\/.*)?$/);

        if (methodMatch || propertyMatch) {
            const name = methodMatch ? methodMatch[1] : propertyMatch![1];
            const indent = line.match(/^(\s*)/)?.[1] || '';
            const signatureKey = `${name}:::${trimmed}`;

            const isDocumented =
                docs.methods.has(name) ||
                docs.properties.has(name) ||
                docs.signals.has(name);

            const existingComplete =
                pendingJSDoc !== null && hasDescriptionInJSDoc(pendingJSDoc);
            const existingUndocumented =
                pendingJSDoc !== null &&
                pendingJSDoc.some(l => l.includes('@undocumented'));

            if (!processedSignatures.has(signatureKey)) {
                processedSignatures.add(signatureKey);

                // Resolve overload once — shared by JSDoc generation and type-fixing.
                // Must happen before the keepExisting check so usedOverloads is always updated.
                const overload = docs.methods.has(name)
                    ? findMatchingDocOverload(name, trimmed, docs, usedOverloads)
                    : docs.signals.has(name)
                    ? (docs.signals.get(name)![0] as DocMethod)
                    : null;

                const keepExisting =
                    (existingComplete && !isDocumented) ||       // manually written for undocumented item
                    (existingUndocumented && !isDocumented);     // correctly marked undocumented

                if (keepExisting) {
                    emitJSDoc(output, pendingJSDoc!);
                } else {
                    // Generate fresh JSDoc
                    if (isDocumented) {
                        let jsDoc: string;

                        if (docs.signals.has(name)) {
                            const sig = docs.signals.get(name)![0];
                            const description =
                                docs.descriptions.get(name) ||
                                sig.description ||
                                '';
                            // Signals become ISignalT<T> properties — description only, no @param
                            jsDoc = description
                                ? `/**\n * ${description}\n */\n`
                                : `/**\n */\n`;
                        } else if (overload) {
                            const description =
                                docs.descriptions.get(name) ||
                                overload.description ||
                                '';
                            jsDoc = generateJSDocComment(
                                description,
                                overload.params,
                                overload.return,
                                overload.since,
                                overload.returnDescription
                            );
                        } else {
                            // Property
                            const prop = docs.properties.get(name)!;
                            const description =
                                docs.descriptions.get(name) ||
                                prop.description ||
                                '';
                            jsDoc = description
                                ? `/**\n * ${description}\n */\n`
                                : `/**\n */\n`;
                        }

                        if (output.length > 0 && output[output.length - 1].trim() !== '') {
                            output.push('');
                        }
                        output.push(applyIndent(jsDoc, indent));
                    } else {
                        if (output.length > 0 && output[output.length - 1].trim() !== '') {
                            output.push('');
                        }
                        output.push(`${indent}/** @undocumented */`);
                    }
                }

                // ── Fix declaration types from doc data ───────────────────────
                resolvedOverloads.set(signatureKey, overload);
                pendingJSDoc = null;
                output.push(buildFixedDeclaration(line, indent, name, overload, docs));
            } else {
                // Duplicate signature — apply same type fix as the first occurrence
                if (pendingJSDoc !== null) {
                    emitJSDoc(output, pendingJSDoc);
                }
                pendingJSDoc = null;
                const prevOverload = resolvedOverloads.get(signatureKey) ?? null;
                output.push(buildFixedDeclaration(line, indent, name, prevOverload, docs));
            }
        } else {
            // ── Non-declaration line: flush any buffered JSDoc ────────────────
            if (pendingJSDoc !== null) {
                output.push(...pendingJSDoc);
                pendingJSDoc = null;
            }
            output.push(line);
        }
    }

    // Flush anything remaining at end of file
    if (pendingJSDoc !== null) {
        output.push(...pendingJSDoc);
    }

    let result = reorderByDocsOrder(output.join('\n'), docs);

    // Prepend issues block if there are any and the caller wants it in the file
    if (issues.length > 0 && !noFileIssues) {
        result = buildIssuesBlock(issues) + '\n' + result;
    }

    return result;
}

// ── Docs-order reordering ─────────────────────────────────────────────────────

const REORDER_METHOD_RE = /^\s*(\w+)\s*\([^)]*\)\s*:\s*[\w\[\]<>,.\s|]+;?\s*(?:\/\/.*)?$/;
const REORDER_PROP_RE   = /^\s*(\w+)\??\s*:\s*[\w\[\]<>,.\s|]+;?\s*(?:\/\/.*)?$/;

interface MemberBlock {
    name: string;
    category: 'property' | 'signal' | 'method';
    jsdoc: string[];
    decl: string;
}

/**
 * Reorder the members of a class declaration to match the order in `docs`:
 * properties first, then signals, then methods — each section sorted by docs order.
 * Section header comments (`/* Properties *\/`, etc.) are regenerated.
 */
function reorderByDocsOrder(content: string, docs: DocumentationData): string {
    const openBrace = content.indexOf('{');
    if (openBrace === -1) return content;

    const header = content.slice(0, openBrace + 1);
    const rest   = content.slice(openBrace + 1);

    // Find the last `\n}` — the closing brace of the class
    const lastBraceIdx = rest.lastIndexOf('\n}');
    if (lastBraceIdx === -1) return content;

    const body   = rest.slice(0, lastBraceIdx + 1); // up to and including `\n`
    const trailer = rest.slice(lastBraceIdx + 1);    // `}` + optional trailing newline

    // ── Parse body into member blocks ──────────────────────────────────────
    const blocks: MemberBlock[] = [];
    const seen = new Set<string>(); // deduplicate by trimmed declaration text
    let jsdocBuf: string[] = [];
    let inJSDoc = false;

    for (const line of body.split('\n')) {
        const trimmed = line.trim();

        if (trimmed.startsWith('/**')) {
            jsdocBuf = [line];
            inJSDoc  = !trimmed.endsWith('*/');
            continue;
        }
        if (inJSDoc) {
            jsdocBuf.push(line);
            if (trimmed.endsWith('*/')) inJSDoc = false;
            continue;
        }

        const methodMatch = REORDER_METHOD_RE.exec(line);
        const propMatch   = methodMatch ? null : REORDER_PROP_RE.exec(line);

        if (methodMatch || propMatch) {
            const name = methodMatch ? methodMatch[1] : propMatch![1];
            let category: MemberBlock['category'];
            if (docs.signals.has(name))         category = 'signal';
            else if (docs.methods.has(name))    category = 'method';
            else if (line.includes('ISignalT')) category = 'signal';
            else if (line.includes('('))        category = 'method';
            else                                category = 'property';

            // Skip exact duplicate declarations (same trimmed text already seen)
            if (!seen.has(trimmed)) {
                seen.add(trimmed);
                blocks.push({ name, category, jsdoc: jsdocBuf, decl: line });
            }
            jsdocBuf = [];
        } else if (trimmed !== '') {
            // Section comment, closing brace, etc. — reset pending JSDoc
            jsdocBuf = [];
        }
        // Blank lines: leave jsdocBuf untouched (blank appears before JSDoc, not after)
    }

    // ── Determine docs order ───────────────────────────────────────────────
    const propOrder   = [...docs.properties.keys()];
    const signalOrder = [...docs.signals.keys()];
    const methodOrder = [...docs.methods.keys()];

    function docsIndex(name: string, order: string[]): number {
        const i = order.indexOf(name);
        return i === -1 ? order.length : i;
    }

    const props   = blocks.filter(b => b.category === 'property');
    const signals = blocks.filter(b => b.category === 'signal');
    const methods = blocks.filter(b => b.category === 'method');

    // Stable sort: items not in docs stay at the end in their original relative order
    props.sort((a, b)   => docsIndex(a.name, propOrder)   - docsIndex(b.name, propOrder));
    signals.sort((a, b) => docsIndex(a.name, signalOrder) - docsIndex(b.name, signalOrder));
    methods.sort((a, b) => docsIndex(a.name, methodOrder) - docsIndex(b.name, methodOrder));

    // ── Emit ───────────────────────────────────────────────────────────────
    const indent = blocks[0]?.decl.match(/^(\s+)/)?.[1] ?? '    ';
    const out: string[] = [];

    function emitSection(sectionBlocks: MemberBlock[], title: string) {
        if (sectionBlocks.length === 0) return;
        out.push('', `${indent}/* ${title} */`);
        for (const block of sectionBlocks) {
            out.push('');
            out.push(...block.jsdoc);
            out.push(block.decl);
        }
    }

    emitSection(props,   'Properties');
    emitSection(methods, 'Methods');
    emitSection(signals, 'Signals');

    out.push('');

    return header + out.join('\n') + trailer;
}

main().catch(console.error);
