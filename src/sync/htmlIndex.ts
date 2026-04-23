/**
 * Maps between DAZ class names, `.d.ts` filenames, and saved HTML filenames.
 *
 * This module is the single place where naming conventions are encoded so the
 * rest of the pipeline can work with explicit index entries instead of string
 * guessing.
 */
import * as fs from 'fs';
import * as path from 'path';
import { canonicalizeGeneratedClassName, getHtmlSourceClassName } from './typeRenames';

export interface HtmlIndexEntry {
    className: string;
    htmlFile: string;
    htmlPath: string;
    typeFile: string;
    typePath: string;
}

export function classNameToTypeFile(className: string): string {
    const canonicalClassName = canonicalizeGeneratedClassName(className);
    if (!canonicalClassName) {
        throw new Error(`Unsupported class name: ${className}`);
    }

    if (!canonicalClassName.startsWith('Dz') || canonicalClassName.length <= 2) {
        return `${canonicalClassName}.d.ts`;
    }

    const suffix = canonicalClassName.slice(2);
    return `dz_${suffix[0].toLowerCase()}${suffix.slice(1)}.d.ts`;
}

export function classNameToHtmlFile(className: string): string {
    const sourceClassName = getHtmlSourceClassName(className);
    if (!sourceClassName) {
        throw new Error(`Unsupported class name: ${className}`);
    }

    if (!sourceClassName.startsWith('Dz') || sourceClassName.length <= 2) {
        return `${sourceClassName.toLowerCase()}.html`;
    }

    return `${sourceClassName.slice(2).toLowerCase()}_dz.html`;
}

export function typeFileToHtmlFile(typeFile: string): string | null {
    if (!typeFile.endsWith('.d.ts')) {
        return null;
    }

    const className = typeFileToClassName(typeFile);
    return className ? classNameToHtmlFile(className) : null;
}

export function htmlFileToTypeFile(htmlFile: string): string | null {
    if (!htmlFile.endsWith('.html')) {
        return null;
    }

    if (htmlFile === '_index.html') {
        return null;
    }

    if (htmlFile.endsWith('_dz.html')) {
        return `dz_${htmlFile.replace(/_dz\.html$/i, '')}.d.ts`;
    }

    if (htmlFile.toLowerCase() === 'image.html') {
        return classNameToTypeFile('Image');
    }

    return `${htmlFile.slice(0, -5)}.d.ts`;
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
    if (!typeFile.endsWith('.d.ts')) {
        return null;
    }

    if (!typeFile.startsWith('dz_')) {
        const baseName = typeFile.slice(0, -5);
        return canonicalizeGeneratedClassName(baseName || '');
    }

    const suffix = typeFile.slice(3, -5);
    if (!suffix) {
        return null;
    }

    return canonicalizeGeneratedClassName(`Dz${suffix[0].toUpperCase()}${suffix.slice(1)}`);
}
