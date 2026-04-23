import * as fs from 'fs';
import * as path from 'path';
import { classNameToTypeFile } from './htmlIndex';
import { DazClassModel, LegacyMember } from './typeModel';

export interface ClassAugmentFile {
    className: string;
    members: LegacyMember[];
}

export function ensureDir(dir: string): void {
    fs.mkdirSync(dir, { recursive: true });
}

export function getHtmlModelPath(modelsDir: string, className: string): string {
    const typeFile = classNameToTypeFile(className);
    return path.join(modelsDir, typeFile.replace(/\.d\.ts$/i, '.json'));
}

export function writeHtmlModel(modelsDir: string, model: DazClassModel): void {
    ensureDir(modelsDir);
    fs.writeFileSync(getHtmlModelPath(modelsDir, model.className), JSON.stringify(model, null, 2), 'utf-8');
}

export function loadHtmlModels(modelsDir: string): Map<string, DazClassModel> {
    const models = new Map<string, DazClassModel>();
    if (!fs.existsSync(modelsDir)) {
        return models;
    }

    for (const entry of fs.readdirSync(modelsDir, { withFileTypes: true })) {
        if (!entry.isFile() || !entry.name.endsWith('.json')) {
            continue;
        }

        const fullPath = path.join(modelsDir, entry.name);
        const model = JSON.parse(fs.readFileSync(fullPath, 'utf-8')) as DazClassModel;
        models.set(model.className, model);
    }

    return models;
}

export function getAugmentPath(augmentDir: string, className: string): string {
    const typeFile = classNameToTypeFile(className);
    return path.join(augmentDir, typeFile.replace(/\.d\.ts$/i, '.json'));
}

export function loadAugmentFile(augmentDir: string, className: string): ClassAugmentFile | null {
    const filePath = getAugmentPath(augmentDir, className);
    if (!fs.existsSync(filePath)) {
        return null;
    }

    return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as ClassAugmentFile;
}

export function writeAugmentFile(augmentDir: string, augment: ClassAugmentFile): void {
    ensureDir(augmentDir);
    fs.writeFileSync(getAugmentPath(augmentDir, augment.className), JSON.stringify(augment, null, 2), 'utf-8');
}

export function deleteAugmentFile(augmentDir: string, className: string): void {
    const filePath = getAugmentPath(augmentDir, className);
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }
}
