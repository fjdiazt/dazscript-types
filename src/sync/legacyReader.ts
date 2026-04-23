/**
 * Reads the existing `.d.ts` file just enough to recover legacy declarations.
 *
 * This parser is intentionally shallow. Its job is not to understand all of
 * TypeScript; it only extracts class/member signatures needed for the recovery
 * pass and flags shapes that are unsafe to rewrite automatically.
 */
import { LegacyClassInfo, LegacyMember } from './typeModel';

const METHOD_RE = /^(\s*)(static\s+)?(\w+)\s*\(([^)]*)\)\s*:\s*([^;]+);\s*(\/\/.*)?$/;
const CONSTRUCTOR_RE = /^(\s*)constructor\s*\(([^)]*)\)\s*;\s*(\/\/.*)?$/;
const PROP_RE = /^(\s*)(static\s+)?(\w+)\??\s*:\s*([^;]+);\s*(\/\/.*)?$/;
const CLASS_RE = /declare class(?:\s+(\w+))?(?:\s+\(deprecated\))?(?:\s+extends\s+(\w+)(?:\s+\(deprecated\))?)?(?:\s*\/\*[\s\S]*?\*\/)?\s*\{/g;

/**
 * Parse a legacy class declaration from the current file content.
 */
export function parseLegacyClass(content: string, expectedClassName?: string): LegacyClassInfo | null {
    const classMatches = [...content.matchAll(CLASS_RE)];
    if (classMatches.length === 0) {
        return null;
    }

    const classMatch = expectedClassName
        ? classMatches.find(match => (match[1] || expectedClassName) === expectedClassName) ?? null
        : classMatches[0];
    if (!classMatch) {
        return null;
    }

    const className = classMatch[1] || expectedClassName;
    if (!className) {
        return null;
    }
    const extendsName = classMatch[2] ?? '';
    const classStart = classMatch.index ?? 0;
    const braceStart = content.indexOf('{', classStart);
    const braceEnd = findMatchingBrace(content, braceStart);
    if (braceStart === -1 || braceEnd === -1) {
        return {
            className,
            extendsName,
            members: [],
            hasUnsafeTopLevelContent: true,
        };
    }

    const beforeClass = content.slice(0, classStart).trim();
    const afterClass = content.slice(braceEnd + 1).trim();
    const hasUnsafeTopLevelContent =
        classMatches.length > 1 ||
        !isAllowedTopLevel(beforeClass) ||
        !isAllowedTopLevel(afterClass);

    const body = content.slice(braceStart + 1, braceEnd);
    const members = parseLegacyMembers(body);

    return {
        className,
        extendsName,
        members,
        hasUnsafeTopLevelContent,
    };
}

function parseLegacyMembers(body: string): LegacyMember[] {
    const members: LegacyMember[] = [];
    let inJsDoc = false;

    for (const line of body.split('\n')) {
        const trimmed = line.trim();
        if (!trimmed) {
            continue;
        }

        if (trimmed.startsWith('/**')) {
            inJsDoc = !trimmed.endsWith('*/');
            continue;
        }
        if (inJsDoc) {
            if (trimmed.endsWith('*/')) {
                inJsDoc = false;
            }
            continue;
        }
        if (trimmed.startsWith('/*') || trimmed.startsWith('//')) {
            continue;
        }

        const constructorMatch = trimmed.match(CONSTRUCTOR_RE);
        if (constructorMatch) {
            members.push({
                name: 'constructor',
                signature: trimmed,
                kind: 'constructor',
                paramCount: countParams(constructorMatch[2]),
            });
            continue;
        }

        const methodMatch = trimmed.match(METHOD_RE);
        if (methodMatch) {
            const name = methodMatch[3];
            members.push({
                name,
                signature: trimmed,
                kind: 'method',
                paramCount: countParams(methodMatch[4]),
            });
            continue;
        }

        const propMatch = trimmed.match(PROP_RE);
        if (propMatch) {
            const name = propMatch[3];
            members.push({
                name,
                signature: trimmed,
                kind: 'property',
                paramCount: 0,
            });
        }
    }

    return members;
}

function countParams(rawParams: string): number {
    if (!rawParams.trim()) {
        return 0;
    }

    return rawParams.split(',').map(part => part.trim()).filter(Boolean).length;
}

function isAllowedTopLevel(content: string): boolean {
    if (!content) {
        return true;
    }

    const stripped = content
        .replace(/\/\*\*[\s\S]*?\*\//g, '')
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/\/\/.*$/gm, '')
        .trim();

    return stripped.length === 0;
}

function findMatchingBrace(content: string, openIndex: number): number {
    let depth = 0;
    for (let i = openIndex; i < content.length; i++) {
        const char = content[i];
        if (char === '{') {
            depth++;
        } else if (char === '}') {
            depth--;
            if (depth === 0) {
                return i;
            }
        }
    }

    return -1;
}
