import { describe, expect, it } from 'vitest';
import { parseLegacyClass } from '../sync/legacyReader';

describe('legacyReader', () => {
    it('can recover a malformed class header when the expected name is known', () => {
        const parsed = parseLegacyClass(
            'declare class  extends QWidget {\n    shadeStyle: ShadeStyle;\n}\n',
            'Dz3DViewport'
        );

        expect(parsed).not.toBeNull();
        expect(parsed?.className).toBe('Dz3DViewport');
        expect(parsed?.extendsName).toBe('QWidget');
        expect(parsed?.members[0]?.name).toBe('shadeStyle');
    });

    it('accepts deprecated markers in class headers', () => {
        const parsed = parseLegacyClass(
            'declare class DzSaveFilterMgr (deprecated) extends QObject {\n    static getNumFilters(): number;\n}\n',
            'DzSaveFilterMgr'
        );

        expect(parsed).not.toBeNull();
        expect(parsed?.className).toBe('DzSaveFilterMgr');
        expect(parsed?.extendsName).toBe('QObject');
        expect(parsed?.members[0]?.name).toBe('getNumFilters');
    });

    it('parses constructors from legacy classes', () => {
        const parsed = parseLegacyClass(
            'declare class DzThing extends QObject {\n    constructor(name: string, enabled?: boolean);\n}\n',
            'DzThing'
        );

        expect(parsed).not.toBeNull();
        expect(parsed?.members[0]?.kind).toBe('constructor');
        expect(parsed?.members[0]?.name).toBe('constructor');
        expect(parsed?.members[0]?.paramCount).toBe(2);
    });
});
