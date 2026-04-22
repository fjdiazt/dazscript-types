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
 * 3. `parseLegacyClass()` reads existing `.d.ts` files for recovery data.
 * 4. `buildClassRegistry()` prepares ancestor lookups across known classes.
 * 5. `rebuildClassFile()` renders the final file content for each eligible class.
 * 6. `createSummary()` / `formatSummary()` report rebuilt, skipped, and failed files.
 */
import * as fs from 'fs';
import * as path from 'path';
import { buildClassRegistry } from './ancestorRegistry';
import { buildHtmlIndex, isSpecialCaseFile, typeFileToHtmlFile } from './htmlIndex';
import { parseHtmlFile } from './htmlParser';
import { parseLegacyClass } from './legacyReader';
import { createSummary, formatSummary } from './report';
import { rebuildClassFile } from './rebuild';
import { DazClassModel, LegacyClassInfo } from './typeModel';

export interface SyncHtmlOptions {
    targetType?: string;
}

/**
 * Run the local HTML sync for all eligible types or one targeted type.
 */
export async function runSyncHtml(typesDir: string, htmlDir: string, options: SyncHtmlOptions = {}): Promise<string> {
    const targetTypeFile = options.targetType ? normalizeTargetTypeFile(options.targetType) : null;
    const summary = createSummary();
    const discoveredTypeFiles = fs.readdirSync(typesDir, { withFileTypes: true })
        .filter(entry => entry.isFile() && entry.name.endsWith('.d.ts'))
        .map(entry => entry.name)
        .sort();
    const allTypeFiles = targetTypeFile
        ? discoveredTypeFiles.filter(file => file.toLowerCase() === targetTypeFile.toLowerCase())
        : discoveredTypeFiles;
    summary.scannedFiles = allTypeFiles.length;

    if (targetTypeFile && allTypeFiles.length === 0) {
        summary.errors.push({
            file: targetTypeFile,
            error: 'target type file was not found',
        });
        return formatSummary(summary);
    }

    const htmlIndex = buildHtmlIndex(typesDir, htmlDir).filter(entry =>
        !targetTypeFile || entry.typeFile.toLowerCase() === targetTypeFile.toLowerCase()
    );
    summary.eligibleFiles = htmlIndex.length;

    const eligibleByFile = new Map(htmlIndex.map(entry => [entry.typeFile, entry]));
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
            summary.skippedFiles.push({ file: typeFile, reason: 'not a mapped Dz class file' });
        } else if (!fs.existsSync(path.join(htmlDir, expectedHtml))) {
            summary.skippedFiles.push({ file: typeFile, reason: `no matching HTML file (${expectedHtml})` });
        } else {
            summary.skippedFiles.push({ file: typeFile, reason: 'mapping ambiguity or unsupported file shape' });
        }
    }

    const htmlModels = new Map<string, DazClassModel>();
    const legacyClasses = new Map<string, LegacyClassInfo>();

    for (const entry of htmlIndex) {
        try {
            htmlModels.set(entry.className, parseHtmlFile(entry.htmlPath));
        } catch (error) {
            summary.errors.push({
                file: entry.typeFile,
                error: `failed to parse HTML: ${toErrorMessage(error)}`,
            });
        }
    }

    for (const typeFile of allTypeFiles) {
        const typePath = path.join(typesDir, typeFile);
        const parsed = parseLegacyClass(fs.readFileSync(typePath, 'utf-8'));
        if (parsed) {
            legacyClasses.set(parsed.className, parsed);
        }
    }

    const registry = buildClassRegistry(htmlModels.values(), legacyClasses.values());

    for (const entry of htmlIndex) {
        const model = htmlModels.get(entry.className);
        if (!model) {
            continue;
        }

        const legacy = parseLegacyClass(fs.readFileSync(entry.typePath, 'utf-8'), entry.className);
        if (!legacy) {
            summary.errors.push({ file: entry.typeFile, error: 'failed to parse existing type file' });
            continue;
        }

        if (legacy.hasUnsafeTopLevelContent) {
            summary.skippedFiles.push({ file: entry.typeFile, reason: 'unsafe top-level content in existing file' });
            continue;
        }

        try {
            const result = rebuildClassFile(model, legacy.members, registry);
            const original = fs.readFileSync(entry.typePath, 'utf-8');
            if (original === result.content) {
                summary.unchangedFiles++;
                continue;
            }

            fs.writeFileSync(entry.typePath, result.content, 'utf-8');
            summary.rebuiltFiles++;
            summary.recoveredLegacyMembers += result.recoveredLegacyCount;
        } catch (error) {
            summary.errors.push({
                file: entry.typeFile,
                error: toErrorMessage(error),
            });
        }
    }

    return formatSummary(summary);
}

async function main() {
    const args = process.argv.slice(2);
    const positional: string[] = [];
    let targetType: string | undefined;

    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--type') {
            targetType = args[i + 1];
            i++;
        } else {
            positional.push(args[i]);
        }
    }

    const targetDir = positional[0] ?? path.join(process.cwd(), 'src', 'types', 'daz');
    const htmlDir = positional[1] ?? path.join(process.cwd(), 'scripts', 'daz_api_html');
    const summary = await runSyncHtml(targetDir, htmlDir, { targetType });
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

    if (trimmed.startsWith('Dz')) {
        const suffix = trimmed.slice(2);
        return `dz_${suffix[0].toLowerCase()}${suffix.slice(1)}.d.ts`;
    }

    if (trimmed.startsWith('dz_')) {
        return `${trimmed}.d.ts`;
    }

    return `dz_${trimmed}.d.ts`;
}

if (require.main === module) {
    main().catch(error => {
        console.error(toErrorMessage(error));
        process.exit(1);
    });
}
