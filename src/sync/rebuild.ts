/**
 * Renders the final `.d.ts` output for one class.
 *
 * This module turns normalized HTML data plus repo-tracked augment members into a
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
import { canonicalizeLegacySignature } from './typeRenames';

export interface RebuildResult {
    content: string;
    appliedAugmentCount: number;
}

interface ConflictingSignal {
    signal: DocSignal;
    conflictKind: 'property' | 'method';
}

interface ConflictingMethod {
    method: DocMethod;
    conflictKind: 'property';
}

function mergeSignals(signals: DocSignal[]): DocSignal[] {
    const merged = new Map<string, DocSignal>();

    for (const signal of signals) {
        const existing = merged.get(signal.name);
        if (!existing) {
            merged.set(signal.name, signal);
            continue;
        }

        merged.set(signal.name, pickPreferredSignal(existing, signal));
    }

    return [...merged.values()];
}

function pickPreferredSignal(a: DocSignal, b: DocSignal): DocSignal {
    if (b.parameters.length > a.parameters.length) {
        return mergeSignalMetadata(a, b);
    }

    if (a.parameters.length > b.parameters.length) {
        return mergeSignalMetadata(b, a);
    }

    return signalMetadataScore(b) > signalMetadataScore(a)
        ? mergeSignalMetadata(a, b)
        : mergeSignalMetadata(b, a);
}

function mergeSignalMetadata(fallback: DocSignal, preferred: DocSignal): DocSignal {
    return {
        ...preferred,
        description: preferred.description ?? fallback.description,
        since: preferred.since ?? fallback.since,
    };
}

function signalMetadataScore(signal: DocSignal): number {
    return (signal.description ? 1 : 0) +
        (signal.since ? 1 : 0) +
        signal.parameters.filter(parameter => parameter.description).length;
}

/**
 * Rebuild one class file from normalized inputs.
 */
export function rebuildClassFile(
    model: DazClassModel,
    augmentMembers: LegacyMember[],
    registry: ClassRegistry
): RebuildResult {
    const mergedSignals = mergeSignals(model.signals);
    const ancestorMembers = resolveAncestorMembers(model.className, registry);
    const hasAncestorProperty = (name: string) =>
        ancestorMembers.some(member => member.kind === 'property' && member.name === name);
    const hasAncestorMethod = (name: string, paramCount: number) =>
        ancestorMembers.some(member => member.kind === 'method' && member.name === name && member.paramCount === paramCount);

    const enums = model.enums.filter(member => !hasAncestorProperty(member.name));
    const properties = model.properties.filter(member => !hasAncestorProperty(member.name));
    const renderedProperties = [...properties, ...enums];
    const staticMethods = model.staticMethods.filter(member => !hasAncestorMethod(member.name, member.parameters.length));
    const methods = model.methods.filter(member =>
        !hasAncestorMethod(member.name, member.parameters.length) &&
        !hasAncestorProperty(member.name)
    );
    const conflictingMethods = model.methods.flatMap(member => {
        if (hasAncestorMethod(member.name, member.parameters.length)) {
            return [];
        }

        return hasAncestorProperty(member.name)
            ? [{ method: member, conflictKind: 'property' as const }]
            : [];
    });
    const findPropertyOrMethodNameConflict = (name: string, paramCount?: number): ConflictingSignal['conflictKind'] | null => {
        if (renderedProperties.some(member => member.name === name)) {
            return 'property';
        }

        if (staticMethods.some(member => member.name === name && (paramCount === undefined || member.parameters.length === paramCount)) ||
            methods.some(member => member.name === name && (paramCount === undefined || member.parameters.length === paramCount))) {
            return 'method';
        }

        return null;
    };
    const signals = mergedSignals.filter(member =>
        !hasAncestorProperty(member.name) &&
        !findPropertyOrMethodNameConflict(member.name, member.parameters.length)
    );
    const conflictingSignals = mergedSignals.flatMap(member => {
        if (hasAncestorProperty(member.name)) {
            return [];
        }

        const conflictKind = findPropertyOrMethodNameConflict(member.name, member.parameters.length);
        return conflictKind ? [{ signal: member, conflictKind }] : [];
    });

    const documentedPropertyNames = new Set([
        ...model.enums.map(member => member.name),
        ...model.properties.map(member => member.name),
        ...mergedSignals.map(member => member.name),
    ]);
    const ancestorPropertyNames = new Set(
        ancestorMembers
            .filter(member => member.kind === 'property')
            .map(member => member.name)
    );
    const augmentOutput = augmentMembers.filter(member => {
        if (member.kind === 'constructor') {
            return true;
        }

        if (member.kind === 'property') {
            return !documentedPropertyNames.has(member.name) &&
                !ancestorPropertyNames.has(member.name) &&
                !findPropertyOrMethodNameConflict(member.name);
        }

        return !documentedPropertyNames.has(member.name) &&
            !ancestorPropertyNames.has(member.name);
    });

    const lines: string[] = [];
    const classJsDoc = buildClassDoc(model.summary, model.docUrl);
    if (classJsDoc) {
        lines.push(classJsDoc);
    }

    lines.push(buildDeclareClassLine(model.className, model.extendsName));

    emitSection(lines, 'Properties', properties, emitProperty);
    emitSection(lines, 'Enumerations (Static Properties)', enums, emitProperty);
    const constructors = synthesizeUnionConstructors(model.constructors);
    emitSection(lines, 'Constructors', constructors, emitMethod);
    emitSection(lines, 'Static Methods', staticMethods, emitMethod);
    emitSection(lines, 'Methods', methods, emitMethod);
    emitSection(lines, 'Conflicting Methods', conflictingMethods, emitConflictingMethod);
    emitSection(lines, 'Signals', signals, emitSignal);
    emitSection(lines, 'Conflicting Signals', conflictingSignals, emitConflictingSignal);

    if (augmentOutput.length > 0) {
        lines.push('');
        lines.push('    /* Undocumented Augment Members */');
        for (const member of augmentOutput) {
            lines.push('');
            lines.push('    /** @undocumented */');
            lines.push(`    ${canonicalizeLegacySignature(member.signature)}`);
        }
    }

    lines.push('}');
    lines.push('');

    return {
        content: lines.join('\n'),
        appliedAugmentCount: augmentOutput.length,
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
    const doc = buildPropertyDoc(member);
    if (doc) {
        lines.push(...indentDoc(doc));
    }

    const suffixParts: string[] = [];
    if (member.type.rawType && member.type.rawType !== member.type.type) {
        suffixParts.push(member.type.rawType);
    }
    if (member.type.undocumented) {
        suffixParts.push('undocumented type');
    }
    if (member.readOnly) {
        suffixParts.push('Read Only');
    }
    const suffix = suffixParts.length > 0 ? ` // ${suffixParts.join('; ')}` : '';
    const prefix = member.kind === 'enum' ? 'static ' : '';
    lines.push(`    ${prefix}${member.name}: ${member.type.type};${suffix}`);
    return lines;
}

function emitMethod(member: DocMethod): string[] {
    const lines: string[] = [];
    const doc = buildMemberDoc(
        member.description,
        member.parameters,
        member.kind === 'constructor' ? undefined : { type: member.returnType, description: member.returnDescription },
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
    const doc = buildMemberDoc(member.description, member.parameters, undefined, member.since);
    if (doc) {
        lines.push(...indentDoc(doc));
    }

    const typeArgs = member.parameters.length === 0
        ? 'void'
        : member.parameters.map(parameter => parameter.type.type).join(', ');
    lines.push(`    ${member.name}: ISignal<${typeArgs}>;`);
    return lines;
}

function emitConflictingSignal(member: ConflictingSignal): string[] {
    const lines: string[] = [];
    const doc = buildMemberDoc(member.signal.description, member.signal.parameters, undefined, member.signal.since);
    if (doc) {
        lines.push(...indentDoc(doc));
    }

    lines.push('    /**');
    lines.push(`     * TypeScript conflict: DAZ documents this as a signal, but a ${member.conflictKind} with the same name is also documented.`);
    lines.push('     * Left commented because TypeScript does not allow both declarations in the same class.');
    lines.push('     */');

    const typeArgs = member.signal.parameters.length === 0
        ? 'void'
        : member.signal.parameters.map(parameter => parameter.type.type).join(', ');
    lines.push(`    // ${member.signal.name}: ISignal<${typeArgs}>;`);
    return lines;
}

function emitConflictingMethod(member: ConflictingMethod): string[] {
    const lines: string[] = [];
    const doc = buildMemberDoc(
        member.method.description,
        member.method.parameters,
        { type: member.method.returnType, description: member.method.returnDescription },
        member.method.since
    );
    if (doc) {
        lines.push(...indentDoc(doc));
    }

    lines.push('    /**');
    lines.push(`     * TypeScript conflict: DAZ documents this as a method, but an inherited ${member.conflictKind} with the same name already exists.`);
    lines.push('     * Left commented because TypeScript does not allow both declarations in the same class hierarchy.');
    lines.push('     */');

    const params = member.method.parameters.map(formatParam).join(', ');
    const suffix = buildRawTypeComment(member.method.returnType);
    lines.push(`    // ${member.method.name}(${params}): ${member.method.returnType.type};${suffix}`);
    return lines;
}

function methodSignatureKey(method: DocMethod): string {
    const params = method.parameters.map(parameter => `${parameter.name}:${parameter.type.type}:${parameter.defaultValue ?? ''}`).join(',');
    return `${method.kind}|${method.name}|${params}|${method.returnType.type}`;
}

function synthesizeUnionConstructors(constructors: DocMethod[]): DocMethod[] {
    const synthesized: DocMethod[] = [];
    const seen = new Set(constructors.map(methodSignatureKey));

    for (let i = 0; i < constructors.length; i++) {
        for (let j = i + 1; j < constructors.length; j++) {
            const merged = tryMergeConstructorPair(constructors[i], constructors[j]);
            if (!merged) {
                continue;
            }

            const key = methodSignatureKey(merged);
            if (seen.has(key)) {
                continue;
            }

            seen.add(key);
            synthesized.push(merged);
        }
    }

    return [...synthesized, ...constructors];
}

function tryMergeConstructorPair(a: DocMethod, b: DocMethod): DocMethod | null {
    if (a.kind !== 'constructor' || b.kind !== 'constructor') {
        return null;
    }

    if (a.parameters.length !== b.parameters.length) {
        return null;
    }

    let differingIndex = -1;
    const mergedParameters = a.parameters.map((parameter, index) => {
        const other = b.parameters[index];
        if (parameter.name === other.name &&
            parameter.type.type === other.type.type &&
            parameter.defaultValue === other.defaultValue) {
            return parameter;
        }

        if (parameter.name !== other.name || parameter.defaultValue !== other.defaultValue) {
            differingIndex = -2;
            return parameter;
        }

        if (differingIndex !== -1) {
            differingIndex = -2;
            return parameter;
        }

        differingIndex = index;
        return {
            ...parameter,
            type: {
                type: `${parameter.type.type} | ${other.type.type}`,
            },
            description: parameter.description ?? other.description,
        };
    });

    if (differingIndex < 0) {
        return null;
    }

    return {
        ...a,
        parameters: mergedParameters,
    };
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
    returns: { type: TypeRef; description?: string } | undefined,
    since?: string
): string | null {
    const lines: string[] = [];

    if (description && description.trim()) {
        for (const line of description.trim().split('\n')) {
            lines.push(` * ${line.trim()}`);
        }
    }

    for (const parameter of parameters) {
        const notes: string[] = [];
        if (parameter.description) {
            notes.push(parameter.description);
        }
        if (parameter.type.undocumented && parameter.type.rawType) {
            notes.push(`Undocumented DAZ type: ${parameter.type.rawType}.`);
        }
        const detail = notes.length > 0 ? ` - ${notes.join(' ')}` : '';
        lines.push(` * @param ${parameter.name} ${parameter.type.type}${detail}`);
    }

    if (returns && returns.type.type !== 'void') {
        const notes: string[] = [];
        if (returns.description) {
            notes.push(returns.description);
        }
        if (returns.type.undocumented && returns.type.rawType) {
            notes.push(`Undocumented DAZ type: ${returns.type.rawType}.`);
        }
        const detail = notes.length > 0 ? ` ${notes.join(' ')}` : '';
        lines.push(` * @returns ${returns.type.type}${detail}`);
    }

    if (since) {
        lines.push(` * @since ${since}`);
    }

    if (lines.length === 0) {
        return null;
    }

    return ['/**', ...lines, ' */'].join('\n');
}

function buildPropertyDoc(member: DocProperty): string | null {
    const lines: string[] = [];

    if (member.description && member.description.trim()) {
        for (const line of member.description.trim().split('\n')) {
            lines.push(` * ${line.trim()}`);
        }
    }

    if (member.kind === 'enum' && member.enumName) {
        lines.push(` * DAZ enum member of ${member.enumName}.`);
    }

    if (member.since) {
        lines.push(` * @since ${member.since}`);
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
        const suffix = type.undocumented ? '; undocumented type' : '';
        return ` // ${type.rawType}${suffix}`;
    }

    return '';
}
