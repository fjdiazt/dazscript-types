import { describe, it, expect } from 'vitest';
import {
    hasDescriptionInJSDoc,
    countParams,
    buildFixedDeclaration,
    extractDeclaredInherits,
    syncFileContent,
} from '../scripts/sync';
import { DocumentationData, DocMethod, DocProperty, DocSignal } from '../scripts/docParser';

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

// ── syncFileContent ─────────────────────────────────────────────────────────

describe('syncFileContent', () => {
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
        const result = syncFileContent(content, methodDocs);
        expect(result).toContain('/**');
        expect(result).toContain('Returns the label.');
        expect(result).toContain('getLabel(): string;');
    });

    it('injects classSummary into class JSDoc', () => {
        const content = `/**\n * @docurl https://example.com\n */\ndeclare class Foo {\n    getLabel(): string;\n}\n`;
        const result = syncFileContent(content, methodDocs);
        expect(result).toContain('A test class.');
    });

    it('adds @undocumented for methods not in docs', () => {
        const content = `declare class Foo {\n    unknownMethod(): void;\n}\n`;
        const result = syncFileContent(content, methodDocs);
        expect(result).toContain('@undocumented');
    });

    it('does not duplicate JSDoc on second run (idempotent)', () => {
        const content = `declare class Foo {\n    getLabel(): string;\n}\n`;
        const run1 = syncFileContent(content, methodDocs);
        const run2 = syncFileContent(run1, methodDocs);
        // Count occurrences of 'Returns the label.'
        const count = (run2.match(/Returns the label\./g) ?? []).length;
        expect(count).toBe(1);
    });

    it('fixes return type from docs', () => {
        const content = `declare class Foo {\n    getLabel(): QString;\n}\n`;
        const result = syncFileContent(content, methodDocs);
        expect(result).toContain('getLabel(): string;');
        expect(result).not.toContain('getLabel(): QString;');
    });

    it('inserts blank line before each JSDoc block', () => {
        const content = `declare class Foo {\n    getLabel(): string;\n    setLabel(label: string): void;\n}\n`;
        const result = syncFileContent(content, methodDocs);
        // There should be a blank line between the first declaration and the next JSDoc
        expect(result).toMatch(/getLabel\(\): string;\n\n\s+\/\*\*/);
    });

    it('applies type fix to duplicate identical signatures and deduplicates them', () => {
        const content = `declare class Foo {\n    getLabel(): QString;\n    getLabel(): QString;\n}\n`;
        const result = syncFileContent(content, methodDocs);
        expect(result).not.toContain('getLabel(): QString;');
        // Duplicate identical declarations are removed — only one should remain
        const matches = result.match(/getLabel\(\): string;/g) ?? [];
        expect(matches.length).toBe(1);
    });

    it('prepends issues block to file when issues provided', () => {
        const content = `declare class Foo {\n}\n`;
        const result = syncFileContent(content, methodDocs, ['Something is wrong.']);
        expect(result.startsWith('/* @syncer-issues')).toBe(true);
        expect(result).toContain('Something is wrong.');
    });

    it('strips stale issues block before re-adding', () => {
        const content = `declare class Foo {\n}\n`;
        const run1 = syncFileContent(content, methodDocs, ['Issue A.']);
        const run2 = syncFileContent(run1, methodDocs, ['Issue A.']);
        const count = (run2.match(/@syncer-issues/g) ?? []).length;
        expect(count).toBe(1);
    });

    it('suppresses file issues block when noFileIssues=true', () => {
        const content = `declare class Foo {\n}\n`;
        const result = syncFileContent(content, methodDocs, ['Issue.'], true);
        expect(result).not.toContain('@syncer-issues');
    });

    it('converts a method-format signal to ISignalT<T> property (1 param)', () => {
        const signal: DocSignal = {
            name: 'labelChanged',
            return: 'void',
            params: [{ name: 'newLabel', type: 'string', default: null }],
            description: 'Emitted when the label changes.',
        };
        const docs = makeDocs({ signals: new Map([['labelChanged', [signal]]]) });
        const content = `declare class Foo {\n    labelChanged(newLabel: QString): void;\n}\n`;
        const result = syncFileContent(content, docs);
        expect(result).toContain('labelChanged: ISignalT<string>;');
        expect(result).not.toContain('labelChanged(');
    });

    it('converts a 0-param method-format signal to ISignalT<void>', () => {
        const signal: DocSignal = {
            name: 'clicked',
            return: 'void',
            params: [],
            description: 'Emitted when clicked.',
        };
        const docs = makeDocs({ signals: new Map([['clicked', [signal]]]) });
        const content = `declare class Foo {\n    clicked(): void;\n}\n`;
        const result = syncFileContent(content, docs);
        expect(result).toContain('clicked: ISignalT<void>;');
        expect(result).not.toContain('clicked(');
    });

    it('converts a 2-param method-format signal to ISignalT<T1, T2>', () => {
        const signal: DocSignal = {
            name: 'selected',
            return: 'void',
            params: [
                { name: 'node', type: 'DzNode', default: null },
                { name: 'onOff', type: 'boolean', default: null },
            ],
            description: 'Emitted when selection changes.',
        };
        const docs = makeDocs({ signals: new Map([['selected', [signal]]]) });
        const content = `declare class Foo {\n    selected(node: DzNode, onOff: boolean): void;\n}\n`;
        const result = syncFileContent(content, docs);
        expect(result).toContain('selected: ISignalT<DzNode, boolean>;');
    });

    it('generates description-only JSDoc for a converted signal (no @param)', () => {
        const signal: DocSignal = {
            name: 'labelChanged',
            return: 'void',
            params: [{ name: 'newLabel', type: 'string', default: null }],
            description: 'Emitted when the label changes.',
        };
        const docs = makeDocs({ signals: new Map([['labelChanged', [signal]]]) });
        const content = `declare class Foo {\n    labelChanged(newLabel: QString): void;\n}\n`;
        const result = syncFileContent(content, docs);
        expect(result).toContain('Emitted when the label changes.');
        expect(result).not.toContain('@param');
    });

    it('preserves existing ISignalT property format and only updates JSDoc', () => {
        const signal: DocSignal = {
            name: 'labelChanged',
            return: 'void',
            params: [{ name: 'newLabel', type: 'string', default: null }],
            description: 'Emitted when the label changes.',
        };
        const docs = makeDocs({ signals: new Map([['labelChanged', [signal]]]) });
        const content = `declare class Foo {\n    labelChanged: ISignalT<string>;\n}\n`;
        const result = syncFileContent(content, docs);
        expect(result).toContain('labelChanged: ISignalT<string>;');
        expect(result).toContain('Emitted when the label changes.');
    });

    it('recognises a property with a trailing // comment as a declaration', () => {
        const content = `declare class Foo {\n    getLabel(): string; // SomeAnnotation\n}\n`;
        const result = syncFileContent(content, methodDocs);
        expect(result).toContain('Returns the label.');
        expect(result).toContain('getLabel(): string; // SomeAnnotation');
    });

    it('recognises a method with a trailing // comment as a declaration', () => {
        const content = `declare class Foo {\n    setLabel(label: string): void; // SomeEnum\n}\n`;
        const result = syncFileContent(content, methodDocs);
        expect(result).toContain('Sets the label.');
        expect(result).toContain('setLabel(label: string): void; // SomeEnum');
    });

    it('removes undocumented declarations when removeUndocumented=true', () => {
        const content = `declare class Foo {\n    unknownMethod(): void;\n}\n`;
        const result = syncFileContent(content, methodDocs, [], false, true);
        expect(result).not.toContain('unknownMethod');
    });

    it('keeps documented declarations when removeUndocumented=true', () => {
        const content = `declare class Foo {\n    getLabel(): string;\n    unknownMethod(): void;\n}\n`;
        const result = syncFileContent(content, methodDocs, [], false, true);
        expect(result).toContain('getLabel');
        expect(result).not.toContain('unknownMethod');
    });

    it('keeps manually-described undocumented items when removeUndocumented=true', () => {
        // A declaration with a hand-written JSDoc (not @undocumented) should be kept
        const content = `declare class Foo {\n    /**\n     * Custom description.\n     */\n    unknownMethod(): void;\n}\n`;
        const result = syncFileContent(content, methodDocs, [], false, true);
        expect(result).toContain('unknownMethod');
    });

    it('reorders properties to match docs order', () => {
        const docs = makeDocs({
            properties: new Map([
                ['count', { name: 'count', type: 'number', description: 'The count.' }],
                ['label', { name: 'label', type: 'string', description: 'The label.' }],
            ]),
            descriptions: new Map([['count', 'The count.'], ['label', 'The label.']]),
        });
        // File has label before count; docs say count comes first
        const content = `declare class Foo {\n    label: string;\n    count: number;\n}\n`;
        const result = syncFileContent(content, docs);
        expect(result.indexOf('count:')).toBeLessThan(result.indexOf('label:'));
    });

    it('reorders methods to match docs order', () => {
        const docs = makeDocs({
            methods: new Map([
                ['setLabel', [makeMethod({ name: 'setLabel', return: 'void', params: [{ name: 'label', type: 'string', default: null }], description: 'Sets.' })]],
                ['getLabel', [makeMethod({ name: 'getLabel', return: 'string', params: [], description: 'Gets.' })]],
            ]),
            descriptions: new Map([['setLabel', 'Sets.'], ['getLabel', 'Gets.']]),
        });
        // File has getLabel before setLabel; docs say setLabel comes first
        const content = `declare class Foo {\n    getLabel(): string;\n    setLabel(label: string): void;\n}\n`;
        const result = syncFileContent(content, docs);
        expect(result.indexOf('setLabel(')).toBeLessThan(result.indexOf('getLabel('));
    });

    it('keeps properties before methods before signals after reordering', () => {
        const signal: DocSignal = {
            name: 'clicked',
            return: 'void',
            params: [],
            description: 'Emitted when clicked.',
        };
        const docs = makeDocs({
            properties: new Map([['label', { name: 'label', type: 'string', description: 'The label.' }]]),
            signals: new Map([['clicked', [signal]]]),
            methods: new Map([['getLabel', [makeMethod({ name: 'getLabel', return: 'string', params: [], description: 'Gets.' })]]]),
            descriptions: new Map([['label', 'The label.'], ['clicked', 'Emitted when clicked.'], ['getLabel', 'Gets.']]),
        });
        // File has methods before properties, with signal in wrong place
        const content = `declare class Foo {\n    getLabel(): string;\n    clicked(): void;\n    label: string;\n}\n`;
        const result = syncFileContent(content, docs);
        const propIdx = result.indexOf('label:');
        const methodIdx = result.indexOf('getLabel(');
        const signalIdx = result.indexOf('clicked:');
        // properties → methods → signals
        expect(propIdx).toBeLessThan(methodIdx);
        expect(methodIdx).toBeLessThan(signalIdx);
    });

    it('deduplicates identical declarations after reordering', () => {
        const docs = makeDocs({
            properties: new Map([['label', { name: 'label', type: 'string', description: 'The label.' }]]),
            descriptions: new Map([['label', 'The label.']]),
        });
        const content = `declare class Foo {\n    label: string;\n    label: string;\n}\n`;
        const result = syncFileContent(content, docs);
        const matches = result.match(/^\s+label: string;/gm) ?? [];
        expect(matches.length).toBe(1);
    });

    it('reordering is idempotent (second run produces same output)', () => {
        const docs = makeDocs({
            properties: new Map([
                ['count', { name: 'count', type: 'number', description: 'The count.' }],
                ['label', { name: 'label', type: 'string', description: 'The label.' }],
            ]),
            descriptions: new Map([['count', 'The count.'], ['label', 'The label.']]),
        });
        const content = `declare class Foo {\n    label: string;\n    count: number;\n}\n`;
        const run1 = syncFileContent(content, docs);
        const run2 = syncFileContent(run1, docs);
        expect(run2).toBe(run1);
    });
});
