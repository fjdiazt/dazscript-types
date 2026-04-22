import { ClassShapeMember, DazClassModel, LegacyClassInfo } from './typeModel';

export interface ClassShape {
    className: string;
    extendsName: string;
    members: ClassShapeMember[];
}

export type ClassRegistry = Map<string, ClassShape>;

export function buildClassRegistry(
    htmlModels: Iterable<DazClassModel>,
    legacyClasses: Iterable<LegacyClassInfo>
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
                members: legacy.members.map(member => ({
                    name: member.name,
                    kind: member.kind,
                    paramCount: member.paramCount,
                })),
            });
        }
    }

    return registry;
}

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
