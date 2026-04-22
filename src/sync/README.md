# DazScript Type Sync Scripts

This directory contains scripts for syncing TypeScript type definition files (`.d.ts`) with the official Daz Studio API documentation.

## Overview

### `syncHtml.ts`
Main script for the new local-only HTML rebuild pipeline. It reads `scripts/daz_api_html/*.html`, rebuilds eligible `src/types/daz/*.d.ts` files from the saved docs, and appends preserved legacy members that are not in the docs and not inherited.

**Features:**
- Uses local HTML only
- Rebuilds eligible class files from scratch
- Corrects `extends`, member docs, and member types from HTML
- Removes members already declared in ancestors
- Preserves legacy non-HTML members at the end of the class as `@undocumented`
- Skips helper or non-mapped files and reports them in a run summary

### `scaffold.ts`
Bootstrap script that reads the official Daz Studio object index page and creates stub `.d.ts` files for any missing classes, or adds a `@docurl` JSDoc to existing files that lack one.

**Features:**
- Fetches the Daz object index page to discover all scripting classes
- Creates a minimal stub file for any `Dz*` class not yet present locally
- Prepends a `@docurl` JSDoc to existing files that have no doc URL yet
- Skips files that already have `@docurl`

## Setup

Ensure dependencies are installed:
```bash
npm install
```

---

## Usage

### Bootstrapping stubs from the object index

Run `scaffold` once to create stub files for all known Daz classes and populate their `@docurl` tags:

```bash
# Default target dir (src/types/daz)
npm run scaffold

# Custom target dir
npm run scaffold -- path/to/types
```

After scaffolding, refresh the saved HTML and run the local rebuild pipeline:

```bash
node scripts/daz_scraper.mjs
npm run sync:html
```

---

### Running the HTML rebuild

```bash
# Default directories
npm run sync:html

# Custom directories
npm run sync:html -- path/to/types path/to/html
```

### Running the full orchestrator

```bash
# Currently runs the HTML rebuild phase
npm run sync:all
```

---

## How It Works

### HTML Rebuild Process

1. **Scan** — Discover eligible `dz_*.d.ts` files in `src/types/daz`
2. **Map** — Match each eligible type file to a local HTML page in `scripts/daz_api_html`
3. **Parse HTML** — Extract the class summary, parent, properties, methods, constructors, static methods, and signals
4. **Build registry** — Resolve ancestor relationships so inherited members can be removed from child output
5. **Rebuild** — Replace each eligible class file with deterministic output derived from HTML
6. **Recover legacy extras** — Append old members that are not in the HTML and not in ancestors as `@undocumented`
7. **Report** — Print a concise summary with rebuilt counts, skipped files, and any errors

### Scope notes

- Files without a reliable 1:1 HTML mapping are left untouched
- Helper files such as `dz_signals.d.ts` are left untouched
- The second dump-based phase is not implemented yet; `sync:all` currently runs only the HTML phase

---

## Troubleshooting

### File was skipped

Read the summary output. Common reasons:

- no matching HTML page
- special-case support file
- unsafe top-level content in the existing file

### Recovered legacy members appeared at the end of the file

Those declarations were found in the old `.d.ts` file but not in the HTML docs and not in ancestors, so they were preserved as undocumented instead of being dropped.
