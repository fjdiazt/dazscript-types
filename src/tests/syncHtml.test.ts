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
        expect(rebuilt).toContain('count: number; // Number');
        expect(rebuilt).toContain('ownMethod(): string;');
        expect(rebuilt).toContain('legacyOnly(flag: boolean): void;');
        expect(rebuilt).not.toContain('shared(): void;');
        expect(summary).toContain('Rebuilt files: 1');
        expect(summary).toContain('Recovered legacy members: 1');
        expect(summary).toContain('dz_signals.d.ts: special-case support file');
    });
});
