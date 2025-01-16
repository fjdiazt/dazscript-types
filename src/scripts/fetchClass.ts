import axios from 'axios';
import * as cheerio from 'cheerio';

const baseUrl = 'http://docs.daz3d.com/doku.php/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/';

enum DzTypes {
  SceneHelper = 'scenehelper_dz',
  FloatSlider = 'floatslider_dz',
}

class ClassDefinition {
  className: string = '';
  enumerations: { name: string, values: string[] }[] = [];
  constructors: { name: string, params: { type: string, name: string, default: string | null }[] }[] = [];
  properties: { name: string; type: string }[] = [];
  methods: { name: string, return: string, params: { type: string, name: string, default: string | null }[] }[] = [];
  signals: { name: string, return: string, params: { type: string, name: string, default: string | null }[] }[] = [];
  inherits: string | null = null;
}

async function fetchDzType(type: string): Promise<void> {
  try {
    // Fetch the HTML content from the URL
    const url = `${baseUrl}${type}`;
    console.log(`fetching ${url}`);
    const response = await axios.get(url);
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
  } catch (error) {
    console.error('Error fetching or parsing HTML:', error);
  }
}
function getClassName($: cheerio.Root): string {
  return $('.breadcrumbs .curid a').text().trim() || 'UnnamedClass';
}

function getInherits($: cheerio.Root): string | null {
  const inherits = $('strong:contains("Inherits :")')
  if (!inherits) return null;
  return extractLastNestedListItem(inherits.parent().next())
}

function getProperties($: cheerio.Root): { name: string; type: string }[] {
  const data: { [key: string]: string } = {};

  const propertyHeader = $('div#dokuwiki__content #properties').first();
  const rows = propertyHeader.next().find('tbody tr');

  rows.each((_, row) => {
    const columns = $(row).find('td');

    if (columns.length === 2) {
      const key = $(columns[1]).find('a').text().trim();
      const value = $(columns[0]).find('a').text().trim();
      data[key] = getValidType(value);
    }
  });

  return Object.keys(data).map(key => ({
    name: key,
    type: data[key]
  }));
}

function getEnumerations($: cheerio.Root): { name: string, values: string[] }[] {
  const data: { name: string, values: string[] }[] = []

  $('div#dokuwiki__content #enumerations')
    .first()
    .next()
    .find('tbody tr')
    .each((_, row) => {
      const name = $(row).find('td').first().text().trim();
      const values = $(row).find('td').last().text().replace('{', '').replace('}', '').split(',').map(value => value.trim());

      data.push({ name, values });
    })

  return data;
}

function getConstructors($: cheerio.Root): { name: string, params: { type: string, name: string, default: string | null }[] }[] {
  const data: { name: string, params: { type: string, name: string, default: string | null }[] }[] = [];

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

function getMethods($: cheerio.Root): { name: string, return: string, params: { type: string, name: string, default: string | null }[] }[] {
  const data: { name: string, return: string, params: { type: string, name: string, default: string | null }[] }[] = [];

  $('div#dokuwiki__content #methods')
    .first()
    .next()
    .find('tbody tr')
    .each((_, row) => {
      getMethodSignature($, row).forEach((signature) => {
        let returnType = $(row).find('td').first().text().trim();
        data.push({
          ...signature,
          return: getValidType(returnType)
        });
      });
    });

  return data;
}

function getSignals($: cheerio.Root): { name: string, return: string, params: { type: string, name: string, default: string | null }[] }[] {
  const data: { name: string, return: string, params: { type: string, name: string, default: string | null }[] }[] = [];

  $('div#dokuwiki__content #signals')
    .first()
    .next()
    .find('tbody tr')
    .each((_, row) => {
      getMethodSignature($, row).forEach((signature) => {
        let returnType = $(row).find('td').first().text().trim();
        data.push({
          ...signature,
          return: getValidType(returnType)
        });
      });
    });

  return data;
}

function getMethodSignature($: cheerio.Root, element: cheerio.Element): { name: string, params: { type: string, name: string, default: string | null }[] }[] {
  const signature: { name: string, params: { type: string, name: string, default: string | null }[] }[] = [];

  const result: string[] = [];
  const name = $(element).find('strong').first().text().trim();

  // Gather all relevant text and <a> values from the row
  $(element).find('em').contents()
    .filter((_, element) => element.type === 'text' ? element.data!.trim() !== "(" && element.data!.trim() !== ")" : true)
    .each((_, element) => {

      let params = element.type === 'text'
        ? element.data!.replace('(', '').replace(')', '').trim()
        : $(element).text().replace('(', '').replace(')', '').trim()

      result.push(getValidType(params));
    });

  // Group them in pairs (type, param)
  const params = result.reduce<{ type: string, name: string, default: string | null }[]>((acc, _, index, arr) => {
    if (index % 2 === 0 && arr[index] !== '') {
      let [name, def] = arr[index + 1].split('=');
      acc.push({ type: arr[index], name: name.replace(',', '').trim(), default: def?.trim() || null });
    }
    return acc;
  }, []);

  signature.push({ name, params });

  return signature;
}

function extractLastNestedListItem(element: cheerio.Cheerio) {
  const lastItem = element.find('ul li').last().find('a').text().trim();
  return lastItem;
}

function generateEnumDeclaration(enums: { name: string, values: string[] }[]): string {
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

function generateClassDeclaration(classDef: ClassDefinition): string {
  // Start with the class declaration
  let classDeclaration = `declare class ${classDef.className}`;

  const mapParameter = (param: { type: string, name: string, default: string | null }) => {
    return param.default === null
      ? `${param.name}: ${param.type} `
      : `${param.name}?: ${param.type} `;
  }

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
    classDeclaration += `  constructor(${params}); \n`;
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

function getValidType(type: string): string {
  switch (type) {
    case 'Number':
    case 'String':
    case 'Boolean':
      return type.toLowerCase();
    case 'Array':
      return 'any[]';
    default:
      return type;
  }
}

fetchDzType(DzTypes.SceneHelper);
