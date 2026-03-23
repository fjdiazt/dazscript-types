import { describe, it, expect } from 'vitest';
import {
    hasDescriptionInJSDoc,
    countParams,
    buildFixedDeclaration,
    extractDeclaredInherits,
    enrichFileContent,
} from '../scripts/enrichFromDocs';
import { DocumentationData, DocMethod, DocProperty } from '../scripts/docParser';

// ── Test helpers ──────────────────────────────────────────────────────────────

function makeMethod(overrides: Partial<DocMethod> = {}): DocMethod {
    return {
        name: 'testMethod',
        return: 'void',
        params: [],
        description: '',
        ...overrides,
    };
}

function makeDocs(overrides: Partial<DocumentationData> = {}): DocumentationData {
    return {
        className: 'TestClass',
        classSummary: '',
        inherits: '',
        methods: new Map(),
        properties: new Map(),
        signals: new Map(),
        descriptions: new Map(),
        ...overrides,
    };
}

// ── hasDescriptionInJSDoc ─────────────────────────────────────────────────────

describe('hasDescriptionInJSDoc', () => {
    it('returns false for only @tag lines', () => {
        expect(hasDescriptionInJSDoc(['/**', ' * @param x number', ' */']).valueOf()).toBe(false);
    });

    it('returns true when a description line is present', () => {
        expect(hasDescriptionInJSDoc(['/**', ' * Does a thing.', ' * @param x number', ' */']).valueOf()).toBe(true);
    });

    it('returns false for empty JSDoc', () => {
        expect(hasDescriptionInJSDoc(['/**', ' */']).valueOf()).toBe(false);
    });

    it('returns true for single-line /** description */', () => {
        expect(hasDescriptionInJSDoc(['/** Does a thing. */']).valueOf()).toBe(true);
    });

    it('returns false for single-line /** @undocumented */', () => {
        expect(hasDescriptionInJSDoc(['/** @undocumented */']).valueOf()).toBe(false);
    });
});

// ── countParams ───────────────────────────────────────────────────────────────

describe('countParams', () => {
    it('returns 0 for no params', () => {
        expect(countParams('getLabel(): string')).toBe(0);
    });

    it('returns 1 for single param', () => {
        expect(countParams('setLabel(label: string): void')).toBe(1);
    });

    it('returns 2 for two params', () => {
        expect(countParams('findChild(name: string, recursive?: boolean): boolean')).toBe(2);
    });
});

// ── extractDeclaredInherits ───────────────────────────────────────────────────

describe('extractDeclaredInherits', () => {
    it('extracts parent class name', () => {
        expect(extractDeclaredInherits('declare class DzNode extends DzObject {')).toBe('DzObject');
    });

    it('returns empty string when no extends clause', () => {
        expect(extractDeclaredInherits('declare class DzBase {')).toBe('');
    });
});

// ── buildFixedDeclaration ─────────────────────────────────────────────────────

describe('buildFixedDeclaration', () => {
    it('rebuilds method signature from doc overload', () => {
        const overload = makeMethod({
            name: 'getLabel',
            return: 'string',
            params: [],
        });
        const result = buildFixedDeclaration('    getLabel(): QString;', '    ', 'getLabel', overload, makeDocs());
        expect(result).toBe('    getLabel(): string;');
    });

    it('adds optional marker for params with defaults', () => {
        const overload = makeMethod({
            name: 'findChild',
            return: 'boolean',
            params: [
                { name: 'name', type: 'string', default: null },
                { name: 'recursive', type: 'boolean', default: 'false' },
            ],
        });
        const result = buildFixedDeclaration(
            '    findChild(name: string, recursive: boolean): boolean;',
            '    ', 'findChild', overload, makeDocs()
        );
        expect(result).toBe('    findChild(name: string, recursive?: boolean): boolean;');
    });

    it('does not downgrade existing type to any[]', () => {
        const overload = makeMethod({
            name: 'getItems',
            return: 'any[]',
            params: [],
        });
        const result = buildFixedDeclaration(
            '    getItems(): DzNodeList;',
            '    ', 'getItems', overload, makeDocs()
        );
        expect(result).toBe('    getItems(): DzNodeList;');
    });

    it('fixes property type from docs', () => {
        const prop: DocProperty = { name: 'label', type: 'string', description: '' };
        const docs = makeDocs({ properties: new Map([['label', prop]]) });
        const result = buildFixedDeclaration('    label: QString;', '    ', 'label', null, docs);
        expect(result).toBe('    label: string;');
    });

    it('returns line unchanged when no overload and not a property', () => {
        const result = buildFixedDeclaration('    unknown(): void;', '    ', 'unknown', null, makeDocs());
        expect(result).toBe('    unknown(): void;');
    });

    it('preserves trailing // comment when rebuilding a method signature', () => {
        const overload = makeMethod({
            name: 'setLabel',
            return: 'void',
            params: [{ name: 'label', type: 'string', default: null }],
        });
        const result = buildFixedDeclaration(
            '    setLabel(p0: QString): void; // SomeEnum',
            '    ', 'setLabel', overload, makeDocs()
        );
        expect(result).toBe('    setLabel(label: string): void; // SomeEnum');
    });

    it('preserves trailing // comment when fixing a property type', () => {
        const prop: DocProperty = { name: 'priority', type: 'number', description: '' };
        const docs = makeDocs({ properties: new Map([['priority', prop]]) });
        const result = buildFixedDeclaration(
            '    priority: number; // DzRenderMgr::RenderPriority',
            '    ', 'priority', null, docs
        );
        expect(result).toBe('    priority: number; // DzRenderMgr::RenderPriority');
    });
});

// ── enrichFileContent ─────────────────────────────────────────────────────────

describe('enrichFileContent', () => {
    const methodDocs = makeDocs({
        classSummary: 'A test class.',
        methods: new Map([
            ['getLabel', [makeMethod({ name: 'getLabel', return: 'string', params: [], description: 'Returns the label.' })]],
            ['setLabel', [makeMethod({
                name: 'setLabel', return: 'void',
                params: [{ name: 'label', type: 'string', default: null, description: 'The new label.' }],
                description: 'Sets the label.',
            })]],
        ]),
        descriptions: new Map([['getLabel', 'Returns the label.'], ['setLabel', 'Sets the label.']]),
    });

    it('adds JSDoc to undocumented methods', () => {
        const content = `declare class Foo {\n    getLabel(): string;\n}\n`;
        const result = enrichFileContent(content, methodDocs);
        expect(result).toContain('/**');
        expect(result).toContain('Returns the label.');
        expect(result).toContain('getLabel(): string;');
    });

    it('injects classSummary into class JSDoc', () => {
        const content = `/**\n * @docurl https://example.com\n */\ndeclare class Foo {\n    getLabel(): string;\n}\n`;
        const result = enrichFileContent(content, methodDocs);
        expect(result).toContain('A test class.');
    });

    it('adds @undocumented for methods not in docs', () => {
        const content = `declare class Foo {\n    unknownMethod(): void;\n}\n`;
        const result = enrichFileContent(content, methodDocs);
        expect(result).toContain('@undocumented');
    });

    it('does not duplicate JSDoc on second run (idempotent)', () => {
        const content = `declare class Foo {\n    getLabel(): string;\n}\n`;
        const run1 = enrichFileContent(content, methodDocs);
        const run2 = enrichFileContent(run1, methodDocs);
        // Count occurrences of 'Returns the label.'
        const count = (run2.match(/Returns the label\./g) ?? []).length;
        expect(count).toBe(1);
    });

    it('fixes return type from docs', () => {
        const content = `declare class Foo {\n    getLabel(): QString;\n}\n`;
        const result = enrichFileContent(content, methodDocs);
        expect(result).toContain('getLabel(): string;');
        expect(result).not.toContain('getLabel(): QString;');
    });

    it('inserts blank line before each JSDoc block', () => {
        const content = `declare class Foo {\n    getLabel(): string;\n    setLabel(label: string): void;\n}\n`;
        const result = enrichFileContent(content, methodDocs);
        // There should be a blank line between the first declaration and the next JSDoc
        expect(result).toMatch(/getLabel\(\): string;\n\n\s+\/\*\*/);
    });

    it('applies type fix to duplicate identical signatures', () => {
        const content = `declare class Foo {\n    getLabel(): QString;\n    getLabel(): QString;\n}\n`;
        const result = enrichFileContent(content, methodDocs);
        expect(result).not.toContain('getLabel(): QString;');
        // Both occurrences should be fixed
        const matches = result.match(/getLabel\(\): string;/g) ?? [];
        expect(matches.length).toBe(2);
    });

    it('prepends issues block to file when issues provided', () => {
        const content = `declare class Foo {\n}\n`;
        const result = enrichFileContent(content, methodDocs, ['Something is wrong.']);
        expect(result.startsWith('/* @enricher-issues')).toBe(true);
        expect(result).toContain('Something is wrong.');
    });

    it('strips stale issues block before re-adding', () => {
        const content = `declare class Foo {\n}\n`;
        const run1 = enrichFileContent(content, methodDocs, ['Issue A.']);
        const run2 = enrichFileContent(run1, methodDocs, ['Issue A.']);
        const count = (run2.match(/@enricher-issues/g) ?? []).length;
        expect(count).toBe(1);
    });

    it('suppresses file issues block when noFileIssues=true', () => {
        const content = `declare class Foo {\n}\n`;
        const result = enrichFileContent(content, methodDocs, ['Issue.'], true);
        expect(result).not.toContain('@enricher-issues');
    });

    it('recognises a property with a trailing // comment as a declaration', () => {
        const content = `declare class Foo {\n    getLabel(): string; // SomeAnnotation\n}\n`;
        const result = enrichFileContent(content, methodDocs);
        expect(result).toContain('Returns the label.');
        expect(result).toContain('getLabel(): string; // SomeAnnotation');
    });

    it('recognises a method with a trailing // comment as a declaration', () => {
        const content = `declare class Foo {\n    setLabel(label: string): void; // SomeEnum\n}\n`;
        const result = enrichFileContent(content, methodDocs);
        expect(result).toContain('Sets the label.');
        expect(result).toContain('setLabel(label: string): void; // SomeEnum');
    });
});
