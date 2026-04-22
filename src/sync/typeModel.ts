export interface TypeRef {
    type: string;
    rawType?: string;
}

export interface DocParameter {
    name: string;
    type: TypeRef;
    defaultValue: string | null;
    description?: string;
}

export interface DocMemberBase {
    name: string;
    description?: string;
    since?: string;
}

export interface DocProperty extends DocMemberBase {
    kind: 'property' | 'enum';
    type: TypeRef;
    readOnly?: boolean;
}

export interface DocMethod extends DocMemberBase {
    kind: 'method' | 'staticMethod' | 'constructor';
    returnType: TypeRef;
    parameters: DocParameter[];
    returnDescription?: string;
}

export interface DocSignal extends DocMemberBase {
    kind: 'signal';
    parameters: DocParameter[];
}

export interface DazClassModel {
    className: string;
    summary: string;
    extendsName: string;
    enums: DocProperty[];
    properties: DocProperty[];
    constructors: DocMethod[];
    staticMethods: DocMethod[];
    methods: DocMethod[];
    signals: DocSignal[];
}

export interface LegacyMember {
    name: string;
    signature: string;
    kind: 'property' | 'method';
    paramCount: number;
}

export interface LegacyClassInfo {
    className: string;
    extendsName: string;
    members: LegacyMember[];
    hasUnsafeTopLevelContent: boolean;
}

export interface ClassShapeMember {
    name: string;
    kind: 'property' | 'method';
    paramCount: number;
}
