export interface MemberInfo {
    signature: string;   // trimmed declaration line (map key)
    name: string;
    isMethod: boolean;
    paramCount: number;  // 0 for properties
}

export interface ClassInfo {
    className: string;
    extends: string;
    members: Map<string, MemberInfo>; // key = trimmed signature line
}

export type ClassRegistry = Map<string, ClassInfo>;

export interface AncestorMembers {
    /** Property names present in any ancestor (regardless of type). */
    propNames: Set<string>;
    /**
     * `"name:::paramCount"` keys for every method present in any ancestor
     * (regardless of param types, return type, or documentation status).
     */
    methodKeys: Set<string>;
}

// ── Parsing ───────────────────────────────────────────────────────────────────

const METHOD_RE  = /^(\w+)\s*\(([^)]*)\)\s*:\s*[\w\[\]<>,.\s|]+;?\s*(?:\/\/.*)?$/;
const PROP_RE    = /^(\w+)\??\s*:\s*[\w\[\]<>,.\s|]+;?\s*(?:\/\/.*)?$/;
const ISSUES_BLOCK_START = '/* @syncer-issues';

/**
 * Parse a single `.d.ts` file content into a ClassInfo.
 * Returns null if the content contains no `declare class` statement.
 */
export function parseClassInfo(content: string): ClassInfo | null {
    const classMatch = content.match(/declare class (\w+)(?:\s+extends\s+(\w+))?/);
    if (!classMatch) return null;

    const className  = classMatch[1];
    const parentClass = classMatch[2] ?? '';
    const members    = new Map<string, MemberInfo>();

    const lines = content.split('\n');
    let inJSDoc = false;

    for (const line of lines) {
        const trimmed = line.trim();

        if (trimmed.startsWith('/**')) {
            inJSDoc = !trimmed.endsWith('*/');
            continue;
        }
        if (inJSDoc) {
            if (trimmed.endsWith('*/')) inJSDoc = false;
            continue;
        }
        if (trimmed === '' || trimmed.startsWith('//') || trimmed.startsWith('/*')) continue;

        const methodMatch = METHOD_RE.exec(trimmed);
        if (methodMatch) {
            const name = methodMatch[1];
            const paramStr = methodMatch[2].trim();
            const paramCount = paramStr ? paramStr.split(',').length : 0;
            members.set(trimmed, { signature: trimmed, name, isMethod: true, paramCount });
            continue;
        }

        // Only treat as a property if it doesn't look like a method
        const propMatch = PROP_RE.exec(trimmed);
        if (propMatch) {
            const name = propMatch[1];
            members.set(trimmed, { signature: trimmed, name, isMethod: false, paramCount: 0 });
        }
    }

    return { className, extends: parentClass, members };
}

/**
 * Build a class registry from an array of `.d.ts` file contents.
 * Files that contain no class declaration are silently skipped.
 */
export function buildClassRegistry(contents: string[]): ClassRegistry {
    const registry: ClassRegistry = new Map();
    for (const content of contents) {
        const info = parseClassInfo(content);
        if (info) registry.set(info.className, info);
    }
    return registry;
}

/**
 * Collect every member (methods and properties) from all ancestors of
 * `className` in the registry, regardless of documentation status.
 *
 * Method keys use the format `"name:::paramCount"` so that two overloads
 * with different param counts are distinct.
 */
export function resolveAncestorMembers(className: string, registry: ClassRegistry): AncestorMembers {
    const propNames  = new Set<string>();
    const methodKeys = new Set<string>();
    const visited    = new Set<string>();

    let current = registry.get(className)?.extends ?? '';

    while (current && !visited.has(current)) {
        visited.add(current);
        const ancestor = registry.get(current);
        if (!ancestor) break;

        for (const info of ancestor.members.values()) {
            if (info.isMethod) {
                methodKeys.add(`${info.name}:::${info.paramCount}`);
            } else {
                propNames.add(info.name);
            }
        }

        current = ancestor.extends;
    }

    return { propNames, methodKeys };
}

// ── Removal ───────────────────────────────────────────────────────────────────

/**
 * Remove members from `content` whose name (properties) or name+paramCount
 * (methods) matches any member present in an ancestor class in `registry`.
 * Documentation status on either side is irrelevant.
 *
 * Rules:
 *  - Skipped entirely if the file has an `@syncer-issues` block.
 *  - The JSDoc block immediately preceding a removed declaration is also removed.
 *  - All duplicate occurrences of the same member are removed.
 *  - Consecutive blank lines left by removal are collapsed to at most one.
 */
export function removeInheritedMembers(content: string, registry: ClassRegistry): string {
    if (content.startsWith(ISSUES_BLOCK_START)) return content;

    const info = parseClassInfo(content);
    if (!info?.extends) return content;

    const augmented: ClassRegistry = new Map([...registry, [info.className, info]]);
    const { propNames, methodKeys } = resolveAncestorMembers(info.className, augmented);
    if (propNames.size === 0 && methodKeys.size === 0) return content;

    const lines = content.split('\n');
    const output: string[] = [];

    let pendingJSDocStart = -1;
    let inJSDoc           = false;

    for (const line of lines) {
        const trimmed = line.trim();

        if (trimmed.startsWith('/**')) {
            pendingJSDocStart = output.length;
            output.push(line);
            inJSDoc = !trimmed.endsWith('*/');
            continue;
        }

        if (inJSDoc) {
            output.push(line);
            if (trimmed.endsWith('*/')) inJSDoc = false;
            continue;
        }

        if (isInheritedMember(trimmed, propNames, methodKeys)) {
            // Remove declaration and its preceding JSDoc (if any)
            if (pendingJSDocStart !== -1) {
                let sliceFrom = pendingJSDocStart;
                // Also eat the blank line that preceded the JSDoc
                if (sliceFrom > 0 && output[sliceFrom - 1].trim() === '') sliceFrom--;
                output.splice(sliceFrom);
            }
            pendingJSDocStart = -1;
            continue; // don't push the declaration
        }

        pendingJSDocStart = -1;
        output.push(line);
    }

    return output.join('\n').replace(/\n{3,}/g, '\n\n');
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function isInheritedMember(
    trimmed: string,
    propNames: Set<string>,
    methodKeys: Set<string>
): boolean {
    const methodMatch = METHOD_RE.exec(trimmed);
    if (methodMatch) {
        const name       = methodMatch[1];
        const paramStr   = methodMatch[2].trim();
        const paramCount = paramStr ? paramStr.split(',').length : 0;
        return methodKeys.has(`${name}:::${paramCount}`);
    }

    const propMatch = PROP_RE.exec(trimmed);
    if (propMatch) {
        return propNames.has(propMatch[1]);
    }

    return false;
}
