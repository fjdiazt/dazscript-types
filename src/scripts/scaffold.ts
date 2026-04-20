import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';
import * as cheerio from 'cheerio';

const INDEX_URL =
    'https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/start';
const BASE_URL =
    'https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index';

async function main() {
    const targetDir = process.argv[2] ?? 'src/types/daz';

    console.log(`Fetching index: ${INDEX_URL}`);
    const { data: html } = await axios.get(INDEX_URL);
    const $ = cheerio.load(html);

    const entries: { className: string; deprecated: boolean; docUrl: string }[] = [];

    $('a[href]').each((_, el) => {
        const href = $(el).attr('href') ?? '';
        const rawName = $(el).text().trim();

        if (!rawName.startsWith('Dz')) return;
        if (!href.includes('object_index/')) return;

        const slug = href.split('object_index/')[1].replace(/\/$/, '');
        if (!slug) return;

        // Strip annotations like " (deprecated)" from the display name
        const deprecated = /\(deprecated\)/i.test(rawName);
        const className = rawName.replace(/\s*\(.*\)\s*$/, '').trim();

        const docUrl = `${BASE_URL}/${slug}`;
        entries.push({ className, deprecated, docUrl });
    });

    console.log(`Found ${entries.length} Dz classes in index\n`);

    let created = 0;
    let updated = 0;
    let skipped = 0;

    for (const { className, deprecated, docUrl } of entries) {
        const suffix = className.slice(2);
        const filename = 'dz_' + suffix[0].toLowerCase() + suffix.slice(1) + '.d.ts';
        const filePath = path.join(targetDir, filename);
        const deprecatedTag = deprecated ? ' * @deprecated\n' : '';
        const docJSDoc = `/**\n * @docurl ${docUrl}\n${deprecatedTag} */\n`;

        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, `${docJSDoc}declare class ${className} {\n}\n`, 'utf-8');
            console.log(`  + Created: ${filename}`);
            created++;
        } else {
            const content = fs.readFileSync(filePath, 'utf-8');
            if (content.includes('@docurl')) {
                skipped++;
            } else {
                const updatedContent = content.replace(/(declare class )/, `${docJSDoc}$1`);
                fs.writeFileSync(filePath, updatedContent, 'utf-8');
                console.log(`  ^ Updated: ${filename}`);
                updated++;
            }
        }
    }

    console.log(`\nDone — created: ${created}, updated: ${updated}, skipped: ${skipped}`);
}

main().catch(console.error);
