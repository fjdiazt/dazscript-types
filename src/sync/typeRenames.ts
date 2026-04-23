import { TypeRef } from './typeModel';

const HTML_GENERATED_CLASS_RENAMES: Record<string, string> = {
    Image: 'DzImage',
};

const REVERSE_HTML_GENERATED_CLASS_RENAMES = Object.fromEntries(
    Object.entries(HTML_GENERATED_CLASS_RENAMES).map(([rawName, canonicalName]) => [canonicalName, rawName])
);

export function canonicalizeGeneratedClassName(className: string): string {
    return HTML_GENERATED_CLASS_RENAMES[className] ?? className;
}

export function getHtmlSourceClassName(className: string): string {
    return REVERSE_HTML_GENERATED_CLASS_RENAMES[className] ?? className;
}

export function canonicalizeTypeRef(typeRef: TypeRef): TypeRef {
    const canonicalType = canonicalizeGeneratedClassName(typeRef.type);
    const canonicalRawType = typeRef.rawType
        ? canonicalizeGeneratedClassName(typeRef.rawType)
        : undefined;

    if (canonicalType === typeRef.type && canonicalRawType === typeRef.rawType) {
        return typeRef;
    }

    return {
        ...typeRef,
        type: canonicalType,
        rawType: canonicalRawType,
    };
}

export function canonicalizeLegacySignature(signature: string): string {
    let rewritten = signature;
    for (const [rawName, canonicalName] of Object.entries(HTML_GENERATED_CLASS_RENAMES)) {
        rewritten = rewritten.replace(new RegExp(`\\b${rawName}\\b`, 'g'), canonicalName);
    }

    return rewritten;
}
