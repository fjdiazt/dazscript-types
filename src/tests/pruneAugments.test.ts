import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { afterEach, describe, expect, it } from 'vitest';
import { runPruneAugments } from '../sync/pruneAugments';

const createdDirs: string[] = [];

function makeTempDir(): string {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'daz-prune-augments-'));
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

describe('runPruneAugments', () => {
    it('removes augment members already inherited in final generated types', () => {
        const root = makeTempDir();
        const typesRoot = path.join(root, 'types');
        const dazDir = path.join(typesRoot, 'daz');
        const qtDir = path.join(typesRoot, 'qt');
        const augmentDir = path.join(root, 'augments');
        fs.mkdirSync(dazDir, { recursive: true });
        fs.mkdirSync(qtDir, { recursive: true });
        fs.mkdirSync(augmentDir, { recursive: true });

        fs.writeFileSync(
            path.join(qtDir, 'qt_object.d.ts'),
            `declare class QObject {
    deleteLater(): void;
}
`,
            'utf-8'
        );
        fs.writeFileSync(
            path.join(dazDir, 'dz_base.d.ts'),
            `declare class DzBase extends QObject {
}
`,
            'utf-8'
        );
        fs.writeFileSync(
            path.join(dazDir, 'dz_fileIO.d.ts'),
            `declare class DzFileIO extends DzBase {
}
`,
            'utf-8'
        );
        fs.writeFileSync(
            path.join(dazDir, 'dz_assetIOFilter.d.ts'),
            `declare class DzAssetIOFilter extends DzFileIO {
    doSave(filename: string): void;
}
`,
            'utf-8'
        );
        fs.writeFileSync(
            path.join(augmentDir, 'dz_assetIOFilter.json'),
            JSON.stringify({
                className: 'DzAssetIOFilter',
                members: [
                    { name: 'deleteLater', signature: 'deleteLater(): void;', kind: 'method', paramCount: 0 },
                    { name: 'getOptions', signature: 'getOptions(): boolean;', kind: 'method', paramCount: 0 },
                ],
            }, null, 2),
            'utf-8'
        );

        const summary = runPruneAugments(typesRoot, augmentDir);
        const augment = JSON.parse(fs.readFileSync(path.join(augmentDir, 'dz_assetIOFilter.json'), 'utf-8')) as {
            className: string;
            members: Array<{ name: string }>;
        };

        expect(augment.className).toBe('DzAssetIOFilter');
        expect(augment.members).toHaveLength(1);
        expect(augment.members[0]?.name).toBe('getOptions');
        expect(summary).toContain('removed deleteLater');
    });
});
