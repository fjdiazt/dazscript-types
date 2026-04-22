#!/usr/bin/env node
/**
 * daz_scraper.mjs
 * Scrapes all dz* pages from the DAZ Studio scripting API object index.
 * Usage:  node daz_scraper.mjs [output-dir]
 * Output dir defaults to ./daz_api_html
 *
 * Node 18+ (built-in fetch).  For older Node: npm i node-fetch and uncomment the import below.
 */

// import fetch from 'node-fetch'; // <- uncomment for Node < 18

import fs   from 'fs/promises';
import path from 'path';

const INDEX_URL = 'https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/start';
const BASE_URL  = 'https://docs.daz3d.com';
const OUT_DIR   = process.argv[2] ?? './daz_api_html';

// Only grab hrefs that end with /object_index/dz<something>
const DZ_RE = /\/object_index\/dz[^"'\s]*/i;

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; daz-scraper/1.0)' }
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

function extractDzLinks(html) {
  const seen = new Set();

  // Match only hrefs whose path ends with _dz (the Dz* class slugs).
  // Anchoring on the _dz suffix avoids sidebar nav, breadcrumbs,
  // and non-Dz built-ins like Array, Color, QObject, Boolean, etc.
  const re = /href="([^"]*\/object_index\/[a-z0-9]+_dz)"/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const href  = m[1];
    const full  = href.startsWith('http') ? href : BASE_URL + href;
    const clean = full.split('?')[0].split('#')[0];
    seen.add(clean);
  }
  return [...seen].sort();
}

function urlToFilename(url) {
  // e.g. .../object_index/dznode  ->  dznode.html
  const slug = url.split('/').pop() || 'index';
  return slug.endsWith('.html') ? slug : slug + '.html';
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  console.log(`Fetching index: ${INDEX_URL}`);
  const indexHtml = await fetchHtml(INDEX_URL);
  const links = extractDzLinks(indexHtml);

  if (links.length === 0) {
    console.error('No _dz links found — page structure may have changed.');
    process.exit(1);
  }

  console.log(`Found ${links.length} Dz* entries. Saving to ${OUT_DIR}/\n`);

  // Save the index itself so you have a local TOC
  await fs.writeFile(path.join(OUT_DIR, '_index.html'), indexHtml, 'utf8');

  let ok = 0, fail = 0;

  for (const url of links) {
    const filename = urlToFilename(url);
    const dest     = path.join(OUT_DIR, filename);

    try {
      const html = await fetchHtml(url);
      await fs.writeFile(dest, html, 'utf8');
      console.log(`  ✓  ${filename}`);
      ok++;
    } catch (err) {
      console.error(`  ✗  ${filename}  (${err.message})`);
      fail++;
    }

    // Polite delay — 150 ms between requests
    await new Promise(r => setTimeout(r, 150));
  }

  console.log(`\nDone. ${ok} saved, ${fail} failed.`);
}

main().catch(err => { console.error(err); process.exit(1); });
