# DazScript Type Sync Scripts

This directory contains scripts for syncing TypeScript type definition files (`.d.ts`) with the official Daz Studio API documentation.

## Overview

### `sync.ts`
Main script that synchronises `.d.ts` type definition files with the official Daz Studio API docs — adding JSDoc, fixing types, reordering members, and removing inherited declarations.

**Features:**
- Fetches documentation from official Daz HTML docs
- Adds JSDoc comments for documented methods, properties, and signals
- Marks undocumented items with `/** @undocumented */` (or removes them with a flag)
- Converts signal declarations to `ISignalT<T>` property format
- Reorders members to match documentation page order (Properties → Methods → Signals)
- Removes inherited members already declared in an ancestor class
- Deduplicates identical declarations
- Supports single file or recursive folder scanning
- Handles multiple method overloads

### `docParser.ts`
Utility module that handles HTML parsing and documentation extraction from Daz Studio official documentation.

**Exports:**
- `parseDocsFromUrl(url)` — Fetches and parses documentation from a Daz docs URL
- `generateJSDocComment()` — Creates formatted JSDoc from documentation data
- `generateUndocumentedMarker()` — Creates JSDoc marker for undocumented items
- Type definitions: `DocumentationData`, `DocMethod`, `DocProperty`, `DocParameter`, etc.

---

## Setup

Ensure dependencies are installed:
```bash
npm install
```

---

## Usage

### Adding `@docurl` Tags

Add a JSDoc `@docurl` tag at the top of your `.d.ts` file:

```typescript
/**
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/node_dz
 */
declare class DzNode extends DzElement {
    // ...
}
```

URL pattern:
```
https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/{classname_lowercase}_dz
```

### Running on a Single File

```bash
npm run sync -- src/types/daz/dz_node.d.ts
```

### Running on a Folder

Recursively sync all `.d.ts` files that have `@docurl` tags:

```bash
npm run sync -- src/types/daz
```

---

## Flags

| Flag | Description |
|------|-------------|
| `--remove-undocumented` | Remove declarations not found in the docs instead of marking them `@undocumented`. Declarations with a hand-written JSDoc description are always kept. |
| `--no-file-issues` | Print syncer warnings to the console only — do not write a `/* @syncer-issues */` block at the top of the file. |

### Examples

```bash
# Sync a single file, removing anything not in the docs
npm run sync -- src/types/daz/dz_app.d.ts --remove-undocumented

# Batch sync a folder, suppressing the issues block in output files
npm run sync -- src/types/daz --no-file-issues

# Both flags together
npm run sync -- src/types/daz --remove-undocumented --no-file-issues
```

---

## How It Works

### Sync Process

1. **Scan** — Find `.d.ts` files with `@docurl` tags
2. **Fetch** — Download and parse the official Daz documentation HTML
3. **Sync** — For each declaration in the `.d.ts` file:
   - If documented → Add/update JSDoc with description, `@param`, `@returns`, `@since`
   - If undocumented → Add `/** @undocumented */` marker (or remove with `--remove-undocumented`)
   - Existing hand-written JSDoc is always preserved
4. **Reorder** — Sort members to match docs page order: Properties → Methods → Signals
5. **Deduplicate** — Remove identical duplicate declarations
6. **Strip inherited** — Remove members already declared in an ancestor class
7. **Write** — Save the updated file (use `git diff` / `git restore` to review or undo)

### Signals

Signal declarations are converted from method format to `ISignalT<T>` property format:

```typescript
// Before
labelChanged(newLabel: string): void;

// After
/** Emitted when the label changes. */
labelChanged: ISignalT<string>;
```

Parameter count determines the type argument:
- 0 params → `ISignalT<void>`
- 1 param → `ISignalT<T>`
- 2 params → `ISignalT<T1, T2>`

### Inheritance Filtering

After syncing, any member that is already declared (documented or undocumented) in an ancestor class is removed from the child class. This keeps child class files focused on what they add.

Files with a `/* @syncer-issues */` block are skipped by the inheritance filter until the issues are resolved.

### Issues Block

When the syncer detects a potential problem (e.g. an inheritance mismatch between the file and the docs), it writes a warning block at the top of the file:

```typescript
/* @syncer-issues
 * ⚠ Issues found during sync — fix manually or re-run after correcting source:
 * - Inheritance mismatch: file declares 'extends DzFoo' but docs list 'DzBar' as direct parent
 */
```

Use `--no-file-issues` to suppress this block and receive the warnings on stdout only.

---

## Troubleshooting

### "No files with @docurl found"

Add a JSDoc `@docurl` comment to the file:
```typescript
/**
 * @docurl https://docs.daz3d.com/.../object_index/myclass_dz
 */
declare class MyClass { ... }
```

### "No @docurl found in file" (single-file mode)

The script accepts `@docurl` in either a JSDoc block or a line comment:
```typescript
// @docurl https://...
```

### Documentation URL not loading

Verify the URL is reachable in a browser. The class name segment is always lowercase: `DzNode` → `node_dz`, `DzCamera` → `camera_dz`.
