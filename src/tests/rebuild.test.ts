import { describe, expect, it } from 'vitest';
import { buildClassRegistry } from '../sync/ancestorRegistry';
import { rebuildClassFile } from '../sync/rebuild';
import { DazClassModel, LegacyClassInfo } from '../sync/typeModel';

function makeLegacy(className: string, extendsName: string, signatures: LegacyClassInfo['members']): LegacyClassInfo {
    return {
        className,
        extendsName,
        members: signatures,
        hasUnsafeTopLevelContent: false,
    };
}

describe('rebuildClassFile', () => {
    it('omits documented inherited members and appends legacy extras', () => {
        const parent: DazClassModel = {
            className: 'DzParent',
            docUrl: 'https://docs.example.test/DzParent',
            summary: 'Parent class.',
            extendsName: 'QObject',
            enums: [],
            properties: [{ kind: 'property', name: 'label', type: { type: 'string' }, description: 'Label.' }],
            constructors: [],
            staticMethods: [],
            methods: [{ kind: 'method', name: 'shared', returnType: { type: 'void' }, parameters: [], description: 'Shared.' }],
            signals: [],
        };
        const child: DazClassModel = {
            className: 'DzChild',
            docUrl: 'https://docs.example.test/DzChild',
            summary: 'Child class.',
            extendsName: 'DzParent',
            enums: [],
            properties: [
                { kind: 'property', name: 'label', type: { type: 'string' }, description: 'Inherited label.' },
                { kind: 'property', name: 'count', type: { type: 'number' }, description: 'Count.' },
            ],
            constructors: [],
            staticMethods: [],
            methods: [
                { kind: 'method', name: 'shared', returnType: { type: 'void' }, parameters: [], description: 'Inherited method.' },
                { kind: 'method', name: 'ownMethod', returnType: { type: 'string' }, parameters: [], description: 'Own method.' },
            ],
            signals: [{ kind: 'signal', name: 'changed', parameters: [{ name: 'value', type: { type: 'number' }, defaultValue: null }], description: 'Changed.' }],
        };
        const registry = buildClassRegistry([parent, child], [
            makeLegacy('QObject', '', []),
            makeLegacy('DzParent', 'QObject', []),
        ]);
        const legacyMembers = [
            { kind: 'method' as const, name: 'legacyOnly', paramCount: 1, signature: 'legacyOnly(value: number): void;' },
            { kind: 'property' as const, name: 'count', paramCount: 0, signature: 'count: number;' },
        ];

        const result = rebuildClassFile(child, legacyMembers, registry);
        expect(result.content).toContain('@docurl https://docs.example.test/DzChild');
        expect(result.content).toContain('declare class DzChild extends DzParent {');
        expect(result.content).toContain('count: number;');
        expect(result.content).toContain('ownMethod(): string;');
        expect(result.content).toContain('changed: ISignalT<number>;');
        expect(result.content).toContain('/** @undocumented */');
        expect(result.content).toContain('legacyOnly(value: number): void;');
        expect(result.content).not.toContain('Inherited label.');
        expect(result.content).not.toContain('shared(): void;');
        expect(result.recoveredLegacyCount).toBe(1);
    });
});
