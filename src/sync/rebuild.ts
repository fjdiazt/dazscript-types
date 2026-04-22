/**
 * Renders the final `.d.ts` output for one class.
 *
 * This module turns normalized HTML data plus recovered legacy members into a
 * deterministic class declaration. Ancestor filtering decisions happen here,
 * while HTML parsing and legacy parsing stay in their own modules.
 */
import { resolveAncestorMembers, ClassRegistry } from './ancestorRegistry';
import {
    DazClassModel,
    DocMethod,
    DocProperty,
    DocSignal,
    LegacyMember,
    TypeRef,
} from './typeModel';

export interface RebuildResult {
    content: string;
    recoveredLegacyCount: number;
}

/**
 * Rebuild one class file from normalized inputs.
 */
export function rebuildClassFile(
    model: DazClassModel,
    legacyMembers: LegacyMember[],
    registry: ClassRegistry
): RebuildResult {
    const ancestorMembers = resolveAncestorMembers(model.className, registry);
    const hasAncestorProperty = (name: string) =>
        ancestorMembers.some(member => member.kind === 'property' && member.name === name);
    const hasAncestorMethod = (name: string, paramCount: number) =>
        ancestorMembers.some(member => member.kind === 'method' && member.name === name && member.paramCount === paramCount);

    const enums = model.enums.filter(member => !hasAncestorProperty(member.name));
    const properties = model.properties.filter(member => !hasAncestorProperty(member.name));
    const staticMethods = model.staticMethods.filter(member => !hasAncestorMethod(member.name, member.parameters.length));
    const methods = model.methods.filter(member => !hasAncestorMethod(member.name, member.parameters.length));
    const signals = model.signals.filter(member => !hasAncestorProperty(member.name));

    const documentedPropertyNames = new Set([
        ...model.enums.map(member => member.name),
        ...model.properties.map(member => member.name),
        ...model.signals.map(member => member.name),
    ]);
    const documentedMethodKeys = new Set([
        ...model.staticMethods.map(member => methodKey(member.name, member.parameters.length)),
        ...model.methods.map(member => methodKey(member.name, member.parameters.length)),
        ...model.constructors.map(member => methodKey(member.name, member.parameters.length)),
    ]);

    const recoveredLegacy = legacyMembers.filter(member => {
        if (member.kind === 'property') {
            return !documentedPropertyNames.has(member.name) && !hasAncestorProperty(member.name);
        }

        return !documentedMethodKeys.has(methodKey(member.name, member.paramCount)) &&
            !hasAncestorMethod(member.name, member.paramCount);
    });

    const lines: string[] = [];
    const classJsDoc = buildClassDoc(model.summary, model.docUrl);
    if (classJsDoc) {
        lines.push(classJsDoc);
    }

    lines.push(buildDeclareClassLine(model.className, model.extendsName));

    emitSection(lines, 'Static Properties', enums, emitProperty);
    emitSection(lines, 'Properties', properties, emitProperty);
    emitSection(lines, 'Constructors', model.constructors, emitMethod);
    emitSection(lines, 'Static Methods', staticMethods, emitMethod);
    emitSection(lines, 'Methods', methods, emitMethod);
    emitSection(lines, 'Signals', signals, emitSignal);

    if (recoveredLegacy.length > 0) {
        lines.push('');
        lines.push('    /* Undocumented Legacy Members */');
        for (const member of recoveredLegacy) {
            lines.push('');
            lines.push('    /** @undocumented */');
            lines.push(`    ${member.signature}`);
        }
    }

    lines.push('}');
    lines.push('');

    return {
        content: lines.join('\n'),
        recoveredLegacyCount: recoveredLegacy.length,
    };
}

function emitSection<T>(
    lines: string[],
    title: string,
    members: T[],
    emitter: (member: T) => string[]
): void {
    if (members.length === 0) {
        return;
    }

    lines.push('');
    lines.push(`    /* ${title} */`);
    for (const member of members) {
        lines.push('');
        lines.push(...emitter(member));
    }
}

function emitProperty(member: DocProperty): string[] {
    const lines: string[] = [];
    const doc = buildMemberDoc(member.description, [], member.kind === 'enum' ? undefined : undefined, member.since);
    if (doc) {
        lines.push(...indentDoc(doc));
    }

    const readOnlySuffix = member.readOnly ? ' // Read Only' : '';
    const rawTypeSuffix = member.type.rawType && member.type.rawType !== member.type.type
        ? ` // ${member.type.rawType}`
        : readOnlySuffix;
    const keyword = member.kind === 'enum' ? 'static ' : '';
    lines.push(`    ${keyword}${member.name}: ${member.type.type};${rawTypeSuffix}`);
    return lines;
}

function emitMethod(member: DocMethod): string[] {
    const lines: string[] = [];
    const doc = buildMemberDoc(
        member.description,
        member.parameters,
        member.kind === 'constructor' ? undefined : { type: member.returnType.type, description: member.returnDescription },
        member.since
    );
    if (doc) {
        lines.push(...indentDoc(doc));
    }

    const prefix = member.kind === 'staticMethod' ? 'static ' : '';
    const params = member.parameters.map(formatParam).join(', ');
    if (member.kind === 'constructor') {
        lines.push(`    constructor(${params});`);
    } else {
        const suffix = buildRawTypeComment(member.returnType);
        lines.push(`    ${prefix}${member.name}(${params}): ${member.returnType.type};${suffix}`);
    }
    return lines;
}

function emitSignal(member: DocSignal): string[] {
    const lines: string[] = [];
    const doc = buildMemberDoc(member.description, [], undefined, member.since);
    if (doc) {
        lines.push(...indentDoc(doc));
    }

    const typeArgs = member.parameters.length === 0
        ? 'void'
        : member.parameters.map(parameter => parameter.type.type).join(', ');
    lines.push(`    ${member.name}: ISignalT<${typeArgs}>;`);
    return lines;
}

function buildDeclareClassLine(className: string, extendsName: string): string {
    if (extendsName) {
        return `declare class ${className} extends ${extendsName} {`;
    }

    return `declare class ${className} {`;
}

function buildClassDoc(summary: string, docUrl: string): string | null {
    const text = summary.trim();
    const url = docUrl.trim();
    if (!text && !url) {
        return null;
    }

    const lines = ['/**'];
    if (text) {
        lines.push(` * ${text}`);
    }
    if (url) {
        lines.push(` * @docurl ${url}`);
    }
    lines.push(' */');
    return lines.join('\n');
}

function buildMemberDoc(
    description: string | undefined,
    parameters: Array<{ name: string; type: TypeRef; description?: string; defaultValue?: string | null }>,
    returns: { type: string; description?: string } | undefined,
    since?: string
): string | null {
    const lines: string[] = [];

    if (description && description.trim()) {
        for (const line of description.trim().split('\n')) {
            lines.push(` * ${line.trim()}`);
        }
    }

    for (const parameter of parameters) {
        const detail = parameter.description ? ` - ${parameter.description}` : '';
        lines.push(` * @param ${parameter.name} ${parameter.type.type}${detail}`);
    }

    if (returns && returns.type !== 'void') {
        const detail = returns.description ? ` ${returns.description}` : '';
        lines.push(` * @returns ${returns.type}${detail}`);
    }

    if (since) {
        lines.push(` * @since ${since}`);
    }

    if (lines.length === 0) {
        return null;
    }

    return ['/**', ...lines, ' */'].join('\n');
}

function indentDoc(doc: string): string[] {
    return doc.split('\n').map(line => `    ${line}`);
}

function formatParam(parameter: { name: string; type: TypeRef; defaultValue: string | null }): string {
    const optional = parameter.defaultValue !== null ? '?' : '';
    return `${parameter.name}${optional}: ${parameter.type.type}`;
}

function buildRawTypeComment(type: TypeRef): string {
    if (type.rawType && type.rawType !== type.type) {
        return ` // ${type.rawType}`;
    }

    return '';
}

function methodKey(name: string, paramCount: number): string {
    return `${name}:::${paramCount}`;
}
