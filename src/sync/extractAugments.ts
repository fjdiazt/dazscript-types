import * as fs from 'fs';
import * as path from 'path';
import { buildClassRegistry, resolveAncestorMembers } from './ancestorRegistry';
import { deleteAugmentFile, ensureDir, loadHtmlModels, writeAugmentFile } from './artifactStore';
import { classNameToTypeFile } from './htmlIndex';
import { parseHtmlFile } from './htmlParser';
import { parseLegacyClass } from './legacyReader';
import { DazClassModel, LegacyClassInfo, LegacyMember } from './typeModel';

export interface ExtractAugmentsOptions {
    targetType?: string;
}

export function runExtractAugments(
    legacyTypesDir: string,
    htmlDir: string,
    htmlModelsDir: string,
    augmentDir: string,
    options: ExtractAugmentsOptions = {},
): string {
    const targetType = options.targetType ? normalizeTargetTypeFile(options.targetType) : null;
    ensureHtmlModels(htmlDir, htmlModelsDir, targetType);

    const htmlModels = loadHtmlModels(htmlModelsDir);
    const registry = buildClassRegistry(htmlModels.values());
    const lines: string[] = ['Augment Extraction Summary'];
    let written = 0;
    let skipped = 0;

    for (const [className, model] of htmlModels) {
        const typeFile = classNameToTypeFile(className);
        if (targetType && typeFile.toLowerCase() !== targetType.toLowerCase()) {
            continue;
        }

        const legacyPath = path.join(legacyTypesDir, typeFile);
        if (!fs.existsSync(legacyPath)) {
            deleteAugmentFile(augmentDir, className);
            continue;
        }

        const legacy = parseLegacyClass(fs.readFileSync(legacyPath, 'utf-8'), className);
        if (!legacy) {
            lines.push(`- ${typeFile}: failed to parse legacy type`);
            skipped++;
            continue;
        }

        const members = extractUndocumentedMembers(model, legacy, registry, lines);
        if (members.length === 0) {
            deleteAugmentFile(augmentDir, className);
            continue;
        }

        writeAugmentFile(augmentDir, { className, members });
        written++;
    }

    lines.splice(1, 0, `- Augment files written: ${written}`, `- Skipped files: ${skipped}`);
    return lines.join('\n');
}

function ensureHtmlModels(htmlDir: string, htmlModelsDir: string, targetType: string | null): void {
    ensureDir(htmlModelsDir);

    for (const entry of fs.readdirSync(htmlDir, { withFileTypes: true })) {
        if (!entry.isFile() || !entry.name.endsWith('.html') || entry.name === '_index.html') {
            continue;
        }

        const model = parseHtmlFile(path.join(htmlDir, entry.name));
        const typeFile = classNameToTypeFile(model.className);
        if (targetType && typeFile.toLowerCase() !== targetType.toLowerCase()) {
            continue;
        }

        fs.writeFileSync(
            path.join(htmlModelsDir, typeFile.replace(/\.d\.ts$/i, '.json')),
            JSON.stringify(model, null, 2),
            'utf-8',
        );
    }
}

function extractUndocumentedMembers(
    model: DazClassModel,
    legacy: LegacyClassInfo,
    registry: ReturnType<typeof buildClassRegistry>,
    lines: string[],
): LegacyMember[] {
    const classNames = new Set<string>([
        ...model.enums.map(member => member.name),
        ...model.properties.map(member => member.name),
        ...model.staticMethods.map(member => member.name),
        ...model.methods.map(member => member.name),
        ...model.signals.map(member => member.name),
        ...model.constructors.map(member => member.name),
    ]);
    const ancestorNames = new Set(resolveAncestorMembers(model.className, registry).map(member => member.name));

    const extracted: LegacyMember[] = [];
    for (const member of legacy.members) {
        if (classNames.has(member.name)) {
            lines.push(`- ${model.className}: skipped ${member.name} (documented in class HTML)`);
            continue;
        }

        if (ancestorNames.has(member.name)) {
            lines.push(`- ${model.className}: skipped ${member.name} (documented in HTML ancestry)`);
            continue;
        }

        extracted.push(member);
    }

    return extracted;
}

function normalizeTargetTypeFile(targetType: string): string {
    const trimmed = targetType.trim();
    if (!trimmed) {
        return trimmed;
    }

    if (trimmed.endsWith('.d.ts')) {
        return path.basename(trimmed);
    }

    if (trimmed.startsWith('Dz')) {
        return classNameToTypeFile(trimmed);
    }

    return `${trimmed}.d.ts`;
}

if (require.main === module) {
    const args = process.argv.slice(2);
    let targetType: string | undefined;

    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--type') {
            targetType = args[i + 1];
            i++;
        }
    }

    const legacyTypesDir = path.join(process.cwd(), 'src', 'types', 'daz');
    const htmlDir = path.join(process.cwd(), 'scripts', 'daz_api_html');
    const htmlModelsDir = path.join(process.cwd(), '.generated', 'html-models');
    const augmentDir = path.join(process.cwd(), 'src', 'augments', 'daz');
    console.log(runExtractAugments(legacyTypesDir, htmlDir, htmlModelsDir, augmentDir, { targetType }));
}
