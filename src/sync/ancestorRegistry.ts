/**
 * Ancestor registry utilities for class-member lookups.
 *
 * The registry is intentionally shape-based: it tracks only the minimal member
 * identity needed for inheritance filtering, not full declaration text.
 */
import { ClassShapeMember, DazClassModel, LegacyClassInfo } from './typeModel';

export interface ClassShape {
    className: string;
    extendsName: string;
    members: ClassShapeMember[];
}

export type ClassRegistry = Map<string, ClassShape>;

function isClassShapeMember(
    member: LegacyClassInfo['members'][number]
): member is LegacyClassInfo['members'][number] & ClassShapeMember {
    return member.kind !== 'constructor';
}

/**
 * Build a class registry from parsed HTML models plus legacy-only classes.
 */
export function buildClassRegistry(
    htmlModels: Iterable<DazClassModel>,
    legacyClasses: Iterable<LegacyClassInfo> = []
): ClassRegistry {
    const registry: ClassRegistry = new Map();

    for (const model of htmlModels) {
        registry.set(model.className, {
            className: model.className,
            extendsName: model.extendsName,
            members: shapeFromHtmlModel(model),
        });
    }

    for (const legacy of legacyClasses) {
        if (!registry.has(legacy.className)) {
            registry.set(legacy.className, {
                className: legacy.className,
                extendsName: legacy.extendsName,
                members: legacy.members
                    .filter(isClassShapeMember)
                    .map(member => ({
                        name: member.name,
                        kind: member.kind,
                        paramCount: member.paramCount,
                    })),
            });
        }
    }

    return registry;
}

/**
 * Collect all members reachable through the ancestor chain of a class.
 */
export function resolveAncestorMembers(className: string, registry: ClassRegistry): ClassShapeMember[] {
    const resolved: ClassShapeMember[] = [];
    const seenClasses = new Set<string>();
    let current = registry.get(className)?.extendsName ?? '';

    while (current && !seenClasses.has(current)) {
        seenClasses.add(current);
        const shape = registry.get(current);
        if (!shape) {
            break;
        }

        resolved.push(...shape.members);
        current = shape.extendsName;
    }

    return resolved;
}

function shapeFromHtmlModel(model: DazClassModel): ClassShapeMember[] {
    return [
        ...model.enums.map(member => ({ name: member.name, kind: 'property' as const, paramCount: 0 })),
        ...model.properties.map(member => ({ name: member.name, kind: 'property' as const, paramCount: 0 })),
        ...model.staticMethods.map(member => ({ name: member.name, kind: 'method' as const, paramCount: member.parameters.length })),
        ...model.methods.map(member => ({ name: member.name, kind: 'method' as const, paramCount: member.parameters.length })),
        ...model.signals.map(member => ({ name: member.name, kind: 'property' as const, paramCount: 0 })),
    ];
}
