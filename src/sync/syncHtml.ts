/**
 * Orchestrates the HTML-first rebuild pass.
 *
 * Responsibilities:
 * - discover eligible type files
 * - parse matching HTML inputs
 * - build the ancestor registry
 * - rebuild files or report why they were skipped
 *
 * This is the main entrypoint for the current sync pipeline.
 *
 * High-level flow:
 * 1. `buildHtmlIndex()` finds eligible `.d.ts` <-> HTML pairs.
 * 2. `parseHtmlFile()` converts saved docs into normalized class models.
 * 3. Transient HTML models are written for debugging/bootstrap extraction.
 * 4. `buildClassRegistry()` prepares ancestor lookups across known classes.
 * 5. `rebuildClassFile()` renders the final file content using HTML + augments.
 * 6. `createSummary()` / `formatSummary()` report rebuilt, skipped, and failed files.
 */
import * as fs from 'fs';
import * as path from 'path';
import { buildClassRegistry } from './ancestorRegistry';
import { loadAugmentFile, writeHtmlModel } from './artifactStore';
import { htmlFileToTypeFile, isSpecialCaseFile, typeFileToHtmlFile } from './htmlIndex';
import { parseHtmlFile } from './htmlParser';
import { createSummary, formatSummary } from './report';
import { runPruneAugments } from './pruneAugments';
import { rebuildClassFile } from './rebuild';
import { DazClassModel } from './typeModel';
import { canonicalizeGeneratedClassName } from './typeRenames';

export interface SyncHtmlOptions {
    targetType?: string;
    replace?: boolean;
    htmlModelsDir?: string;
    augmentDir?: string;
    pruneAugments?: boolean;
}

/**
 * Run the local HTML sync for all eligible types or one targeted type.
 */
export async function runSyncHtml(typesDir: string, htmlDir: string, options: SyncHtmlOptions = {}): Promise<string> {
    const targetTypeFile = options.targetType ? normalizeTargetTypeFile(options.targetType) : null;
    const summary = createSummary();
    const htmlModelsDir = options.htmlModelsDir ?? path.join(process.cwd(), '.generated', 'html-models');
    const augmentDir = options.augmentDir ?? path.join(process.cwd(), 'src', 'augments', 'daz');
    const generatedTypesRoot = deriveGeneratedTypesRoot(typesDir);
    const discoveredTypeFiles = fs.readdirSync(typesDir, { withFileTypes: true })
        .filter(entry => entry.isFile() && entry.name.endsWith('.d.ts'))
        .map(entry => entry.name)
        .sort();
    const allTypeFiles = targetTypeFile
        ? discoveredTypeFiles.filter(file => file.toLowerCase() === targetTypeFile.toLowerCase())
        : discoveredTypeFiles;
    summary.scannedFiles = allTypeFiles.length;

    const allHtmlModels = new Map<string, DazClassModel>();
    const htmlEntries: Array<{ className: string; htmlFile: string; htmlPath: string; typeFile: string; typePath: string }> = [];
    for (const entry of fs.readdirSync(htmlDir, { withFileTypes: true })) {
        if (!entry.isFile() || !entry.name.endsWith('.html') || entry.name === '_index.html') {
            continue;
        }

        const htmlPath = path.join(htmlDir, entry.name);
        const mappedTypeFile = htmlFileToTypeFile(entry.name);
        if (!mappedTypeFile) {
            continue;
        }

        let model: DazClassModel;
        try {
            model = parseHtmlFile(htmlPath);
            allHtmlModels.set(model.className, model);
        } catch (error) {
            summary.errors.push({
                file: mappedTypeFile,
                error: `failed to parse HTML: ${toErrorMessage(error)}`,
            });
            continue;
        }

        const typeFile = model.className.startsWith('Dz')
            ? normalizeTargetTypeFile(model.className)
            : mappedTypeFile;
        if (targetTypeFile && typeFile.toLowerCase() !== targetTypeFile.toLowerCase()) {
            continue;
        }

        htmlEntries.push({
            className: model.className,
            htmlFile: entry.name,
            htmlPath,
            typeFile,
            typePath: path.join(typesDir, typeFile),
        });
    }

    htmlEntries.sort((a, b) => a.typeFile.localeCompare(b.typeFile));
    summary.eligibleFiles = htmlEntries.length;

    if (targetTypeFile && allTypeFiles.length === 0 && htmlEntries.length === 0) {
        summary.errors.push({
            file: targetTypeFile,
            error: 'target type file or matching HTML entry was not found',
        });
        return formatSummary(summary);
    }

    const eligibleByFile = new Map(htmlEntries.map(entry => [entry.typeFile, entry]));
    for (const typeFile of allTypeFiles) {
        if (eligibleByFile.has(typeFile)) {
            continue;
        }

        if (isSpecialCaseFile(typeFile)) {
            summary.skippedFiles.push({ file: typeFile, reason: 'special-case support file' });
            continue;
        }

        const expectedHtml = typeFileToHtmlFile(typeFile);
        if (!expectedHtml) {
            summary.skippedFiles.push({ file: typeFile, reason: 'not a mapped object index type file' });
        } else if (!fs.existsSync(path.join(htmlDir, expectedHtml))) {
            summary.skippedFiles.push({ file: typeFile, reason: `no matching HTML file (${expectedHtml})` });
        } else {
            summary.skippedFiles.push({ file: typeFile, reason: 'mapping ambiguity or unsupported file shape' });
        }
    }

    for (const entry of htmlEntries) {
        const model = allHtmlModels.get(entry.className);
        if (!model) {
            continue;
        }
        writeHtmlModel(htmlModelsDir, model);
    }

    const registry = buildClassRegistry(allHtmlModels.values());

    for (const entry of htmlEntries) {
        const model = allHtmlModels.get(entry.className);
        if (!model) {
            continue;
        }

        try {
            const augmentMembers = loadAugmentFile(augmentDir, entry.className)?.members ?? [];
            let original = '';

            if (fs.existsSync(entry.typePath)) {
                original = fs.readFileSync(entry.typePath, 'utf-8');
            }

            const result = rebuildClassFile(model, augmentMembers, registry);
            if (original === result.content) {
                summary.unchangedFiles++;
                continue;
            }

            fs.writeFileSync(entry.typePath, result.content, 'utf-8');
            summary.rebuiltFiles++;
            summary.appliedAugmentMembers += result.appliedAugmentCount;
        } catch (error) {
            summary.errors.push({
                file: entry.typeFile,
                error: toErrorMessage(error),
            });
        }
    }

    const formattedSummary = formatSummary(summary);
    if (!options.pruneAugments) {
        return formattedSummary;
    }

    const pruneSummary = runPruneAugments(generatedTypesRoot, augmentDir, {
        targetType: options.targetType,
        htmlModelsDir,
    });
    return `${formattedSummary}\n\n${pruneSummary}`;
}

async function main() {
    const args = process.argv.slice(2);
    const positional: string[] = [];
    let targetType: string | undefined;
    let pruneAugments = false;

    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--type') {
            targetType = args[i + 1];
            i++;
        } else if (args[i] === '--prune-augments') {
            pruneAugments = true;
        } else {
            positional.push(args[i]);
        }
    }

    const targetDir = positional[0] ?? path.join(process.cwd(), 'src', 'types', 'daz');
    const htmlDir = positional[1] ?? path.join(process.cwd(), 'scripts', 'daz_api_html');
    const summary = await runSyncHtml(targetDir, htmlDir, { targetType, pruneAugments });
    console.log(summary);
}

function toErrorMessage(error: unknown): string {
    return error instanceof Error ? error.message : String(error);
}

function normalizeTargetTypeFile(targetType: string): string {
    const trimmed = targetType.trim();
    if (!trimmed) {
        return trimmed;
    }

    if (trimmed.endsWith('.d.ts')) {
        return path.basename(trimmed);
    }

    if (trimmed.endsWith('_dz.html')) {
        return `dz_${path.basename(trimmed, '.html').replace(/_dz$/i, '')}.d.ts`;
    }

    if (trimmed.endsWith('.html')) {
        return htmlFileToTypeFile(path.basename(trimmed)) ?? `${path.basename(trimmed, '.html')}.d.ts`;
    }

    const canonicalClassName = canonicalizeGeneratedClassName(trimmed);
    if (canonicalClassName.startsWith('Dz')) {
        const suffix = canonicalClassName.slice(2);
        return `dz_${suffix[0].toLowerCase()}${suffix.slice(1)}.d.ts`;
    }

    if (trimmed.startsWith('dz_')) {
        return `${trimmed}.d.ts`;
    }

    return `${canonicalClassName.toLowerCase()}.d.ts`;
}

function deriveGeneratedTypesRoot(typesDir: string): string {
    const normalized = path.basename(typesDir).toLowerCase();
    if (normalized === 'daz' || normalized === 'qt' || normalized === 'common') {
        return path.dirname(typesDir);
    }

    return typesDir;
}

if (require.main === module) {
    main().catch(error => {
        console.error(toErrorMessage(error));
        process.exit(1);
    });
}
