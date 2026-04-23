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

  it('prefers the page heading over site chrome headings', () => {
    const html = `
<!DOCTYPE html>
<html>
<body>
  <h1></h1>
  <div class="page">
    <h1>DzRealPageClass</h1>
    <div class="level1">
      <p>Real page class.</p>
      <p><strong>Inherits :</strong></p>
      <ul><li><a>QObject</a></li></ul>
    </div>
  </div>
</body>
</html>`;

    const model = parseHtml(html);

    expect(model.className).toBe('DzRealPageClass');
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
  <h2>Properties</h2>
  <div class="level2"><table><tr><td>Mode</td><td><strong>currentMode</strong></td></tr></table></div>
  <h2>Static Methods</h2>
  <div class="level2"><table><tr><td>String</td><td><strong>makeName</strong>( Number count, Boolean simple=false )</td></tr></table></div>
  <h2>Methods</h2>
  <div class="level2"><table><tr><td>Mode</td><td><strong>getMode</strong>()</td></tr><tr><td>void</td><td><strong>setMode</strong>( Mode mode )</td></tr></table></div>
  <h2>Signals</h2>
  <div class="level2"><table><tr><td>void</td><td><strong>modeChanged</strong>( Mode mode )</td></tr></table></div>
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
    expect(model.enums.map(member => member.enumName)).toEqual(['Mode', 'Mode']);
    expect(model.properties[0].type.type).toBe('number');
    expect(model.properties[0].type.rawType).toBe('Mode');
    expect(model.staticMethods).toHaveLength(1);
    expect(model.staticMethods[0].name).toBe('makeName');
    expect(model.staticMethods[0].parameters[1].defaultValue).toBe('false');
    expect(model.staticMethods[0].description).toBe('Builds a name.');
    expect(model.methods[0].returnType.type).toBe('number');
    expect(model.methods[0].returnType.rawType).toBe('Mode');
    expect(model.methods[1].parameters[0].type.type).toBe('number');
    expect(model.methods[1].parameters[0].type.rawType).toBe('Mode');
    expect(model.signals[0].parameters[0].type.type).toBe('number');
    expect(model.signals[0].parameters[0].type.rawType).toBe('Mode');
  });

  it('treats red-linked lowercase DAZ slug types as undocumented any', () => {
    const html = `
<!-- @docurl https://docs.example.test/DzUndocumentedTypeHost -->
<!DOCTYPE html>
<html>
<body>
<div class="page">
  <h1>DzUndocumentedTypeHost</h1>
  <div class="level1">
    <p>Undocumented type test.</p>
    <p><strong>Inherits :</strong></p>
    <ul><li><a>QObject</a></li></ul>
  </div>
  <h2>Methods</h2>
  <div class="level2">
    <table>
      <tr><td><a class="wikilink2">cameracube_dz</a></td><td><strong>getCameraCube</strong>()</td></tr>
      <tr><td>void</td><td><strong>setCameraCube</strong>( cameracube_dz cube )</td></tr>
    </table>
  </div>
  <h2>Detailed Description</h2><div class="level2"></div>
</div>
</body>
</html>`;

    const model = parseHtml(html);

    expect(model.methods[0].returnType.type).toBe('any');
    expect(model.methods[0].returnType.rawType).toBe('cameracube_dz');
    expect(model.methods[0].returnType.undocumented).toBe(true);
    expect(model.methods[1].parameters[0].type.type).toBe('any');
    expect(model.methods[1].parameters[0].type.rawType).toBe('cameracube_dz');
    expect(model.methods[1].parameters[0].type.undocumented).toBe(true);
  });

  it('normalizes int and bool spellings to TypeScript primitives', () => {
    const html = `
<!-- @docurl https://docs.example.test/Image -->
<!DOCTYPE html>
<html>
<body>
<div class="page">
  <h1>Image</h1>
  <div class="level1"><p>Image test.</p></div>
  <h2>Methods</h2>
  <div class="level2">
    <table>
      <tr><td>Image</td><td><strong>mirror</strong>( bool horizontal, int x )</td></tr>
    </table>
  </div>
  <h2>Detailed Description</h2><div class="level2"></div>
</div>
</body>
</html>`;

    const model = parseHtml(html);

    expect(model.className).toBe('DzImage');
    expect(model.methods[0].returnType.type).toBe('DzImage');
    expect(model.methods[0].parameters[0].type.type).toBe('boolean');
    expect(model.methods[0].parameters[0].type.rawType).toBe('bool');
    expect(model.methods[0].parameters[1].type.type).toBe('number');
    expect(model.methods[0].parameters[1].type.rawType).toBe('int');
  });

  it('parses one-column constructor tables', () => {
    const html = `
<!-- @docurl https://docs.example.test/DzAppSettings -->
<!DOCTYPE html>
<html>
<body>
<div class="page">
  <h1>DzAppSettings</h1>
  <div class="level1">
    <p>Settings test.</p>
    <p><strong>Inherits :</strong></p>
    <ul><li><a>DzBase</a></li></ul>
  </div>
  <h2>Constructors</h2>
  <div class="level2">
    <table>
      <tr><td><strong>DzAppSettings</strong> <em>()</em></td></tr>
      <tr><td><strong>DzAppSettings</strong> <em>( String startPath )</em></td></tr>
    </table>
  </div>
  <h2>Detailed Description</h2><div class="level2"></div>
</div>
</body>
</html>`;

    const model = parseHtml(html);

    expect(model.constructors).toHaveLength(2);
    expect(model.constructors[0].parameters).toHaveLength(0);
    expect(model.constructors[1].parameters[0].name).toBe('startPath');
    expect(model.constructors[1].parameters[0].type.type).toBe('string');
  });

  it('renames reserved parameter names while preserving descriptions', () => {
    const html = `
<!-- @docurl https://docs.example.test/DzScript -->
<!DOCTYPE html>
<html>
<body>
<div class="page">
  <h1>DzScript</h1>
  <div class="level1">
    <p>Script class.</p>
    <p><strong>Inherits :</strong></p>
    <ul><li><a>DzBase</a></li></ul>
  </div>
  <h2>Methods</h2>
  <div class="level2">
    <table>
      <tr><td>Boolean</td><td><strong>call</strong>( String function, Array args )</td></tr>
    </table>
  </div>
  <h2>Detailed Description</h2><div class="level2"></div>
  <h3>Methods</h3>
  <div class="level3">
    <hr/>
    <p>Boolean : <strong><a name="call">call</a></strong>( String function, Array args )</p>
    <p>Calls a function in the script.</p>
    <p><strong>Parameter(s):</strong></p>
    <ul>
      <li><em>function</em> - The name of the function to call.</li>
      <li><em>args</em> - A list of arguments to pass to the function.</li>
    </ul>
  </div>
</div>
</body>
</html>`;

    const model = parseHtml(html);

    expect(model.methods[0].parameters[0].name).toBe('func');
    expect(model.methods[0].parameters[0].description).toBe('The name of the function to call.');
    expect(model.methods[0].parameters[1].name).toBe('args');
  });

  it('keeps duplicate documented signals so rebuild can merge them later', () => {
    const html = `
<!-- @docurl https://docs.example.test/DzListView -->
<!DOCTYPE html>
<html>
<body>
<div class="page">
  <h1>DzListView</h1>
  <div class="level1">
    <p>List view.</p>
    <p><strong>Inherits :</strong></p>
    <ul><li><a>DzWidget</a></li></ul>
  </div>
  <h2>Signals</h2>
  <div class="level2">
    <table>
      <tr><td>void</td><td><strong>itemRenamed</strong>( DzListViewItem item, Number col, String text )</td></tr>
      <tr><td>void</td><td><strong>itemRenamed</strong>( DzListViewItem item, Number col )</td></tr>
    </table>
  </div>
  <h2>Detailed Description</h2><div class="level2"></div>
</div>
</body>
</html>`;

    const model = parseHtml(html);

    expect(model.signals.filter(signal => signal.name === 'itemRenamed')).toHaveLength(2);
  });

  it('strips deprecated labels from class names and inheritance types', () => {
    const html = `
<!-- @docurl https://docs.example.test/DzRotateManip -->
<!DOCTYPE html>
<html>
<body>
<div class="page">
  <h1>DzRotateManip (deprecated)</h1>
  <div class="level1">
    <p>Rotate manip summary. (deprecated).</p>
    <p><strong>Inherits :</strong></p>
    <ul><li><a>DzImageManip (deprecated)</a></li></ul>
  </div>
  <h2>Methods</h2>
  <div class="level2"><table><tr><td>void</td><td><strong>setRotation</strong>( Number rot )</td></tr></table></div>
  <h2>Detailed Description</h2><div class="level2"></div>
</div>
</body>
</html>`;

    const model = parseHtml(html);

    expect(model.className).toBe('DzRotateManip');
    expect(model.extendsName).toBe('DzImageManip');
    expect(model.summary).toBe('Rotate manip summary. (deprecated).');
  });
});
