import * as fs from 'fs';
import * as path from 'path';
import { buildClassRegistry } from './ancestorRegistry';
import { buildHtmlIndex, isSpecialCaseFile, typeFileToHtmlFile } from './htmlIndex';
import { parseHtmlFile } from './htmlParser';
import { parseLegacyClass } from './legacyReader';
import { createSummary, formatSummary } from './report';
import { rebuildClassFile } from './rebuild';
import { DazClassModel, LegacyClassInfo } from './typeModel';

export async function runSyncHtml(typesDir: string, htmlDir: string): Promise<string> {
    const summary = createSummary();
    const allTypeFiles = fs.readdirSync(typesDir, { withFileTypes: true })
        .filter(entry => entry.isFile() && entry.name.endsWith('.d.ts'))
        .map(entry => entry.name)
        .sort();
    summary.scannedFiles = allTypeFiles.length;

    const htmlIndex = buildHtmlIndex(typesDir, htmlDir);
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
    const targetDir = process.argv[2] ?? path.join(process.cwd(), 'src', 'types', 'daz');
    const htmlDir = process.argv[3] ?? path.join(process.cwd(), 'scripts', 'daz_api_html');
    const summary = await runSyncHtml(targetDir, htmlDir);
    console.log(summary);
}

function toErrorMessage(error: unknown): string {
    return error instanceof Error ? error.message : String(error);
}

if (require.main === module) {
    main().catch(error => {
        console.error(toErrorMessage(error));
        process.exit(1);
    });
}
