import * as path from 'path';
import { describe, expect, it } from 'vitest';
import { parseHtml, parseHtmlFile } from '../sync/htmlParser';

const FIXTURE_PATH = path.join(__dirname, 'fixtures', 'DzTestClass.html');

describe('htmlParser', () => {
  it('parses the existing fixture html', () => {
    const model = parseHtmlFile(FIXTURE_PATH);
    expect(model.className).toBe('DzTestClass');
    expect(model.docUrl).toBe('https://docs.example.test/DzTestClass');
    expect(model.summary).toBe('Base class for testing the doc parser pipeline.');
    expect(model.extendsName).toBe('DzElement');
    expect(model.properties.map(member => member.name)).toContain('label');
    expect(model.methods.map(member => member.name)).toContain('setLabel');
    expect(model.signals.map(member => member.name)).toContain('labelChanged');
  });

  it('parses properties, methods, docs, and signal signatures', () => {
    const model = parseHtmlFile(FIXTURE_PATH);
    const label = model.properties.find(member => member.name === 'label');
    const setLabel = model.methods.find(member => member.name === 'setLabel');
    const overloaded = model.methods.filter(member => member.name === 'overloaded');
    const signal = model.signals.find(member => member.name === 'labelChanged');

    expect(label?.type.type).toBe('string');
    expect(label?.description).toBe('The display label for the object.');
    expect(label?.since).toBe('4.5.0.0');
    expect(setLabel?.parameters[0].type.type).toBe('string');
    expect(setLabel?.parameters[0].description).toBe('The new label to assign.');
    expect(setLabel?.since).toBe('4.6.0.0');
    expect(overloaded).toHaveLength(2);
    expect(signal?.description).toBe('Emitted when the label changes.');
    expect(signal?.parameters[0].type.type).toBe('string');
  });

  it('parses enumerations and static methods from a synthetic fixture', () => {
    const html = `
<!-- @docurl https://docs.example.test/DzStaticTest -->
<!DOCTYPE html>
<html>
<body>
<div class="page">
  <h1>DzStaticTest</h1>
  <div class="level1">
    <p>Static parser test.</p>
    <p><strong>Inherits :</strong></p>
    <ul><li><a>QObject</a></li></ul>
  </div>
  <h2>Enumerations</h2>
  <div class="level2"><table><tr><td>Mode</td><td><strong><a>Foo</a>, <a>Bar</a></strong></td></tr></table></div>
  <h2>Static Methods</h2>
  <div class="level2"><table><tr><td>String</td><td><strong>makeName</strong>( Number count, Boolean simple=false )</td></tr></table></div>
  <h2>Detailed Description</h2><div class="level2"></div>
  <h3>Static Methods</h3>
  <div class="level3">
    <hr/>
    <p>String : <strong><a name="makeName">makeName</a></strong>( Number count, Boolean simple=false )</p>
    <p>Builds a name.</p>
    <p><strong>Parameter(s):</strong></p>
    <ul><li><em>count</em> - Item count.</li><li><em>simple</em> - Use a short label.</li></ul>
    <p><strong>Return Value:</strong></p>
    <ul><li>A generated name.</li></ul>
  </div>
</div>
</body>
</html>`;
    const model = parseHtml(html);
    expect(model.docUrl).toBe('https://docs.example.test/DzStaticTest');
    expect(model.enums.map(member => member.name)).toEqual(['Foo', 'Bar']);
    expect(model.staticMethods).toHaveLength(1);
    expect(model.staticMethods[0].name).toBe('makeName');
    expect(model.staticMethods[0].parameters[1].defaultValue).toBe('false');
    expect(model.staticMethods[0].description).toBe('Builds a name.');
  });
});
