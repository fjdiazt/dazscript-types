import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { afterEach, describe, expect, it } from 'vitest';
import { runExtractAugments } from '../sync/extractAugments';

const createdDirs: string[] = [];

function makeTempDir(): string {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'daz-extract-augments-'));
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

describe('runExtractAugments', () => {
    it('imports only legacy names absent from class HTML and HTML ancestry', () => {
        const root = makeTempDir();
        const legacyTypesDir = path.join(root, 'types');
        const htmlDir = path.join(root, 'html');
        const htmlModelsDir = path.join(root, '.generated', 'html-models');
        const augmentDir = path.join(root, 'augments');
        fs.mkdirSync(legacyTypesDir, { recursive: true });
        fs.mkdirSync(htmlDir, { recursive: true });

        fs.writeFileSync(
            path.join(legacyTypesDir, 'dz_parent.d.ts'),
            `declare class DzParent extends QObject {
    inheritedOnly(): void;
}
`,
            'utf-8'
        );
        fs.writeFileSync(
            path.join(legacyTypesDir, 'dz_child.d.ts'),
            `declare class DzChild extends DzParent {
    shared(): void;
    inheritedOnly(): void;
    undocumentedOnly(flag: boolean): void;
}
`,
            'utf-8'
        );
        fs.writeFileSync(path.join(htmlDir, 'parent_dz.html'), `
<!-- @docurl https://docs.example.test/DzParent -->
<!DOCTYPE html>
<html><body><div class="page">
<h1>DzParent</h1>
<div class="level1"><p>Parent.</p><p><strong>Inherits :</strong></p><ul><li><a>QObject</a></li></ul></div>
<h2>Methods</h2><div class="level2"><table><tr><td>void</td><td><strong>inheritedOnly</strong>()</td></tr></table></div>
<h2>Detailed Description</h2><div class="level2"></div>
<h3>Methods</h3><div class="level3"><hr/><p>void : <strong><a name="inheritedOnly">inheritedOnly</a></strong>()</p><p>Inherited method.</p></div>
</div></body></html>`, 'utf-8');
        fs.writeFileSync(path.join(htmlDir, 'child_dz.html'), `
<!-- @docurl https://docs.example.test/DzChild -->
<!DOCTYPE html>
<html><body><div class="page">
<h1>DzChild</h1>
<div class="level1"><p>Child.</p><p><strong>Inherits :</strong></p><ul><li><a>QObject</a><ul><li><a>DzParent</a></li></ul></li></ul></div>
<h2>Methods</h2><div class="level2"><table><tr><td>void</td><td><strong>shared</strong>()</td></tr></table></div>
<h2>Detailed Description</h2><div class="level2"></div>
<h3>Methods</h3><div class="level3"><hr/><p>void : <strong><a name="shared">shared</a></strong>()</p><p>Shared method.</p></div>
</div></body></html>`, 'utf-8');

        const summary = runExtractAugments(legacyTypesDir, htmlDir, htmlModelsDir, augmentDir);
        const augmentPath = path.join(augmentDir, 'dz_child.json');
        const augment = JSON.parse(fs.readFileSync(augmentPath, 'utf-8')) as {
            className: string;
            members: Array<{ name: string; signature: string }>;
        };

        expect(augment.className).toBe('DzChild');
        expect(augment.members).toHaveLength(1);
        expect(augment.members[0]?.name).toBe('undocumentedOnly');
        expect(augment.members[0]?.signature).toBe('undocumentedOnly(flag: boolean): void;');
        expect(summary).toContain('skipped shared (documented in class HTML)');
        expect(summary).toContain('skipped inheritedOnly (documented in HTML ancestry)');
    });
});
