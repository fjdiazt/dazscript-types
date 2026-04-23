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
        expect(result.content).toContain('changed: ISignal<number>;');
        expect(result.content).toContain('/** @undocumented */');
        expect(result.content).toContain('legacyOnly(value: number): void;');
        expect(result.content).not.toContain('Inherited label.');
        expect(result.content).not.toContain('shared(): void;');
        expect(result.recoveredLegacyCount).toBe(1);
    });

    it('renders enumeration values as documented static properties', () => {
        const model: DazClassModel = {
            className: 'DzViewportLike',
            docUrl: 'https://docs.example.test/DzViewportLike',
            summary: 'Viewport-like class.',
            extendsName: 'QObject',
            enums: [
                { kind: 'enum', name: 'NoFloor', enumName: 'FloorStyle', type: { type: 'number' } },
                { kind: 'enum', name: 'WireFloor', enumName: 'FloorStyle', type: { type: 'number' } },
            ],
            properties: [
                { kind: 'property', name: 'floorStyle', type: { type: 'number' }, description: 'Current floor style.' },
            ],
            constructors: [],
            staticMethods: [],
            methods: [],
            signals: [],
        };
        const registry = buildClassRegistry([model], [makeLegacy('QObject', '', [])]);

        const result = rebuildClassFile(model, [], registry);

        expect(result.content).toContain('    /* Properties */');
        expect(result.content).toContain('floorStyle: number;');
        expect(result.content).toContain('    /* Enumerations (Static Properties) */');
        expect(result.content).toContain('DAZ enum member of FloorStyle.');
        expect(result.content).toContain('static NoFloor: number;');
        expect(result.content).toContain('static WireFloor: number;');
    });

    it('does not recover legacy methods that duplicate documented signals', () => {
        const model: DazClassModel = {
            className: 'DzSignalHost',
            docUrl: 'https://docs.example.test/DzSignalHost',
            summary: 'Signal host.',
            extendsName: 'QObject',
            enums: [],
            properties: [],
            constructors: [],
            staticMethods: [],
            methods: [],
            signals: [
                {
                    kind: 'signal',
                    name: 'aspectOnChanged',
                    parameters: [{ name: 'onOff', type: { type: 'boolean' }, defaultValue: null }],
                    description: 'Aspect change.',
                },
            ],
        };
        const registry = buildClassRegistry([model], [makeLegacy('QObject', '', [])]);
        const legacyMembers = [
            {
                kind: 'method' as const,
                name: 'aspectOnChanged',
                paramCount: 1,
                signature: 'aspectOnChanged(onOff: boolean): void;',
            },
        ];

        const result = rebuildClassFile(model, legacyMembers, registry);

        expect(result.content).toContain('aspectOnChanged: ISignal<boolean>;');
        expect(result.content).not.toContain('aspectOnChanged(onOff: boolean): void;');
        expect(result.recoveredLegacyCount).toBe(0);
    });

    it('does not recover legacy methods when a documented signal with the same name changed arity', () => {
        const model: DazClassModel = {
            className: 'DzSignalHost',
            docUrl: 'https://docs.example.test/DzSignalHost',
            summary: 'Signal host.',
            extendsName: 'QObject',
            enums: [],
            properties: [],
            constructors: [],
            staticMethods: [],
            methods: [],
            signals: [
                {
                    kind: 'signal',
                    name: 'thirdsGuideOnChanged',
                    parameters: [{ name: 'onOff', type: { type: 'boolean' }, defaultValue: null }],
                    description: 'Thirds guide change.',
                },
            ],
        };
        const registry = buildClassRegistry([model], [makeLegacy('QObject', '', [])]);
        const legacyMembers = [
            {
                kind: 'method' as const,
                name: 'thirdsGuideOnChanged',
                paramCount: 0,
                signature: 'thirdsGuideOnChanged(): any; // TODO ;',
            },
        ];

        const result = rebuildClassFile(model, legacyMembers, registry);

        expect(result.content).toContain('thirdsGuideOnChanged: ISignal<boolean>;');
        expect(result.content).not.toContain('thirdsGuideOnChanged(): any; // TODO ;');
        expect(result.recoveredLegacyCount).toBe(0);
    });

  it('emits undocumented lowercase DAZ slug types as any with notes', () => {
        const model: DazClassModel = {
            className: 'DzUndocumentedTypeHost',
            docUrl: 'https://docs.example.test/DzUndocumentedTypeHost',
            summary: 'Undocumented type host.',
            extendsName: 'QObject',
            enums: [],
            properties: [
                { kind: 'property', name: 'cameraCube', type: { type: 'any', rawType: 'cameracube_dz', undocumented: true } },
            ],
            constructors: [],
            staticMethods: [],
            methods: [
                {
                    kind: 'method',
                    name: 'getCameraCube',
                    returnType: { type: 'any', rawType: 'cameracube_dz', undocumented: true },
                    parameters: [{ name: 'cube', type: { type: 'any', rawType: 'cameracube_dz', undocumented: true }, defaultValue: null }],
                    description: 'Gets a cube.',
                },
            ],
            signals: [],
        };
        const registry = buildClassRegistry([model], [makeLegacy('QObject', '', [])]);

        const result = rebuildClassFile(model, [], registry);

        expect(result.content).toContain('cameraCube: any; // cameracube_dz; undocumented type');
        expect(result.content).toContain('@param cube any - Undocumented DAZ type: cameracube_dz.');
    expect(result.content).toContain('@returns any Undocumented DAZ type: cameracube_dz.');
    expect(result.content).toContain('getCameraCube(cube: any): any; // cameracube_dz; undocumented type');
  });

  it('rewrites recovered legacy signatures for renamed generated types', () => {
    const model: DazClassModel = {
      className: 'DzImageHost',
      docUrl: 'https://docs.example.test/DzImageHost',
      summary: 'Image host.',
      extendsName: 'QObject',
      enums: [],
      properties: [],
      constructors: [],
      staticMethods: [],
      methods: [],
      signals: [],
    };
    const registry = buildClassRegistry([model], [makeLegacy('QObject', '', [])]);
    const legacyMembers = [
      {
        kind: 'method' as const,
        name: 'setImage',
        paramCount: 1,
        signature: 'setImage(image: Image): void;',
      },
    ];

    const result = rebuildClassFile(model, legacyMembers, registry);

    expect(result.content).toContain('setImage(image: DzImage): void;');
    expect(result.content).not.toContain('setImage(image: Image): void;');
  });

  it('does not recover a legacy method when a documented property now uses the same name', () => {
    const model: DazClassModel = {
      className: 'DzAbstractAssetContainer',
      docUrl: 'https://docs.example.test/DzAbstractAssetContainer',
      summary: 'Asset container.',
      extendsName: 'DzRefCountedItem',
      enums: [],
      properties: [
        {
          kind: 'property',
          name: 'removeAssetCausesDelete',
          type: { type: 'boolean' },
          description: 'Read-only property.',
        },
      ],
      constructors: [],
      staticMethods: [],
      methods: [],
      signals: [],
    };
    const registry = buildClassRegistry([model], [
      makeLegacy('QObject', '', []),
      makeLegacy('DzRefCountedItem', 'QObject', []),
    ]);
    const legacyMembers = [
      {
        kind: 'method' as const,
        name: 'removeAssetCausesDelete',
        paramCount: 0,
        signature: 'removeAssetCausesDelete(): boolean;',
      },
    ];

    const result = rebuildClassFile(model, legacyMembers, registry);

    expect(result.content).toContain('removeAssetCausesDelete: boolean;');
    expect(result.content).not.toContain('removeAssetCausesDelete(): boolean;');
    expect(result.recoveredLegacyCount).toBe(0);
  });

  it('comments a signal when its name conflicts with a documented property', () => {
    const model: DazClassModel = {
      className: 'DzAction',
      docUrl: 'https://docs.example.test/DzAction',
      summary: 'Action class.',
      extendsName: 'QObject',
      enums: [],
      properties: [
        {
          kind: 'property',
          name: 'enabled',
          type: { type: 'boolean' },
          description: 'Enabled state.',
        },
      ],
      constructors: [],
      staticMethods: [],
      methods: [],
      signals: [
        {
          kind: 'signal',
          name: 'enabled',
          parameters: [{ name: 'onOff', type: { type: 'boolean' }, defaultValue: null }],
          description: 'Enabled signal.',
        },
      ],
    };
    const registry = buildClassRegistry([model], [makeLegacy('QObject', '', [])]);

    const result = rebuildClassFile(model, [], registry);

    expect(result.content).toContain('enabled: boolean;');
    expect(result.content).toContain('/* Conflicting Signals */');
    expect(result.content).toContain('TypeScript conflict: DAZ documents this as a signal, but a property with the same name is also documented.');
    expect(result.content).toContain('// enabled: ISignal<boolean>;');
  });

  it('recovers undocumented legacy constructors when docs omit them', () => {
    const model: DazClassModel = {
      className: 'DzCtorHost',
      docUrl: 'https://docs.example.test/DzCtorHost',
      summary: 'Ctor host.',
      extendsName: 'QObject',
      enums: [],
      properties: [],
      constructors: [],
      staticMethods: [],
      methods: [],
      signals: [],
    };
    const registry = buildClassRegistry([model], [makeLegacy('QObject', '', [])]);
    const legacyMembers = [
      {
        kind: 'constructor' as const,
        name: 'constructor',
        paramCount: 1,
        signature: 'constructor(name: string);',
      },
    ];

    const result = rebuildClassFile(model, legacyMembers, registry);

    expect(result.content).toContain('/** @undocumented */');
    expect(result.content).toContain('constructor(name: string);');
    expect(result.recoveredLegacyCount).toBe(1);
  });

  it('does not recover a legacy method when an ancestor already documents a signal property with the same name', () => {
    const parent: DazClassModel = {
      className: 'DzBase',
      docUrl: 'https://docs.example.test/DzBase',
      summary: 'Base class.',
      extendsName: 'QObject',
      enums: [],
      properties: [],
      constructors: [],
      staticMethods: [],
      methods: [],
      signals: [
        {
          kind: 'signal',
          name: 'nameChanged',
          parameters: [{ name: 'name', type: { type: 'string' }, defaultValue: null }],
          description: 'Name changed.',
        },
      ],
    };
    const model: DazClassModel = {
      className: 'DzAppSettings',
      docUrl: 'https://docs.example.test/DzAppSettings',
      summary: 'Settings.',
      extendsName: 'DzBase',
      enums: [],
      properties: [],
      constructors: [],
      staticMethods: [],
      methods: [],
      signals: [],
    };
    const registry = buildClassRegistry([parent, model], [
      makeLegacy('QObject', '', []),
      makeLegacy('DzBase', 'QObject', []),
    ]);
    const legacyMembers = [
      {
        kind: 'method' as const,
        name: 'nameChanged',
        paramCount: 1,
        signature: 'nameChanged(p0: string): void;',
      },
    ];

    const result = rebuildClassFile(model, legacyMembers, registry);

    expect(result.content).not.toContain('nameChanged(p0: string): void;');
    expect(result.recoveredLegacyCount).toBe(0);
  });

  it('emits sanitized reserved parameter names in method signatures and docs', () => {
    const model: DazClassModel = {
      className: 'DzScript',
      docUrl: 'https://docs.example.test/DzScript',
      summary: 'Script class.',
      extendsName: 'DzBase',
      enums: [],
      properties: [],
      constructors: [],
      staticMethods: [],
      methods: [
        {
          kind: 'method',
          name: 'call',
          returnType: { type: 'boolean' },
          parameters: [
            { name: 'func', type: { type: 'string' }, defaultValue: null, description: 'The name of the function to call.' },
            { name: 'args', type: { type: 'any[]' }, defaultValue: null, description: 'A list of arguments to pass to the function.' },
          ],
          description: 'Calls a function in the script.',
        },
      ],
      signals: [],
    };
    const registry = buildClassRegistry([model], [
      makeLegacy('QObject', '', []),
      makeLegacy('DzBase', 'QObject', []),
    ]);

    const result = rebuildClassFile(model, [], registry);

    expect(result.content).toContain('@param func string - The name of the function to call.');
    expect(result.content).toContain('call(func: string, args: any[]): boolean;');
    expect(result.content).not.toContain('call(function: string, args: any[]): boolean;');
  });

  it('merges duplicate documented signals by name using the widest signature', () => {
    const model: DazClassModel = {
      className: 'DzListView',
      docUrl: 'https://docs.example.test/DzListView',
      summary: 'List view.',
      extendsName: 'DzWidget',
      enums: [],
      properties: [],
      constructors: [],
      staticMethods: [],
      methods: [],
      signals: [
        {
          kind: 'signal',
          name: 'itemRenamed',
          parameters: [
            { name: 'item', type: { type: 'DzListViewItem' }, defaultValue: null, description: 'The item renamed' },
            { name: 'col', type: { type: 'number' }, defaultValue: null, description: 'The column in which the renaming occurred' },
            { name: 'text', type: { type: 'string' }, defaultValue: null, description: 'The new text for item' },
          ],
          description: 'Emitted when an item is renamed',
        },
        {
          kind: 'signal',
          name: 'itemRenamed',
          parameters: [
            { name: 'item', type: { type: 'DzListViewItem' }, defaultValue: null, description: 'The item renamed' },
            { name: 'col', type: { type: 'number' }, defaultValue: null, description: 'The column in which the renaming occurred' },
          ],
          description: 'Emitted when an item is renamed',
        },
      ],
    };
    const registry = buildClassRegistry([model], [
      makeLegacy('QObject', '', []),
      makeLegacy('DzWidget', 'QObject', []),
    ]);

    const result = rebuildClassFile(model, [], registry);
    const matches = result.content.match(/itemRenamed: ISignal/g) ?? [];

    expect(matches).toHaveLength(1);
    expect(result.content).toContain('itemRenamed: ISignal<DzListViewItem, number, string>;');
    expect(result.content).not.toContain('itemRenamed: ISignal<DzListViewItem, number>;');
  });

  it('does not recover legacy overloads for a documented method name', () => {
    const model: DazClassModel = {
      className: 'DzNumericProperty',
      docUrl: 'https://docs.example.test/DzNumericProperty',
      summary: 'Numeric property.',
      extendsName: 'DzProperty',
      enums: [],
      properties: [],
      constructors: [],
      staticMethods: [],
      methods: [
        {
          kind: 'method',
          name: 'setMax',
          returnType: { type: 'void' },
          parameters: [{ name: 'max', type: { type: 'number' }, defaultValue: null }],
        },
      ],
      signals: [],
    };
    const registry = buildClassRegistry([model], [
      makeLegacy('QObject', '', []),
      makeLegacy('DzProperty', 'QObject', []),
    ]);
    const legacyMembers = [
      {
        kind: 'method' as const,
        name: 'setMax',
        paramCount: 2,
        signature: 'setMax(prop: DzProperty, max: number): void;',
      },
    ];

    const result = rebuildClassFile(model, legacyMembers, registry);

    expect(result.content).toContain('setMax(max: number): void;');
    expect(result.content).not.toContain('setMax(prop: DzProperty, max: number): void;');
    expect(result.recoveredLegacyCount).toBe(0);
  });
});
