import * as fs from 'fs';
import * as path from 'path';
import { buildClassRegistry, resolveAncestorMembers } from './ancestorRegistry';
import { deleteAugmentFile, loadHtmlModels, writeAugmentFile } from './artifactStore';
import { parseLegacyClass } from './legacyReader';
import { LegacyClassInfo, LegacyMember } from './typeModel';

export interface PruneAugmentsOptions {
    targetType?: string;
    htmlModelsDir?: string;
}

export function runPruneAugments(
    generatedTypesRoot: string,
    augmentDir: string,
    options: PruneAugmentsOptions = {}
): string {
    const targetType = options.targetType?.trim().toLowerCase() ?? null;
    const generatedClasses = loadGeneratedClasses(generatedTypesRoot);
    const htmlModels = options.htmlModelsDir ? loadHtmlModels(options.htmlModelsDir) : new Map();
    const registry = buildClassRegistry(htmlModels.values(), generatedClasses);
    const lines: string[] = ['Augment Prune Summary'];
    let prunedFiles = 0;
    let removedMembers = 0;

    if (!fs.existsSync(augmentDir)) {
        lines.push('- Augment files scanned: 0');
        lines.push('- Pruned files: 0');
        lines.push('- Removed members: 0');
        return lines.join('\n');
    }

    const augmentEntries = fs.readdirSync(augmentDir, { withFileTypes: true })
        .filter(entry => entry.isFile() && entry.name.endsWith('.json'))
        .sort((a, b) => a.name.localeCompare(b.name));

    for (const entry of augmentEntries) {
        const fullPath = path.join(augmentDir, entry.name);
        const augment = JSON.parse(fs.readFileSync(fullPath, 'utf-8')) as { className: string; members: LegacyMember[] };
        if (targetType && augment.className.toLowerCase() !== targetType && entry.name.toLowerCase() !== targetType) {
            continue;
        }

        const ancestorMembers = resolveAncestorMembers(augment.className, registry);
        const kept = augment.members.filter(member => !isRedundantAugmentMember(member, ancestorMembers));
        const removed = augment.members.length - kept.length;

        if (removed === 0) {
            continue;
        }

        removedMembers += removed;
        prunedFiles++;

        for (const member of augment.members) {
            if (kept.includes(member)) {
                continue;
            }
            lines.push(`- ${augment.className}: removed ${member.name} (already inherited in final generated types)`);
        }

        if (kept.length === 0) {
            deleteAugmentFile(augmentDir, augment.className);
            continue;
        }

        writeAugmentFile(augmentDir, { className: augment.className, members: kept });
    }

    lines.splice(1, 0, `- Augment files scanned: ${augmentEntries.length}`, `- Pruned files: ${prunedFiles}`, `- Removed members: ${removedMembers}`);
    return lines.join('\n');
}

function loadGeneratedClasses(typesRoot: string): LegacyClassInfo[] {
    const classes: LegacyClassInfo[] = [];
    for (const filePath of walkTypeFiles(typesRoot)) {
        const parsed = parseLegacyClass(fs.readFileSync(filePath, 'utf-8'));
        if (!parsed) {
            continue;
        }

        classes.push(parsed);
    }

    return classes;
}

function* walkTypeFiles(root: string): Iterable<string> {
    if (!fs.existsSync(root)) {
        return;
    }

    for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
        const fullPath = path.join(root, entry.name);
        if (entry.isDirectory()) {
            yield* walkTypeFiles(fullPath);
            continue;
        }

        if (entry.isFile() && entry.name.endsWith('.d.ts')) {
            yield fullPath;
        }
    }
}

function isRedundantAugmentMember(member: LegacyMember, ancestorMembers: ReturnType<typeof resolveAncestorMembers>): boolean {
    if (member.kind === 'constructor') {
        return false;
    }

    const ancestorKind = member.kind === 'property' ? 'property' : 'method';
    return ancestorMembers.some(ancestor => ancestor.kind === ancestorKind && ancestor.name === member.name);
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

    const generatedTypesRoot = path.join(process.cwd(), 'src', 'types');
    const augmentDir = path.join(process.cwd(), 'src', 'augments', 'daz');
    const htmlModelsDir = path.join(process.cwd(), '.generated', 'html-models');
    console.log(runPruneAugments(generatedTypesRoot, augmentDir, { targetType, htmlModelsDir }));
}
