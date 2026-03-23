import axios from 'axios';
import * as cheerio from 'cheerio';

export interface DocParameter {
    type: string;
    name: string;
    default: string | null;
    description?: string;
}

export interface DocMethod {
    name: string;
    return: string;
    returnDescription?: string;
    params: DocParameter[];
    description?: string;
    since?: string;
}

export interface DocProperty {
    name: string;
    type: string;
    description?: string;
    since?: string;
    readOnly?: boolean;
}

export interface DocSignal {
    name: string;
    return: string;
    params: DocParameter[];
    description?: string;
}

export interface DocumentationData {
    className: string;
    classSummary: string;
    /** Direct parent class as listed in the docs' Inherits chain (deepest ancestor). */
    inherits: string;
    methods: Map<string, DocMethod[]>; // name -> array of overloads
    properties: Map<string, DocProperty>;
    signals: Map<string, DocSignal[]>;
    descriptions: Map<string, string>; // method/property name -> primary description
}

/**
 * Parse Daz documentation HTML and extract method/property data
 */
export async function parseDocsFromUrl(docUrl: string): Promise<DocumentationData> {
    try {
        const response = await axios.get(docUrl);
        const $ = cheerio.load(response.data);

        const className = extractClassName($);
        const classSummary = extractClassSummary($);
        const inherits = extractInheritance($);
        const methods = extractMethods($);
        const properties = extractProperties($);
        const signals = extractSignals($);
        // Enrich from the Detailed Description section (updates in place)
        const descriptions = enrichFromDetailedSection($, methods, properties, signals);

        return { className, classSummary, inherits, methods, properties, signals, descriptions };
    } catch (error) {
        console.error(`Error parsing docs from ${docUrl}:`, error);
        throw error;
    }
}

function extractClassName($: any): string {
    return $('h1').first().text().trim() || 'UnknownClass';
}

/**
 * The class summary is the first <p> inside the div.level1 that immediately
 * follows the h1 in div.page — e.g. "Base class for objects that can
 * participate in a transform hierarchy."
 */
function extractClassSummary($: any): string {
    return $('div.page').children('div.level1').first().children('p').first().text().trim();
}

/**
 * Extracts the direct parent class from the "Inherits :" hierarchy list.
 *
 * The HTML nests the full ancestry chain as nested <ul> elements; the deepest
 * <a> link is the immediate parent (e.g. QObject > DzBase > DzElement → "DzElement").
 */
function extractInheritance($: any): string {
    let directParent = '';

    $('p').each((_: number, p: any) => {
        if ($(p).find('strong').text().trim() !== 'Inherits :') return;

        // The <ul> immediately following the paragraph holds the chain
        const links = $(p).next('ul').find('a');
        if (links.length > 0) {
            directParent = $(links.last()).text().trim();
        }
        return false; // stop after first match
    });

    return directParent;
}

function extractProperties($: any): Map<string, DocProperty> {
    const properties = new Map<string, DocProperty>();

    $('h2').each((_: number, el: any) => {
        if ($(el).text().trim() !== 'Properties') return;
        $(el).next().find('table tbody tr').each((_i: number, row: any) => {
            const cols = $(row).find('td');
            if (cols.length < 2) return;
            const type = $(cols[0]).text().trim();
            const name = $(cols[1]).find('strong').text().trim();
            if (name) {
                properties.set(name, { name, type: getValidType(type), description: '' });
            }
        });
    });

    return properties;
}

function extractMethods($: any): Map<string, DocMethod[]> {
    const methods = new Map<string, DocMethod[]>();

    $('h2').each((_: number, el: any) => {
        if ($(el).text().trim() !== 'Methods') return;
        $(el).next().find('table tbody tr').each((_i: number, row: any) => {
            const returnType = $(row).find('td').first().text().trim();
            const methodName = $(row).find('strong').first().text().trim();
            if (!methodName) return;

            const method: DocMethod = {
                name: methodName,
                return: getValidType(returnType),
                params: extractMethodParams($, row),
            };

            if (!methods.has(methodName)) methods.set(methodName, []);
            methods.get(methodName)!.push(method);
        });
    });

    return methods;
}

function extractSignals($: any): Map<string, DocSignal[]> {
    const signals = new Map<string, DocSignal[]>();

    $('h2').each((_: number, el: any) => {
        if ($(el).text().trim() !== 'Signals') return;
        $(el).next().find('table tbody tr').each((_i: number, row: any) => {
            const returnType = $(row).find('td').first().text().trim();
            const signalName = $(row).find('strong').first().text().trim();
            if (!signalName) return;

            const signal: DocSignal = {
                name: signalName,
                return: getValidType(returnType),
                params: extractMethodParams($, row),
            };

            if (!signals.has(signalName)) signals.set(signalName, []);
            signals.get(signalName)!.push(signal);
        });
    });

    return signals;
}

/**
 * Extract method parameters from a table row.
 *
 * The Daz HTML mixes text nodes and `<em>` elements for the parameter list.
 * Using .text() on the whole `<td>` is the most reliable approach.
 *
 * Example cell text: `addNodeChild  ( DzNode child,  Boolean inPlace=false )`
 */
function extractMethodParams($: any, row: any): DocParameter[] {
    const params: DocParameter[] = [];
    const col1 = $(row).find('td').eq(1);
    if (!col1.length) return params;

    const text = col1.text().trim();
    const match = text.match(/\(([^)]*)\)/);
    if (!match || !match[1].trim()) return params;

    match[1].split(',').forEach((part: string) => {
        const cleaned = part.replace(/[()]/g, '').trim();
        if (!cleaned) return;

        const tokens = cleaned.split(/\s+/);
        if (tokens.length < 2) return;

        const type = tokens[0];
        const rest = tokens.slice(1).join(' ');
        const eqIdx = rest.indexOf('=');
        const name = eqIdx !== -1 ? rest.slice(0, eqIdx).trim() : rest.trim();
        const defaultVal = eqIdx !== -1 ? rest.slice(eqIdx + 1).trim() : null;

        params.push({ type: getValidType(type), name, default: defaultVal });
    });

    return params;
}

// ── Detailed Description parsing ─────────────────────────────────────────────

/** Known bold section-header labels inside Detailed Description blocks */
const SECTION_HEADERS = new Set([
    'Parameter(s):',
    'Return Value:',
    'Since:',
    'Signature:',
]);

interface DetailedEntry {
    name: string;
    paramCount: number;
    description: string;
    returnDescription: string;
    paramDescriptions: { name: string; description: string }[];
    since: string;
}

/**
 * Parse one "detail block" — the HTML elements between two `<hr/>` separators
 * in the Detailed Description section.
 *
 * Structure (one method example):
 *   <p>ReturnType : <strong><a name="anchor">methodName</a></strong>( ... )</p>
 *   <p>Description text.</p>
 *   <p><strong>Parameter(s):</strong></p>
 *   <ul><li><em>param</em> - description</li></ul>
 *   <p><strong>Return Value:</strong></p>
 *   <ul><li>Return description.</li></ul>
 *   <p><strong>Since:</strong></p>
 *   <ul><li>4.x.x.x</li></ul>
 */
function parseDetailBlock($: any, elements: any[]): DetailedEntry | null {
    let name = '';
    let paramCount = 0;
    let description = '';
    let returnDescription = '';
    const paramDescriptions: { name: string; description: string }[] = [];
    let since = '';
    type State = 'pre-sig' | 'post-sig' | 'params' | 'returns' | 'since' | 'skip';
    let state: State = 'pre-sig';

    for (const el of elements) {
        const tag = (el.tagName || '').toLowerCase();
        if (!tag) continue;

        if (tag === 'p') {
            const $p = $(el);

            // ── Signature paragraph ───────────────────────────────────────
            // Identified by <strong><a name="...">
            const nameAnchor = $p.find('strong a[name]');
            if (nameAnchor.length && state === 'pre-sig') {
                name = nameAnchor.text().trim();
                // Count params from full paragraph text (between parentheses)
                const pText = $p.text();
                const parMatch = pText.match(/\(([^)]*)\)/);
                if (parMatch && parMatch[1].trim()) {
                    paramCount = parMatch[1].split(',').filter((s: string) => s.trim()).length;
                }
                state = 'post-sig';
                continue;
            }

            if (state === 'pre-sig') continue;

            // ── Section header or description paragraph ───────────────────
            const boldText = $p.find('strong').first().text().trim();

            if (SECTION_HEADERS.has(boldText)) {
                if (boldText === 'Parameter(s):') state = 'params';
                else if (boldText === 'Return Value:') state = 'returns';
                else if (boldText === 'Since:') state = 'since';
                else state = 'skip';
            } else if (!description) {
                // First plain-text paragraph after the signature is the description
                description = $p.text().trim();
            }

        } else if (tag === 'ul') {
            const $ul = $(el);

            if (state === 'params') {
                $ul.find('li').each((_i: number, li: any) => {
                    const $li = $(li);
                    const paramName = $li.find('em').first().text().trim();
                    if (!paramName) return;
                    const liText = $li.text().trim();
                    const dashIdx = liText.indexOf(' - ');
                    const desc = dashIdx !== -1 ? liText.slice(dashIdx + 3).trim() : '';
                    paramDescriptions.push({ name: paramName, description: desc });
                });
                state = 'post-sig';
            } else if (state === 'returns') {
                returnDescription = $ul.find('li').first().text().trim();
                state = 'post-sig';
            } else if (state === 'since') {
                since = $ul.find('li').first().text().trim();
                state = 'post-sig';
            }
        }
    }

    return name ? { name, paramCount, description, returnDescription, paramDescriptions, since } : null;
}

/**
 * Parse the Detailed Description section and enrich methods/properties/signals
 * in-place with descriptions, return descriptions, param descriptions, and versions.
 *
 * The detailed section is structured as:
 *   <h2>Detailed Description</h2>
 *   <div class="level2">
 *     <h3>Methods</h3>
 *     <div class="level3">
 *       <hr/>  [method block]  <hr/>  [method block]  ...
 *     </div>
 *     <h3>Properties</h3>
 *     <div class="level3"> ... </div>
 *     ...
 *   </div>
 */
function enrichFromDetailedSection(
    $: any,
    methods: Map<string, DocMethod[]>,
    properties: Map<string, DocProperty>,
    signals: Map<string, DocSignal[]>
): Map<string, string> {
    const descriptions = new Map<string, string>();

    // The h3 sub-sections (Methods, Properties, Signals, etc.) are SIBLINGS of the h2
    // elements in the DOM — they are NOT children of the Detailed Description div.level2.
    // Strategy: find the "Detailed Description" h2, then walk its nextAll h3 siblings.
    let detailedH2: any = null;
    $('h2').each((_: number, h2: any) => {
        if ($(h2).text().includes('Detailed Description')) detailedH2 = $(h2);
    });
    if (!detailedH2) return descriptions;

    detailedH2.nextAll('h3').each((_: number, h3: any) => {
        // Each content h3 is immediately followed by a div.level3
        const containerDiv = $(h3).next('.level3');
        if (!containerDiv.length) return;

        // ── Collect blocks separated by <hr/> ────────────────────────────
        const blocks: any[][] = [];
        let currentBlock: any[] = [];

        containerDiv.children().each((_j: number, el: any) => {
            if ((el.tagName || '').toLowerCase() === 'hr') {
                if (currentBlock.length) { blocks.push(currentBlock); currentBlock = []; }
            } else {
                currentBlock.push(el);
            }
        });
        if (currentBlock.length) blocks.push(currentBlock);

        // ── Parse each block and update maps ─────────────────────────────
        for (const block of blocks) {
            const entry = parseDetailBlock($, block);
            if (!entry?.name) continue;

            const { name, paramCount, description, returnDescription, paramDescriptions, since } = entry;

            if (description && !descriptions.has(name)) {
                descriptions.set(name, description);
            }

            const applyToOverload = (overloads: (DocMethod | DocSignal)[]) => {
                // Prefer unused overload matching param count; fall back to any unused
                let overload =
                    overloads.find(o => o.params.length === paramCount && !o.description) ??
                    overloads.find(o => o.params.length === paramCount) ??
                    overloads.find(o => !o.description) ??
                    overloads[0];

                if (!overload) return;
                if (description && !overload.description) overload.description = description;
                // Cast to DocMethod — signals never have returnDescription/since
                const asMethod = overload as DocMethod;
                if (since && !asMethod.since) asMethod.since = since;
                if (returnDescription && !asMethod.returnDescription) asMethod.returnDescription = returnDescription;
                paramDescriptions.forEach(pd => {
                    const p = overload!.params.find(param => param.name === pd.name);
                    if (p && pd.description && !p.description) p.description = pd.description;
                });
            };

            if (methods.has(name)) applyToOverload(methods.get(name)!);
            else if (signals.has(name)) applyToOverload(signals.get(name)!);
            else if (properties.has(name)) {
                const prop = properties.get(name)!;
                if (description && !prop.description) prop.description = description;
                if (since && !prop.since) prop.since = since;
                descriptions.set(name, description);
            }
        }
    });

    return descriptions;
}

// ── Utilities ─────────────────────────────────────────────────────────────────

function getValidType(type: string): string {
    switch (type.trim()) {
        case 'Number':
        case 'String':
        case 'Boolean':
            return type.trim().toLowerCase();
        case 'Array':
            return 'any[]';
        default:
            // C++ scope resolution (e.g. DzRenderMgr::RenderPriority) → number
            if (/\w+::\w+/.test(type.trim())) return 'number';
            return type.trim();
    }
}

/**
 * Generate a JSDoc comment block from documentation data.
 */
export function generateJSDocComment(
    description: string,
    params: DocParameter[],
    returnType: string,
    since?: string,
    returnDescription?: string
): string {
    let doc = '/**\n';

    if (description) {
        description.split('\n').forEach(line => { doc += ` * ${line}\n`; });
    }

    params.forEach(param => {
        const desc = param.description ? ` - ${param.description}` : '';
        doc += ` * @param ${param.name} ${param.type}${desc}\n`;
    });

    if (returnType && returnType !== 'void') {
        const retDesc = returnDescription ? ` ${returnDescription}` : '';
        doc += ` * @returns ${returnType}${retDesc}\n`;
    }

    if (since) {
        doc += ` * @since ${since}\n`;
    }

    doc += ' */\n';
    return doc;
}

export function generateUndocumentedMarker(): string {
    return '/** @undocumented */\n';
}
