import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';
import { describe, it, expect, beforeAll } from 'vitest';
import {
    parseDocsFromUrl,
    generateJSDocComment,
    generateUndocumentedMarker,
    DocumentationData,
} from '../scripts/docParser';

// ── Helpers ──────────────────────────────────────────────────────────────────

const FIXTURE_PATH = path.join(__dirname, 'fixtures', 'DzTestClass.html');

/**
 * Load fixture HTML and call parseDocsFromUrl via a mock that returns the
 * fixture content instead of hitting the network.
 *
 * We do this by monkey-patching axios inside the module resolver. A simpler
 * approach: expose a parse-from-html helper. For now we call the internal
 * helpers directly through cheerio, then verify the full pipeline with a
 * mock at the axios layer.
 */
let docs: DocumentationData;

// Inline helper that replicates what parseDocsFromUrl does, but from a
// local file — avoids needing to mock axios.
async function parseFixture(fixturePath: string): Promise<DocumentationData> {
    // Dynamically mock axios for the duration of this call
    const axios = await import('axios');
    const html = fs.readFileSync(fixturePath, 'utf-8');
    const original = axios.default.get;
    (axios.default as any).get = async () => ({ data: html });
    try {
        return await parseDocsFromUrl('http://fixture');
    } finally {
        (axios.default as any).get = original;
    }
}

beforeAll(async () => {
    docs = await parseFixture(FIXTURE_PATH);
});

// ── Class-level extraction ────────────────────────────────────────────────────

describe('class metadata', () => {
    it('extracts className', () => {
        expect(docs.className).toBe('DzTestClass');
    });

    it('extracts classSummary', () => {
        expect(docs.classSummary).toBe('Base class for testing the doc parser pipeline.');
    });

    it('extracts direct parent from nested inheritance chain', () => {
        // Chain: QObject > DzBase > DzElement — direct parent is DzElement
        expect(docs.inherits).toBe('DzElement');
    });
});

// ── Properties ────────────────────────────────────────────────────────────────

describe('properties', () => {
    it('parses all properties', () => {
        expect(docs.properties.size).toBe(5);
    });

    it('normalises String type to string', () => {
        expect(docs.properties.get('label')?.type).toBe('string');
    });

    it('normalises Number type to number', () => {
        expect(docs.properties.get('count')?.type).toBe('number');
    });

    it('normalises Boolean type to boolean', () => {
        expect(docs.properties.get('visible')?.type).toBe('boolean');
    });

    it('normalises Array type to any[]', () => {
        expect(docs.properties.get('items')?.type).toBe('any[]');
    });

    it('converts C++ X::Y enum type to number', () => {
        expect(docs.properties.get('priority')?.type).toBe('number');
    });

    it('populates property description from Detailed Description section', () => {
        expect(docs.properties.get('label')?.description).toBe('The display label for the object.');
    });

    it('populates property since from Detailed Description section', () => {
        expect(docs.properties.get('label')?.since).toBe('4.5.0.0');
    });
});

// ── Methods ───────────────────────────────────────────────────────────────────

describe('methods', () => {
    it('parses all method names', () => {
        expect([...docs.methods.keys()].sort()).toEqual(
            ['className', 'findChild', 'getLabel', 'overloaded', 'setLabel'].sort()
        );
    });

    it('parses void return type', () => {
        expect(docs.methods.get('setLabel')?.[0].return).toBe('void');
    });

    it('parses normalised string return type', () => {
        expect(docs.methods.get('getLabel')?.[0].return).toBe('string');
    });

    it('parses method with no params', () => {
        expect(docs.methods.get('getLabel')?.[0].params).toHaveLength(0);
    });

    it('parses method params with types and names', () => {
        const params = docs.methods.get('setLabel')?.[0].params ?? [];
        expect(params).toHaveLength(1);
        expect(params[0]).toMatchObject({ name: 'label', type: 'string', default: null });
    });

    it('parses optional param default value', () => {
        const params = docs.methods.get('findChild')?.[0].params ?? [];
        const recursive = params.find(p => p.name === 'recursive');
        expect(recursive?.default).toBe('false');
    });

    it('parses two overloads for overloaded method', () => {
        expect(docs.methods.get('overloaded')).toHaveLength(2);
    });

    it('populates method description', () => {
        expect(docs.methods.get('setLabel')?.[0].description).toBe('Sets the label of the object.');
    });

    it('populates return description', () => {
        expect(docs.methods.get('getLabel')?.[0].returnDescription).toBe('The current label string.');
    });

    it('populates since version', () => {
        expect(docs.methods.get('setLabel')?.[0].since).toBe('4.6.0.0');
    });

    it('populates param descriptions', () => {
        const params = docs.methods.get('setLabel')?.[0].params ?? [];
        expect(params[0].description).toBe('The new label to assign.');
    });

    it('matches overloads by param count', () => {
        const overloads = docs.methods.get('overloaded') ?? [];
        const oneParam = overloads.find(o => o.params.length === 1);
        const twoParam = overloads.find(o => o.params.length === 2);
        expect(oneParam?.description).toBe('Overload taking a name string.');
        expect(twoParam?.description).toBe('Overload taking an index and flag.');
    });
});

// ── Signals ───────────────────────────────────────────────────────────────────

describe('signals', () => {
    it('parses signal name', () => {
        expect(docs.signals.has('labelChanged')).toBe(true);
    });

    it('parses signal params', () => {
        const params = docs.signals.get('labelChanged')?.[0].params ?? [];
        expect(params).toHaveLength(1);
        expect(params[0]).toMatchObject({ name: 'newLabel', type: 'string' });
    });

    it('populates signal description', () => {
        expect(docs.signals.get('labelChanged')?.[0].description).toBe('Emitted when the label changes.');
    });
});

// ── generateJSDocComment ──────────────────────────────────────────────────────

describe('generateJSDocComment', () => {
    it('generates minimal comment for no params / void return', () => {
        const out = generateJSDocComment('Does a thing.', [], 'void');
        expect(out).toBe('/**\n * Does a thing.\n */\n');
    });

    it('includes @param lines', () => {
        const out = generateJSDocComment('Desc.', [{ name: 'x', type: 'number', default: null }], 'void');
        expect(out).toContain('@param x number');
    });

    it('includes @returns line with description', () => {
        const out = generateJSDocComment('Desc.', [], 'string', undefined, 'The value.');
        expect(out).toContain('@returns string The value.');
    });

    it('omits @returns for void', () => {
        const out = generateJSDocComment('Desc.', [], 'void');
        expect(out).not.toContain('@returns');
    });

    it('includes @since when provided', () => {
        const out = generateJSDocComment('Desc.', [], 'void', '4.6.0.0');
        expect(out).toContain('@since 4.6.0.0');
    });

    it('includes param description when present', () => {
        const out = generateJSDocComment('Desc.', [{ name: 'x', type: 'number', default: null, description: 'The x value.' }], 'void');
        expect(out).toContain('@param x number - The x value.');
    });
});

describe('generateUndocumentedMarker', () => {
    it('returns @undocumented marker', () => {
        expect(generateUndocumentedMarker()).toBe('/** @undocumented */\n');
    });
});
