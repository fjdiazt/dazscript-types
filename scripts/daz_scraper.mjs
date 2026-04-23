#!/usr/bin/env node
/**
 * daz_scraper.mjs
 * Scrapes object pages from the DAZ Studio scripting API object index.
 * Usage:  node daz_scraper.mjs [output-dir] [--type DzNode]
 * Output dir defaults to ./daz_api_html
 *
 * Node 18+ (built-in fetch).  For older Node: npm i node-fetch and uncomment the import below.
 */

// import fetch from 'node-fetch'; // <- uncomment for Node < 18

import fs   from 'fs/promises';
import path from 'path';

const INDEX_URL = 'https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/start';
const BASE_URL  = 'https://docs.daz3d.com';

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; daz-scraper/1.0)' }
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

function annotateHtmlWithSourceUrl(html, url) {
  const marker = `<!-- @docurl ${url} -->`;
  if (html.includes('<!-- @docurl ')) {
    return html.replace(/<!--\s*@docurl\s+[^>]+-->/i, marker);
  }

  return `${marker}\n${html}`;
}

function stripDeprecatedSuffix(text) {
  return text.replace(/\s+\(deprecated\)$/i, '').trim();
}

function extractObjectIndexEntries(html) {
  const pageStart = html.indexOf('<div class="page');
  const pageEnd = html.indexOf('<!-- wikipage stop -->');
  const scope = pageStart !== -1 && pageEnd !== -1
    ? html.slice(pageStart, pageEnd)
    : html;

  const seen = new Set();
  const entries = [];
  const re = /<a\s+href="([^"]*\/object_index\/([^"#?\/]+))"[^>]*>([^<]+)<\/a>/gi;
  let match;

  while ((match = re.exec(scope)) !== null) {
    const href = match[1];
    const slug = match[2];
    const label = stripDeprecatedSuffix(match[3]);
    if (!slug || slug === 'start' || !label) {
      continue;
    }

    const full = href.startsWith('http') ? href : BASE_URL + href;
    const clean = full.split('?')[0].split('#')[0];
    const key = `${label.toLowerCase()}:::${clean.toLowerCase()}`;
    if (seen.has(key)) {
      continue;
    }

    seen.add(key);
    entries.push({ label, slug, url: clean });
  }

  return entries.sort((a, b) => a.label.localeCompare(b.label));
}

function urlToFilename(url) {
  // e.g. .../object_index/dznode  ->  dznode.html
  const slug = url.split('/').pop() || 'index';
  return slug.endsWith('.html') ? slug : slug + '.html';
}

function normalizeTargetName(name) {
  return stripDeprecatedSuffix(name).replace(/\s+/g, '').toLowerCase();
}

function matchesTarget(entry, targetType) {
  const normalizedTarget = normalizeTargetName(targetType);
  if (!normalizedTarget) {
    return false;
  }

  if (normalizeTargetName(entry.label) === normalizedTarget) {
    return true;
  }

  if (entry.slug.toLowerCase() === normalizedTarget) {
    return true;
  }

  if (targetType.startsWith('Dz')) {
    const dzSlug = `${targetType.slice(2).toLowerCase()}_dz`;
    return entry.slug.toLowerCase() === dzSlug;
  }

  return false;
}

function parseArgs(argv) {
  const positional = [];
  let targetType = null;

  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--type') {
      targetType = argv[i + 1] ?? null;
      i++;
    } else {
      positional.push(argv[i]);
    }
  }

  return {
    outDir: positional[0] ?? './scripts/daz_api_html',
    targetType,
  };
}

async function main() {
  const { outDir, targetType } = parseArgs(process.argv.slice(2));

  await fs.mkdir(outDir, { recursive: true });

  console.log(`Fetching index: ${INDEX_URL}`);
  const indexHtml = await fetchHtml(INDEX_URL);
  const entries = extractObjectIndexEntries(indexHtml);

  if (entries.length === 0) {
    console.error('No object_index links found — page structure may have changed.');
    process.exit(1);
  }

  let selectedEntries = entries;
  if (targetType) {
    selectedEntries = entries.filter(entry => matchesTarget(entry, targetType));
    if (selectedEntries.length === 0) {
      console.error(`No matching HTML entry found for ${targetType}.`);
      process.exit(1);
    }
  }

  console.log(`Found ${selectedEntries.length} object index entries. Saving to ${outDir}/\n`);

  // Save the index itself so you have a local TOC
  await fs.writeFile(path.join(outDir, '_index.html'), indexHtml, 'utf8');

  let ok = 0, fail = 0;

  for (const entry of selectedEntries) {
    const filename = urlToFilename(entry.url);
    const dest     = path.join(outDir, filename);

    try {
      const html = await fetchHtml(entry.url);
      await fs.writeFile(dest, annotateHtmlWithSourceUrl(html, entry.url), 'utf8');
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
