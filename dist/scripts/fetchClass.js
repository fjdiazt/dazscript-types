"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const cheerio = require("cheerio");
// Replace with the actual URL containing the HTML
const baseUrl = 'http://docs.daz3d.com/doku.php/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/';
//url = 'http://docs.daz3d.com/doku.php/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/boxlayout_dz';
//url = 'http://docs.daz3d.com/doku.php/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/gridlayout_dz'
//url = 'http://docs.daz3d.com/doku.php/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/slider_dz'
const types2 = [
    'dz_boxlayout',
    'floatslider_dz',
    'dz_slider',
    'dz_label',
];
class ClassDefinition {
    constructor() {
        this.className = '';
        this.enumerations = [];
        this.constructors = [];
        this.properties = [];
        this.methods = [];
        this.signals = [];
        this.inherits = null;
    }
}
function fetchDzType(type) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Fetch the HTML content from the URL
            const url = `${baseUrl}${type}`;
            console.log(`fetching ${url}`);
            const response = yield axios_1.default.get(url);
            console.log(`fetch completed`);
            const html = response.data;
            // Load the HTML into Cheerio for parsing
            const $ = cheerio.load(html);
            let classDefinition = new ClassDefinition();
            classDefinition.className = getClassName($);
            classDefinition.enumerations = getEnumerations($);
            classDefinition.constructors = getConstructors($);
            classDefinition.inherits = getInherits($);
            classDefinition.properties = getProperties($);
            classDefinition.methods = getMethods($);
            classDefinition.signals = getSignals($);
            let enumDeclaration = generateEnumDeclaration(classDefinition.enumerations);
            console.log(enumDeclaration);
            let classDeclaration = generateClassDeclaration(classDefinition);
            console.log(classDeclaration);
        }
        catch (error) {
            console.error('Error fetching or parsing HTML:', error);
        }
    });
}
function getClassName($) {
    return $('.breadcrumbs .curid a').text().trim() || 'UnnamedClass';
}
function getInherits($) {
    const inherits = $('strong:contains("Inherits :")');
    if (!inherits)
        return null;
    return extractLastNestedListItem(inherits.parent().next());
}
function getProperties($) {
    const data = {};
    const propertyHeader = $('div#dokuwiki__content #properties').first();
    const rows = propertyHeader.next().find('tbody tr');
    rows.each((_, row) => {
        const columns = $(row).find('td');
        if (columns.length === 2) {
            const key = $(columns[1]).find('a').text().trim();
            const value = $(columns[0]).find('a').text().trim();
            data[key] = typeToLowerCase(value);
        }
    });
    return Object.keys(data).map(key => ({
        name: key,
        type: data[key]
    }));
}
function getEnumerations($) {
    const data = [];
    $('div#dokuwiki__content #enumerations')
        .first()
        .next()
        .find('tbody tr')
        .each((_, row) => {
        const name = $(row).find('td').first().text().trim();
        const values = $(row).find('td').last().text().replace('{', '').replace('}', '').split(',').map(value => value.trim());
        data.push({ name, values });
    });
    return data;
}
function getConstructors($) {
    const data = [];
    $('div#dokuwiki__content #constructors')
        .first()
        .next()
        .find('tbody tr')
        .each((_, row) => {
        getMethodSignature($, row).forEach((signature) => {
            data.push(signature);
        });
    });
    return data;
}
function getMethods($) {
    const data = [];
    $('div#dokuwiki__content #methods')
        .first()
        .next()
        .find('tbody tr')
        .each((_, row) => {
        getMethodSignature($, row).forEach((signature) => {
            let returnType = $(row).find('td').first().text().trim();
            data.push(Object.assign(Object.assign({}, signature), { return: returnType }));
        });
    });
    return data;
}
function getSignals($) {
    const data = [];
    $('div#dokuwiki__content #signals')
        .first()
        .next()
        .find('tbody tr')
        .each((_, row) => {
        getMethodSignature($, row).forEach((signature) => {
            let returnType = $(row).find('td').first().text().trim();
            data.push(Object.assign(Object.assign({}, signature), { return: typeToLowerCase(returnType) }));
        });
    });
    return data;
}
function getMethodSignature($, element) {
    const signature = [];
    const result = [];
    const name = $(element).find('strong').first().text().trim();
    // Gather all relevant text and <a> values from the row
    $(element).find('em').contents()
        .filter((_, element) => element.type === 'text' ? element.data.trim() !== "(" && element.data.trim() !== ")" : true)
        .each((_, element) => {
        let params = element.type === 'text'
            ? element.data.replace('(', '').replace(')', '').trim()
            : $(element).text().replace('(', '').replace(')', '').trim();
        result.push(typeToLowerCase(params));
    });
    // Group them in pairs (type, param)
    const params = result.reduce((acc, _, index, arr) => {
        if (index % 2 === 0 && arr[index] !== '') {
            let [name, def] = arr[index + 1].split('=');
            acc.push({ type: arr[index], name: name.replace(',', '').trim(), default: (def === null || def === void 0 ? void 0 : def.trim()) || null });
        }
        return acc;
    }, []);
    signature.push({ name, params });
    return signature;
}
function extractLastNestedListItem(element) {
    const lastItem = element.find('ul li').last().find('a').text().trim();
    return lastItem;
}
function generateEnumDeclaration(enums) {
    let enumDeclaration = '';
    enums.forEach((enumDef) => {
        enumDeclaration += `export enum ${enumDef.name} {\n`;
        enumDef.values.forEach((value, index) => {
            enumDeclaration += `  ${value}: ${index}\n`;
        });
        enumDeclaration += '}\n';
    });
    return enumDeclaration;
}
function generateClassDeclaration(classDef) {
    // Start with the class declaration
    let classDeclaration = `declare class ${classDef.className}`;
    const mapParameter = (param) => {
        return param.default === null
            ? `${param.name}: ${param.type} `
            : `${param.name}?: ${param.type} `;
    };
    // Add inheritance if there is any
    if (classDef.inherits) {
        classDeclaration += ` extends ${classDef.inherits} `;
    }
    classDeclaration += ' {\n';
    // Add properties
    if (classDef.properties.length > 0)
        classDeclaration += '  /* Properties */\n';
    classDef.properties.forEach(prop => {
        classDeclaration += `  ${prop.name}: ${prop.type}; \n`;
    });
    // Add constructors
    if (classDef.constructors.length > 0)
        classDeclaration += '\n  /* Constructors */\n';
    classDef.constructors.forEach(constructor => {
        const params = constructor.params.map(p => mapParameter(p)).join(', ');
        classDeclaration += `  cheerio.constructor(${params}); \n`;
    });
    // Add methods
    if (classDef.methods.length > 0)
        classDeclaration += '\n  /* Methods */\n';
    classDef.methods.forEach(method => {
        const params = method.params.map(p => mapParameter(p)).join(', ');
        classDeclaration += `  ${method.name} (${params}): ${method.return}; \n`;
    });
    // Add signals (if applicable)
    if (classDef.signals.length > 0)
        classDeclaration += '\n  /* Signals */\n';
    classDef.signals.forEach(signal => {
        const params = signal.params.map(p => mapParameter(p)).join(', ');
        classDeclaration += `  ${signal.name} (${params}): ${signal.return}; \n`;
    });
    // Close the class declaration
    classDeclaration += '}\n';
    return classDeclaration;
}
function typeToLowerCase(type) {
    switch (type) {
        case 'Number':
        case 'String':
        case 'Boolean':
            return type.toLowerCase();
        default:
            return type;
    }
}
fetchDzType('boxlayout_dz');
