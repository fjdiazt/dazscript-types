import { describe, it, expect } from 'vitest';
import {
    parseClassInfo,
    buildClassRegistry,
    resolveAncestorMembers,
    removeInheritedMembers,
} from '../scripts/inheritanceFilter';

// ── Fixtures ──────────────────────────────────────────────────────────────────

const QOBJECT_CONTENT = `
/**
 * Base type of script accessible objects.
 * @docurl https://example.com
 */
declare class QObject {

    /**
     * Holds the name of the object.
     */
    objectName: string;

    /**
     * Schedules this object for deletion.
     */
    deleteLater(): void;

    /**
     * @returns string A string representation of the object classname.
     */
    className(): string;

    /** @undocumented */
    update(): void;
}
`.trim();

const DZBASE_CONTENT = `
/**
 * Base class for a considerable portion of the Daz Studio API.
 * @docurl https://example.com
 */
declare class DzBase extends QObject {

    /**
     * Makes the object persistent.
     */
    makePersistent(): void;

    /** @undocumented */
    update(): void;

    deleteLater(): void;
}
`.trim();

const DZELEMENT_CONTENT = `
/**
 * Base class for elements.
 * @docurl https://example.com
 */
declare class DzElement extends DzBase {

    /**
     * Returns the label.
     */
    getLabel(): string;

    deleteLater(): void;

    makePersistent(): void;

    className(): string;
}
`.trim();

// ── parseClassInfo ────────────────────────────────────────────────────────────

describe('parseClassInfo', () => {
    it('extracts className', () => {
        const info = parseClassInfo(QOBJECT_CONTENT);
        expect(info?.className).toBe('QObject');
    });

    it('returns null for content with no class declaration', () => {
        expect(parseClassInfo('// just a comment')).toBeNull();
    });

    it('extracts extends clause', () => {
        const info = parseClassInfo(DZBASE_CONTENT);
        expect(info?.extends).toBe('QObject');
    });

    it('returns empty string for extends when no parent', () => {
        const info = parseClassInfo(QOBJECT_CONTENT);
        expect(info?.extends).toBe('');
    });

    it('records a method member with isMethod=true and correct paramCount', () => {
        const info = parseClassInfo(QOBJECT_CONTENT);
        const m = info?.members.get('deleteLater(): void;');
        expect(m?.isMethod).toBe(true);
        expect(m?.paramCount).toBe(0);
    });

    it('records a method with params and correct paramCount', () => {
        const content = `declare class Foo {\n    find(name: string, deep?: boolean): boolean;\n}`;
        const info = parseClassInfo(content);
        const m = info?.members.get('find(name: string, deep?: boolean): boolean;');
        expect(m?.isMethod).toBe(true);
        expect(m?.paramCount).toBe(2);
    });

    it('records a property member with isMethod=false', () => {
        const info = parseClassInfo(QOBJECT_CONTENT);
        const m = info?.members.get('objectName: string;');
        expect(m?.isMethod).toBe(false);
        expect(m?.name).toBe('objectName');
    });

    it('records an @undocumented method', () => {
        const info = parseClassInfo(QOBJECT_CONTENT);
        expect(info?.members.has('update(): void;')).toBe(true);
    });

    it('records a method with no JSDoc', () => {
        const content = `declare class Foo {\n    rawMethod(): void;\n}`;
        const info = parseClassInfo(content);
        expect(info?.members.has('rawMethod(): void;')).toBe(true);
    });

    it('correctly parses a method with a trailing // comment', () => {
        const content = `declare class Foo {\n    update(): void; // DzRenderMgr::RenderPriority\n}`;
        const info = parseClassInfo(content);
        const m = info?.members.get('update(): void; // DzRenderMgr::RenderPriority');
        expect(m?.isMethod).toBe(true);
        expect(m?.name).toBe('update');
        expect(m?.paramCount).toBe(0);
    });

    it('correctly parses a property with a trailing // comment', () => {
        const content = `declare class Foo {\n    priority: number; // DzRenderMgr::RenderPriority\n}`;
        const info = parseClassInfo(content);
        const m = info?.members.get('priority: number; // DzRenderMgr::RenderPriority');
        expect(m?.isMethod).toBe(false);
        expect(m?.name).toBe('priority');
    });
});

// ── buildClassRegistry ────────────────────────────────────────────────────────

describe('buildClassRegistry', () => {
    it('builds a registry from multiple class contents', () => {
        const registry = buildClassRegistry([QOBJECT_CONTENT, DZBASE_CONTENT]);
        expect(registry.has('QObject')).toBe(true);
        expect(registry.has('DzBase')).toBe(true);
    });

    it('silently ignores content with no class declaration', () => {
        const registry = buildClassRegistry(['// nothing here', QOBJECT_CONTENT]);
        expect(registry.size).toBe(1);
    });
});

// ── resolveAncestorMembers ────────────────────────────────────────────────────

describe('resolveAncestorMembers', () => {
    const registry = buildClassRegistry([QOBJECT_CONTENT, DZBASE_CONTENT, DZELEMENT_CONTENT]);

    it('returns empty sets for a class with no ancestor in registry', () => {
        const { propNames, methodKeys } = resolveAncestorMembers('QObject', registry);
        expect(propNames.size).toBe(0);
        expect(methodKeys.size).toBe(0);
    });

    it('includes documented method from direct parent', () => {
        const { methodKeys } = resolveAncestorMembers('DzBase', registry);
        expect(methodKeys.has('deleteLater:::0')).toBe(true);
    });

    it('includes @undocumented method from direct parent', () => {
        const { methodKeys } = resolveAncestorMembers('DzBase', registry);
        expect(methodKeys.has('update:::0')).toBe(true);
    });

    it('includes property from direct parent by name', () => {
        const { propNames } = resolveAncestorMembers('DzBase', registry);
        expect(propNames.has('objectName')).toBe(true);
    });

    it('includes members from transitive ancestors', () => {
        const { methodKeys } = resolveAncestorMembers('DzElement', registry);
        expect(methodKeys.has('deleteLater:::0')).toBe(true);  // from QObject
        expect(methodKeys.has('className:::0')).toBe(true);    // from QObject
        expect(methodKeys.has('makePersistent:::0')).toBe(true); // from DzBase
    });

    it('does not include members that belong only to the class itself', () => {
        const { methodKeys } = resolveAncestorMembers('DzBase', registry);
        expect(methodKeys.has('makePersistent:::0')).toBe(false);
    });
});

// ── removeInheritedMembers ────────────────────────────────────────────────────

describe('removeInheritedMembers', () => {
    const registry = buildClassRegistry([QOBJECT_CONTENT, DZBASE_CONTENT, DZELEMENT_CONTENT]);

    it('removes a member present in direct parent (documented)', () => {
        const result = removeInheritedMembers(DZBASE_CONTENT, registry);
        expect(result).not.toContain('deleteLater(): void;');
    });

    it('removes a member present in direct parent even when @undocumented in ancestor', () => {
        // update() is @undocumented in QObject but should still be removed from DzBase
        const result = removeInheritedMembers(DZBASE_CONTENT, registry);
        expect(result).not.toContain('update(): void;');
    });

    it('keeps a member not present in any ancestor', () => {
        const result = removeInheritedMembers(DZBASE_CONTENT, registry);
        expect(result).toContain('makePersistent(): void;');
    });

    it('removes transitive ancestor members from grandchild', () => {
        const result = removeInheritedMembers(DZELEMENT_CONTENT, registry);
        expect(result).not.toContain('deleteLater(): void;');
        expect(result).not.toContain('className(): string;');
        expect(result).not.toContain('makePersistent(): void;');
    });

    it('matches method by name + param count, ignoring param types', () => {
        const content = `
declare class DzChild extends QObject {
    deleteLater(): void;
    className(): DzBase;
}`.trim();
        const result = removeInheritedMembers(content, registry);
        // Same name + 0 params as QObject.deleteLater / QObject.className — removed
        expect(result).not.toContain('deleteLater(): void;');
        expect(result).not.toContain('className(): DzBase;');
    });

    it('matches property by name only, ignoring type', () => {
        const content = `
declare class DzChild extends QObject {
    objectName: QString;
}`.trim();
        const result = removeInheritedMembers(content, registry);
        // Same name as QObject.objectName, type differs — still removed
        expect(result).not.toContain('objectName: QString;');
    });

    it('keeps method with same name but different param count', () => {
        const content = `
declare class DzChild extends QObject {
    deleteLater(reason: string): void;
}`.trim();
        const result = removeInheritedMembers(content, registry);
        // 1 param vs ancestor's 0 params — keep
        expect(result).toContain('deleteLater(reason: string): void;');
    });

    it('removes all duplicate occurrences of the same member', () => {
        const content = `
declare class DzChild extends QObject {
    deleteLater(): void;
    deleteLater(): void;
    deleteLater(): void;
}`.trim();
        const result = removeInheritedMembers(content, registry);
        expect(result).not.toContain('deleteLater(): void;');
    });

    it('also removes the JSDoc block above the removed member', () => {
        const content = `
declare class DzChild extends QObject {

    /**
     * Schedules this object for deletion.
     */
    deleteLater(): void;

    ownMethod(): void;
}`.trim();
        const result = removeInheritedMembers(content, registry);
        expect(result).not.toContain('Schedules this object for deletion.');
        expect(result).not.toContain('deleteLater(): void;');
    });

    it('returns content unchanged when @syncer-issues block is present', () => {
        const content = `/* @syncer-issues\n * ⚠ Issues found\n * - Mismatch\n */\n${DZELEMENT_CONTENT}`;
        const result = removeInheritedMembers(content, registry);
        expect(result).toBe(content);
    });

    it('does not leave consecutive blank lines after removal', () => {
        const result = removeInheritedMembers(DZELEMENT_CONTENT, registry);
        expect(result).not.toMatch(/\n{3,}/);
    });

    it('is idempotent — running twice gives the same result', () => {
        const run1 = removeInheritedMembers(DZELEMENT_CONTENT, registry);
        const run2 = removeInheritedMembers(run1, registry);
        expect(run2).toBe(run1);
    });
});
