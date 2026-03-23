import * as fs from 'fs';
import * as path from 'path';
import { DocMethod, DocumentationData, generateJSDocComment, parseDocsFromUrl } from './docParser';

interface Options {
    noBackup: boolean;
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
        noBackup: args.includes('--no-backup'),
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

    for (const file of filesToProcess) {
        try {
            await processFile(file.filePath, file.docUrl, options);
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

async function processFile(filePath: string, docUrl: string, options: Options): Promise<void> {
    console.log(`\n📄 Processing: ${path.basename(filePath)}`);
    console.log(`   URL: ${docUrl}`);

    // Create backup
    if (!options.noBackup) {
        const backupPath = filePath + '.bak';
        fs.copyFileSync(filePath, backupPath);
        console.log(`   Backup: ${path.basename(backupPath)}`);
    }

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

    // Write back
    fs.writeFileSync(filePath, enrichedContent, 'utf-8');
    console.log(`   ✓ Updated`);
}

/**
 * Returns true if the JSDoc block lines contain a description (not just @tags).
 * An auto-generated stub only has @param/@returns lines with no leading description.
 */
function hasDescriptionInJSDoc(jsDocLines: string[]): boolean {
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
function countParams(signature: string): number {
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
 *
 * For methods: reconstructs `name(param: Type, ...): ReturnType;` using doc param
 *   names, types, and optional markers. Never downgrades a specific type to `any[]`.
 * For properties: replaces the type token in-place.
 * Returns the original line unchanged when no doc data is available.
 */
function buildFixedDeclaration(
    line: string,
    indent: string,
    name: string,
    overload: DocMethod | null,
    docs: DocumentationData
): string {
    if (overload) {
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

        return `${indent}${name}(${paramStrs.join(', ')}): ${finalReturn};`;
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
function extractDeclaredInherits(content: string): string {
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
function enrichFileContent(content: string, docs: DocumentationData, issues: string[] = [], noFileIssues = false): string {
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
        // Method:   name(...): ReturnType;
        const methodMatch = trimmed.match(/^(\w+)\s*\([^)]*\)\s*:\s*[\w\[\]<>,.\s|]+;?\s*$/);
        // Property: name: Type; or name?: Type;
        const propertyMatch = methodMatch ? null : trimmed.match(/^(\w+)\??\s*:\s*[\w\[\]<>,.\s|]+;?\s*$/);

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

                        if (overload) {
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
                        } else if (docs.signals.has(name)) {
                            const sigOverloads = docs.signals.get(name)!;
                            const sig = sigOverloads[0];
                            const description =
                                docs.descriptions.get(name) ||
                                sig.description ||
                                '';
                            jsDoc = generateJSDocComment(
                                description,
                                sig.params ?? [],
                                sig.return ?? 'void'
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

    let result = output.join('\n');

    // Prepend issues block if there are any and the caller wants it in the file
    if (issues.length > 0 && !noFileIssues) {
        result = buildIssuesBlock(issues) + '\n' + result;
    }

    return result;
}

main().catch(console.error);
