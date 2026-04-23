import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { afterEach, describe, expect, it } from 'vitest';
import { runSyncHtml } from '../sync/syncHtml';

const createdDirs: string[] = [];

function makeTempDir(): string {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'daz-sync-html-'));
    createdDirs.push(dir);
    return dir;
}

afterEach(() => {
    while (createdDirs.length > 0) {
        const dir = createdDirs.pop();
        if (dir && fs.existsSync(dir)) {
            fs.rmSync(dir, { recursive: true, force: true });
        }
    }
});

describe('runSyncHtml', () => {
    it('rebuilds mapped files, skips helpers, and reports summary', async () => {
        const root = makeTempDir();
        const typesDir = path.join(root, 'types');
        const htmlDir = path.join(root, 'html');
        fs.mkdirSync(typesDir, { recursive: true });
        fs.mkdirSync(htmlDir, { recursive: true });

        fs.writeFileSync(path.join(typesDir, 'dz_signals.d.ts'), 'interface ISignal {}', 'utf-8');
        fs.writeFileSync(
            path.join(typesDir, 'dz_testClass.d.ts'),
            `/**
 * old
 */
declare class DzTestClass extends DzWrongParent {
    count: QString;
    shared(): void;
    legacyOnly(flag: boolean): void;
}
`,
            'utf-8'
        );
        fs.writeFileSync(
            path.join(typesDir, 'dz_parent.d.ts'),
            'declare class DzParent extends QObject {\n    shared(): void;\n}\n',
            'utf-8'
        );
        fs.writeFileSync(path.join(htmlDir, 'testclass_dz.html'), `
<!-- @docurl https://docs.example.test/DzTestClass -->
<!DOCTYPE html>
<html>
<body>
<div class="page">
  <h1>DzTestClass</h1>
  <div class="level1">
    <p>Rebuilt from HTML.</p>
    <p><strong>Inherits :</strong></p>
    <ul><li><a>QObject</a><ul><li><a>DzParent</a></li></ul></li></ul>
  </div>
  <h2>Properties</h2>
  <div class="level2"><table><tr><td>Number</td><td><strong>count</strong></td></tr></table></div>
  <h2>Methods</h2>
  <div class="level2"><table><tr><td>void</td><td><strong>shared</strong>()</td></tr><tr><td>String</td><td><strong>ownMethod</strong>()</td></tr></table></div>
  <h2>Detailed Description</h2><div class="level2"></div>
  <h3>Properties</h3><div class="level3"><hr/><p>Number : <strong><a name="count">count</a></strong></p><p>The count.</p></div>
  <h3>Methods</h3><div class="level3"><hr/><p>void : <strong><a name="shared">shared</a></strong>()</p><p>Shared method.</p><hr/><p>String : <strong><a name="ownMethod">ownMethod</a></strong>()</p><p>Own method.</p><p><strong>Return Value:</strong></p><ul><li>The value.</li></ul></div>
</div>
</body>
</html>`, 'utf-8');

        const summary = await runSyncHtml(typesDir, htmlDir);
        const rebuilt = fs.readFileSync(path.join(typesDir, 'dz_testClass.d.ts'), 'utf-8');

        expect(rebuilt).toContain('declare class DzTestClass extends DzParent {');
        expect(rebuilt).toContain('@docurl https://docs.example.test/DzTestClass');
        expect(rebuilt).toContain('count: number; // Number');
        expect(rebuilt).toContain('ownMethod(): string;');
        expect(rebuilt).toContain('legacyOnly(flag: boolean): void;');
        expect(rebuilt).not.toContain('shared(): void;');
        expect(summary).toContain('Rebuilt files: 1');
        expect(summary).toContain('Recovered legacy members: 1');
        expect(summary).toContain('dz_signals.d.ts: special-case support file');
    });

    it('can target a single type', async () => {
        const root = makeTempDir();
        const typesDir = path.join(root, 'types');
        const htmlDir = path.join(root, 'html');
        fs.mkdirSync(typesDir, { recursive: true });
        fs.mkdirSync(htmlDir, { recursive: true });

        fs.writeFileSync(
            path.join(typesDir, 'dz_alpha.d.ts'),
            'declare class DzAlpha extends QObject {\n    oldAlpha(): void;\n}\n',
            'utf-8'
        );
        fs.writeFileSync(
            path.join(typesDir, 'dz_beta.d.ts'),
            'declare class DzBeta extends QObject {\n    oldBeta(): void;\n}\n',
            'utf-8'
        );

        fs.writeFileSync(path.join(htmlDir, 'alpha_dz.html'), `
<!-- @docurl https://docs.example.test/DzAlpha -->
<!DOCTYPE html>
<html><body><div class="page">
<h1>DzAlpha</h1>
<div class="level1"><p>Alpha summary.</p><p><strong>Inherits :</strong></p><ul><li><a>QObject</a></li></ul></div>
<h2>Methods</h2><div class="level2"><table><tr><td>void</td><td><strong>alphaMethod</strong>()</td></tr></table></div>
<h2>Detailed Description</h2><div class="level2"></div>
<h3>Methods</h3><div class="level3"><hr/><p>void : <strong><a name="alphaMethod">alphaMethod</a></strong>()</p><p>Alpha method.</p></div>
</div></body></html>`, 'utf-8');
        fs.writeFileSync(path.join(htmlDir, 'beta_dz.html'), `
<!-- @docurl https://docs.example.test/DzBeta -->
<!DOCTYPE html>
<html><body><div class="page">
<h1>DzBeta</h1>
<div class="level1"><p>Beta summary.</p><p><strong>Inherits :</strong></p><ul><li><a>QObject</a></li></ul></div>
<h2>Methods</h2><div class="level2"><table><tr><td>void</td><td><strong>betaMethod</strong>()</td></tr></table></div>
<h2>Detailed Description</h2><div class="level2"></div>
<h3>Methods</h3><div class="level3"><hr/><p>void : <strong><a name="betaMethod">betaMethod</a></strong>()</p><p>Beta method.</p></div>
</div></body></html>`, 'utf-8');

        const summary = await runSyncHtml(typesDir, htmlDir, { targetType: 'DzAlpha' });
        const alpha = fs.readFileSync(path.join(typesDir, 'dz_alpha.d.ts'), 'utf-8');
        const beta = fs.readFileSync(path.join(typesDir, 'dz_beta.d.ts'), 'utf-8');

        expect(summary).toContain('Files scanned: 1');
        expect(summary).toContain('Eligible files: 1');
        expect(summary).toContain('Rebuilt files: 1');
        expect(alpha).toContain('@docurl https://docs.example.test/DzAlpha');
        expect(alpha).toContain('alphaMethod(): void;');
        expect(beta).toContain('oldBeta(): void;');
    });

    it('creates a missing Dz type file from matching HTML', async () => {
        const root = makeTempDir();
        const typesDir = path.join(root, 'types');
        const htmlDir = path.join(root, 'html');
        fs.mkdirSync(typesDir, { recursive: true });
        fs.mkdirSync(htmlDir, { recursive: true });

        fs.writeFileSync(
            path.join(typesDir, 'dz_parent.d.ts'),
            'declare class DzParent extends QObject {\n}\n',
            'utf-8'
        );
        fs.writeFileSync(path.join(htmlDir, 'newtype_dz.html'), `
<!-- @docurl https://docs.example.test/DzNewType -->
<!DOCTYPE html>
<html><body><div class="page">
<h1>DzNewType</h1>
<div class="level1"><p>New type summary.</p><p><strong>Inherits :</strong></p><ul><li><a>QObject</a><ul><li><a>DzParent</a></li></ul></li></ul></div>
<h2>Methods</h2><div class="level2"><table><tr><td>void</td><td><strong>newMethod</strong>()</td></tr></table></div>
<h2>Detailed Description</h2><div class="level2"></div>
<h3>Methods</h3><div class="level3"><hr/><p>void : <strong><a name="newMethod">newMethod</a></strong>()</p><p>New method.</p></div>
</div></body></html>`, 'utf-8');

        const summary = await runSyncHtml(typesDir, htmlDir);
        const createdPath = path.join(typesDir, 'dz_newType.d.ts');

        expect(fs.existsSync(createdPath)).toBe(true);
        expect(fs.readFileSync(createdPath, 'utf-8')).toContain('declare class DzNewType extends DzParent {');
        expect(fs.readFileSync(createdPath, 'utf-8')).toContain('newMethod(): void;');
        expect(summary).toContain('Eligible files: 1');
        expect(summary).toContain('Rebuilt files: 1');
    });

    it('creates a missing renamed type file from matching HTML and rewrites references', async () => {
        const root = makeTempDir();
        const typesDir = path.join(root, 'types');
        const htmlDir = path.join(root, 'html');
        fs.mkdirSync(typesDir, { recursive: true });
        fs.mkdirSync(htmlDir, { recursive: true });

        fs.writeFileSync(path.join(htmlDir, 'image.html'), `
<!-- @docurl https://docs.example.test/Image -->
<!DOCTYPE html>
<html><body><div class="page">
<h1>Image</h1>
<div class="level1"><p>Image built-in.</p></div>
<h2>Methods</h2><div class="level2"><table><tr><td>Number</td><td><strong>width</strong>()</td></tr><tr><td>Image</td><td><strong>copy</strong>( Image other )</td></tr></table></div>
<h2>Detailed Description</h2><div class="level2"></div>
<h3>Methods</h3><div class="level3"><hr/><p>Number : <strong><a name="width">width</a></strong>()</p><p>Gets width.</p><hr/><p>Image : <strong><a name="copy">copy</a></strong>( Image other )</p><p>Copies image.</p></div>
</div></body></html>`, 'utf-8');

        const summary = await runSyncHtml(typesDir, htmlDir, { targetType: 'Image' });
        const createdPath = path.join(typesDir, 'dz_image.d.ts');

        expect(fs.existsSync(createdPath)).toBe(true);
        expect(fs.readFileSync(createdPath, 'utf-8')).toContain('declare class DzImage {');
        expect(fs.readFileSync(createdPath, 'utf-8')).toContain('width(): number; // Number');
        expect(fs.readFileSync(createdPath, 'utf-8')).toContain('copy(other: DzImage): DzImage;');
        expect(summary).toContain('Files scanned: 0');
        expect(summary).toContain('Eligible files: 1');
        expect(summary).toContain('Rebuilt files: 1');
    });

    it('can replace an existing file without recovering legacy members', async () => {
        const root = makeTempDir();
        const typesDir = path.join(root, 'types');
        const htmlDir = path.join(root, 'html');
        fs.mkdirSync(typesDir, { recursive: true });
        fs.mkdirSync(htmlDir, { recursive: true });

        fs.writeFileSync(
            path.join(typesDir, 'dz_testClass.d.ts'),
            `declare class DzTestClass extends QObject {
    ownMethod(): string;
    legacyOnly(flag: boolean): void;
}
`,
            'utf-8'
        );
        fs.writeFileSync(path.join(htmlDir, 'testclass_dz.html'), `
<!-- @docurl https://docs.example.test/DzTestClass -->
<!DOCTYPE html>
<html>
<body>
<div class="page">
  <h1>DzTestClass</h1>
  <div class="level1">
    <p>Rebuilt from HTML.</p>
    <p><strong>Inherits :</strong></p>
    <ul><li><a>QObject</a></li></ul>
  </div>
  <h2>Methods</h2>
  <div class="level2"><table><tr><td>String</td><td><strong>ownMethod</strong>()</td></tr></table></div>
  <h2>Detailed Description</h2><div class="level2"></div>
  <h3>Methods</h3><div class="level3"><hr/><p>String : <strong><a name="ownMethod">ownMethod</a></strong>()</p><p>Own method.</p><p><strong>Return Value:</strong></p><ul><li>The value.</li></ul></div>
</div>
</body>
</html>`, 'utf-8');

        const summary = await runSyncHtml(typesDir, htmlDir, { targetType: 'DzTestClass', replace: true });
        const rebuilt = fs.readFileSync(path.join(typesDir, 'dz_testClass.d.ts'), 'utf-8');

        expect(rebuilt).toContain('ownMethod(): string;');
        expect(rebuilt).not.toContain('legacyOnly(flag: boolean): void;');
        expect(summary).toContain('Recovered legacy members: 0');
    });

    it('can replace an existing file even when it has unsafe top-level content', async () => {
        const root = makeTempDir();
        const typesDir = path.join(root, 'types');
        const htmlDir = path.join(root, 'html');
        fs.mkdirSync(typesDir, { recursive: true });
        fs.mkdirSync(htmlDir, { recursive: true });

        fs.writeFileSync(
            path.join(typesDir, 'dz_testClass.d.ts'),
            `const unsafe = true;
declare class DzTestClass extends QObject {
    legacyOnly(flag: boolean): void;
}
`,
            'utf-8'
        );
        fs.writeFileSync(path.join(htmlDir, 'testclass_dz.html'), `
<!-- @docurl https://docs.example.test/DzTestClass -->
<!DOCTYPE html>
<html>
<body>
<div class="page">
  <h1>DzTestClass</h1>
  <div class="level1">
    <p>Replaced from HTML.</p>
    <p><strong>Inherits :</strong></p>
    <ul><li><a>QObject</a></li></ul>
  </div>
  <h2>Methods</h2>
  <div class="level2"><table><tr><td>void</td><td><strong>freshMethod</strong>()</td></tr></table></div>
  <h2>Detailed Description</h2><div class="level2"></div>
  <h3>Methods</h3><div class="level3"><hr/><p>void : <strong><a name="freshMethod">freshMethod</a></strong>()</p><p>Fresh method.</p></div>
</div>
</body>
</html>`, 'utf-8');

        const summary = await runSyncHtml(typesDir, htmlDir, { targetType: 'DzTestClass', replace: true });
        const rebuilt = fs.readFileSync(path.join(typesDir, 'dz_testClass.d.ts'), 'utf-8');

        expect(rebuilt).toContain('freshMethod(): void;');
        expect(rebuilt).not.toContain('legacyOnly(flag: boolean): void;');
        expect(summary).toContain('Rebuilt files: 1');
        expect(summary).not.toContain('unsafe top-level content in existing file');
    });
});
