/**
 * Converts saved DAZ HTML pages into a normalized class model.
 *
 * Keep this module focused on extracting documentation truth from the local
 * HTML corpus. It should not know about filesystem scanning, rebuild policy,
 * or report formatting.
 */
import * as fs from 'fs';
import * as cheerio from 'cheerio';
import {
    DazClassModel,
    DocMethod,
    DocParameter,
    DocProperty,
    DocSignal,
    TypeRef,
} from './typeModel';

type CheerioRoot = cheerio.CheerioAPI;

interface DetailedEntry {
    name: string;
    paramCount: number;
    description: string;
    returnDescription: string;
    paramDescriptions: Map<string, string>;
    since: string;
}

const DETAIL_SECTION_HEADERS = new Set([
    'Parameter(s):',
    'Return Value:',
    'Since:',
    'Attention:',
    'See Also:',
    'Example',
    'Example:',
    'Signature:',
]);

/**
 * Parse one saved HTML file from disk.
 */
export function parseHtmlFile(filePath: string): DazClassModel {
    const html = fs.readFileSync(filePath, 'utf-8');
    return parseHtml(html);
}

/**
 * Parse one HTML document string into the normalized model used by the syncer.
 */
export function parseHtml(html: string): DazClassModel {
    const $ = cheerio.load(html);

    const className = $('h1').first().text().trim();
    const docUrl = extractDocUrl(html, $);
    const summary = $('div.page').children('div.level1').first().children('p').first().text().trim();
    const extendsName = extractExtendsName($);
    const enums = extractEnumMembers($);
    const properties = extractPropertyMembers($);
    const constructors = extractMethodMembers($, 'Constructors', 'constructor');
    const staticMethods = extractMethodMembers($, 'Static Methods', 'staticMethod');
    const methods = extractMethodMembers($, 'Methods', 'method');
    const signals = extractSignalMembers($);

    applyDetailedDescriptions($, 'Enumerations', enums);
    applyDetailedDescriptions($, 'Properties', properties);
    applyDetailedDescriptions($, 'Constructors', constructors);
    applyDetailedDescriptions($, 'Static Methods', staticMethods);
    applyDetailedDescriptions($, 'Methods', methods);
    applyDetailedDescriptions($, 'Signals', signals);

    return {
        className,
        docUrl,
        summary,
        extendsName,
        enums,
        properties,
        constructors,
        staticMethods,
        methods,
        signals,
    };
}

function extractDocUrl(html: string, $: CheerioRoot): string {
    const commentMatch = html.match(/<!--\s*@docurl\s+(https?:\/\/[^\s]+)\s*-->/i);
    if (commentMatch) {
        return commentMatch[1];
    }

    const canonical = $('link[rel="canonical"]').attr('href')?.trim() ?? '';
    if (canonical.startsWith('http://') || canonical.startsWith('https://')) {
        return canonical;
    }
    if (canonical.startsWith('/')) {
        return `https://docs.daz3d.com${canonical}`;
    }

    return '';
}

function extractExtendsName($: CheerioRoot): string {
    let directParent = '';

    $('p').each((_, p) => {
        if ($(p).find('strong').text().trim() !== 'Inherits :') {
            return;
        }

        const links = $(p).next('ul').find('a');
        if (links.length > 0) {
            directParent = $(links.last()).text().trim();
        }
        return false;
    });

    return directParent;
}

function extractEnumMembers($: CheerioRoot): DocProperty[] {
    return findSectionRows($, 'Enumerations').flatMap(row => {
        const cols = $(row).find('td');
        if (cols.length < 2) {
            return [];
        }

        const names = $(cols[1]).find('strong a').map((_, el) => $(el).text().trim()).get();
        return names
            .filter(Boolean)
            .map(name => ({
                kind: 'enum' as const,
                name,
                type: { type: 'number' },
            }));
    });
}

function extractPropertyMembers($: CheerioRoot): DocProperty[] {
    return findSectionRows($, 'Properties').flatMap(row => {
        const cols = $(row).find('td');
        if (cols.length < 2) {
            return [];
        }

        const name = $(cols[1]).find('strong').first().text().trim();
        if (!name) {
            return [];
        }

        const descriptionText = $(cols[1]).text();
        return [{
            kind: 'property' as const,
            name,
            type: normalizeType($(cols[0]).text().trim()),
            readOnly: /\(Read Only\)/i.test(descriptionText),
        }];
    });
}

function extractMethodMembers(
    $: CheerioRoot,
    sectionName: string,
    kind: 'method' | 'staticMethod' | 'constructor'
): DocMethod[] {
    return findSectionRows($, sectionName).flatMap(row => {
        const cols = $(row).find('td');
        if (cols.length < 2) {
            return [];
        }

        const returnType = kind === 'constructor'
            ? { type: 'void' }
            : normalizeType($(cols[0]).text().trim());
        const name = kind === 'constructor'
            ? 'constructor'
            : $(cols[1]).find('strong').first().text().trim();
        if (!name) {
            return [];
        }

        return [{
            kind,
            name,
            returnType,
            parameters: extractParametersFromCell($, cols[1]),
        }];
    });
}

function extractSignalMembers($: CheerioRoot): DocSignal[] {
    return findSectionRows($, 'Signals').flatMap(row => {
        const cols = $(row).find('td');
        if (cols.length < 2) {
            return [];
        }

        const name = $(cols[1]).find('strong').first().text().trim();
        if (!name) {
            return [];
        }

        return [{
            kind: 'signal' as const,
            name,
            parameters: extractParametersFromCell($, cols[1]),
        }];
    });
}

function findSectionRows($: CheerioRoot, title: string): any[] {
    let sectionRows: any[] = [];

    $('h2').each((_, el) => {
        if ($(el).text().trim() !== title) {
            return;
        }

        const section = $(el).next('.level2');
        const rows = section.find('table tr').toArray().filter(row => $(row).find('td').length >= 2);
        sectionRows = rows;
        return false;
    });

    return sectionRows;
}

function extractParametersFromCell($: CheerioRoot, cell: any): DocParameter[] {
    const text = $(cell).text().trim();
    const match = text.match(/\((.*)\)/);
    if (!match) {
        return [];
    }

    const raw = match[1].trim();
    if (!raw) {
        return [];
    }

    return splitParams(raw).map(parseParam).filter((param): param is DocParameter => param !== null);
}

function splitParams(input: string): string[] {
    const params: string[] = [];
    let current = '';
    let depth = 0;

    for (const char of input) {
        if (char === '<') {
            depth++;
        } else if (char === '>') {
            depth = Math.max(0, depth - 1);
        }

        if (char === ',' && depth === 0) {
            params.push(current.trim());
            current = '';
            continue;
        }

        current += char;
    }

    if (current.trim()) {
        params.push(current.trim());
    }

    return params;
}

function parseParam(rawParam: string): DocParameter | null {
    const cleaned = rawParam.replace(/\s+/g, ' ').trim();
    if (!cleaned) {
        return null;
    }

    const defaultIndex = cleaned.indexOf('=');
    const left = defaultIndex === -1 ? cleaned : cleaned.slice(0, defaultIndex).trim();
    const defaultValue = defaultIndex === -1 ? null : cleaned.slice(defaultIndex + 1).trim();
    const pieces = left.split(' ');
    if (pieces.length < 2) {
        return null;
    }

    const name = pieces[pieces.length - 1].trim();
    const typeName = pieces.slice(0, -1).join(' ').trim();
    if (!name || !typeName) {
        return null;
    }

    return {
        name,
        type: normalizeType(typeName),
        defaultValue,
    };
}

function normalizeType(rawType: string): TypeRef {
    const compact = rawType.replace(/\s+/g, ' ').trim();
    switch (compact) {
        case 'String':
            return { type: 'string', rawType: compact };
        case 'Number':
            return { type: 'number', rawType: compact };
        case 'Boolean':
            return { type: 'boolean', rawType: compact };
        case 'Array':
            return { type: 'any[]', rawType: compact };
        case 'void':
            return { type: 'void' };
        default:
            if (/\w+::\w+/.test(compact)) {
                return { type: 'number', rawType: compact };
            }
            return { type: compact };
    }
}

function applyDetailedDescriptions(
    $: CheerioRoot,
    sectionName: string,
    members: Array<DocProperty | DocMethod | DocSignal>
): void {
    if (members.length === 0) {
        return;
    }

    const details = parseDetailedSection($, sectionName);
    if (details.length === 0) {
        return;
    }

    const detailUsage = new Set<number>();
    for (const member of members) {
        const paramCount = 'parameters' in member ? member.parameters.length : 0;
        const detailIndex = details.findIndex((entry, index) =>
            !detailUsage.has(index) &&
            entry.name === member.name &&
            entry.paramCount === paramCount
        );

        if (detailIndex === -1) {
            continue;
        }

        detailUsage.add(detailIndex);
        const detail = details[detailIndex];
        if (detail.description) {
            member.description = detail.description;
        }
        if (detail.since) {
            member.since = detail.since;
        }

        if ('returnType' in member && detail.returnDescription) {
            member.returnDescription = detail.returnDescription;
        }

        if ('parameters' in member) {
            for (const parameter of member.parameters) {
                const description = detail.paramDescriptions.get(parameter.name);
                if (description) {
                    parameter.description = description;
                }
            }
        }
    }
}

function parseDetailedSection($: CheerioRoot, sectionName: string): DetailedEntry[] {
    const detailedHeader = $('h3').filter((_, el) => $(el).text().trim() === sectionName).first();
    if (!detailedHeader.length) {
        return [];
    }

    const container = detailedHeader.next('.level3');
    if (!container.length) {
        return [];
    }

    const blocks: any[][] = [];
    let currentBlock: any[] = [];
    container.children().each((_, el) => {
        if ((el.tagName || '').toLowerCase() === 'hr') {
            if (currentBlock.length > 0) {
                blocks.push(currentBlock);
                currentBlock = [];
            }
        } else {
            currentBlock.push(el);
        }
    });
    if (currentBlock.length > 0) {
        blocks.push(currentBlock);
    }

    return blocks
        .map(block => parseDetailedBlock($, block))
        .filter((entry): entry is DetailedEntry => entry !== null);
}

function parseDetailedBlock($: CheerioRoot, block: any[]): DetailedEntry | null {
    let name = '';
    let paramCount = 0;
    let description = '';
    let returnDescription = '';
    let since = '';
    const paramDescriptions = new Map<string, string>();
    let state: 'initial' | 'params' | 'returns' | 'since' | 'skip' = 'initial';

    for (const el of block) {
        const tag = (el.tagName || '').toLowerCase();
        if (tag === 'p') {
            const paragraph = $(el);
            const anchor = paragraph.find('strong a[name]');
            if (anchor.length > 0 && !name) {
                name = anchor.text().trim();
                const text = paragraph.text();
                const match = text.match(/\((.*)\)/);
                paramCount = match && match[1].trim() ? splitParams(match[1].trim()).length : 0;
                continue;
            }

            const heading = paragraph.find('strong').first().text().trim();
            if (DETAIL_SECTION_HEADERS.has(heading)) {
                if (heading === 'Parameter(s):') {
                    state = 'params';
                } else if (heading === 'Return Value:') {
                    state = 'returns';
                } else if (heading === 'Since:') {
                    state = 'since';
                } else {
                    state = 'skip';
                }
                continue;
            }

            if (!description) {
                description = paragraph.text().trim();
            }
        } else if (tag === 'ul') {
            const list = $(el);
            if (state === 'params') {
                list.find('li').each((_, li) => {
                    const item = $(li);
                    const paramName = item.find('em').first().text().trim();
                    const text = item.text().trim();
                    const splitAt = text.indexOf(' - ');
                    const desc = splitAt === -1 ? text : text.slice(splitAt + 3).trim();
                    if (paramName) {
                        paramDescriptions.set(paramName, desc);
                    }
                });
            } else if (state === 'returns') {
                returnDescription = list.find('li').first().text().trim();
            } else if (state === 'since') {
                since = list.find('li').first().text().trim();
            }

            state = 'initial';
        }
    }

    if (!name) {
        return null;
    }

    return {
        name,
        paramCount,
        description,
        returnDescription,
        paramDescriptions,
        since,
    };
}
