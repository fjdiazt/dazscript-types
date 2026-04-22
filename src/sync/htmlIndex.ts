/**
 * Maps between DAZ class names, `.d.ts` filenames, and saved HTML filenames.
 *
 * This module is the single place where naming conventions are encoded so the
 * rest of the pipeline can work with explicit index entries instead of string
 * guessing.
 */
import * as fs from 'fs';
import * as path from 'path';

export const SPECIAL_SKIP_FILES = new Set([
    'dz_signals.d.ts',
]);

export interface HtmlIndexEntry {
    className: string;
    htmlFile: string;
    htmlPath: string;
    typeFile: string;
    typePath: string;
}

export function classNameToTypeFile(className: string): string {
    if (!className.startsWith('Dz') || className.length <= 2) {
        throw new Error(`Unsupported class name: ${className}`);
    }

    const suffix = className.slice(2);
    return `dz_${suffix[0].toLowerCase()}${suffix.slice(1)}.d.ts`;
}

export function classNameToHtmlFile(className: string): string {
    if (!className.startsWith('Dz') || className.length <= 2) {
        throw new Error(`Unsupported class name: ${className}`);
    }

    return `${className.slice(2).toLowerCase()}_dz.html`;
}

export function typeFileToHtmlFile(typeFile: string): string | null {
    if (!typeFile.startsWith('dz_') || !typeFile.endsWith('.d.ts')) {
        return null;
    }

    return `${typeFile.slice(3, -5).toLowerCase()}_dz.html`;
}

export function isSpecialCaseFile(typeFile: string): boolean {
    return SPECIAL_SKIP_FILES.has(path.basename(typeFile));
}

/**
 * Build the set of eligible 1:1 type/html mappings for the rebuild pass.
 */
export function buildHtmlIndex(typesDir: string, htmlDir: string): HtmlIndexEntry[] {
    const htmlFiles = new Map<string, string>();
    for (const entry of fs.readdirSync(htmlDir, { withFileTypes: true })) {
        if (entry.isFile() && entry.name.endsWith('.html')) {
            htmlFiles.set(entry.name.toLowerCase(), path.join(htmlDir, entry.name));
        }
    }

    const entries: HtmlIndexEntry[] = [];
    for (const entry of fs.readdirSync(typesDir, { withFileTypes: true })) {
        if (!entry.isFile() || !entry.name.endsWith('.d.ts')) {
            continue;
        }

        if (isSpecialCaseFile(entry.name)) {
            continue;
        }

        const htmlFile = typeFileToHtmlFile(entry.name);
        if (!htmlFile) {
            continue;
        }

        const htmlPath = htmlFiles.get(htmlFile.toLowerCase());
        if (!htmlPath) {
            continue;
        }

        const typePath = path.join(typesDir, entry.name);
        const className = typeFileToClassName(entry.name);
        if (!className) {
            continue;
        }

        entries.push({
            className,
            htmlFile,
            htmlPath,
            typeFile: entry.name,
            typePath,
        });
    }

    return entries.sort((a, b) => a.typeFile.localeCompare(b.typeFile));
}

function typeFileToClassName(typeFile: string): string | null {
    if (!typeFile.startsWith('dz_') || !typeFile.endsWith('.d.ts')) {
        return null;
    }

    const suffix = typeFile.slice(3, -5);
    if (!suffix) {
        return null;
    }

    return `Dz${suffix[0].toUpperCase()}${suffix.slice(1)}`;
}
