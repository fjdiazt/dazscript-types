# DazScript Type Enrichment Scripts

This directory contains scripts for enriching TypeScript type definition files (`.d.ts`) with documentation from the official Daz Studio API documentation.

## Overview

### `enrichFromDocs.ts`
Main script that automatically enhances `.d.ts` type definition files by fetching documentation from the official Daz Studio API docs and intelligently integrating it with existing type declarations.

**Features:**
- Fetches documentation from official Daz HTML docs
- Adds JSDoc comments for documented methods and properties
- Marks undocumented items with `/** @undocumented */` for easy identification
- Preserves existing file structure and comments
- Creates automatic backups before modifications
- Supports single file or recursive folder scanning
- Intelligently handles multiple method overloads

### `docParser.ts`
Utility module that handles HTML parsing and documentation extraction from Daz Studio official documentation.

**Exports:**
- `parseDocsFromUrl(url)` - Fetches and parses documentation from a Daz docs URL
- `generateJSDocComment()` - Creates formatted JSDoc from documentation data
- `generateUndocumentedMarker()` - Creates JSDoc marker for undocumented items
- Type definitions: `DocumentationData`, `DocMethod`, `DocProperty`, `DocParameter`, etc.

## Setup

1. Ensure dependencies are installed:
   ```bash
   npm install
   ```

2. Build the TypeScript:
   ```bash
   npm run build
   ```

## Usage

### Adding `@docurl` Tags

First, add a JSDoc `@docurl` tag at the top of your `.d.ts` file to tell the script where to fetch documentation. Example:

```typescript
/**
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/node_dz
 */
declare class DzNode extends DzElement {
    // ... class definition
}
```

The URL format for Daz documentation is:
```
https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/{classname_lowercase}_dz
```

For example:
- `DzNode` → `node_dz`
- `DzObject` → `object_dz`
- `DzElement` → `element_dz`

### Running on a Single File

```bash
npm run enrich -- src/types/daz/dz_node.d.ts
```

This will:
1. Find the `@docurl` tag in the file
2. Fetch documentation from that URL
3. Create a `.bak` backup
4. Enrich the file with JSDoc comments and undocumented markers
5. Write the updated file

### Running on a Folder

Recursively enrich all `.d.ts` files in a folder that have `@docurl` tags:

```bash
npm run enrich -- src/types/daz
```

This will:
1. Recursively scan for `.d.ts` files
2. Find files with `@docurl` tags
3. Process each file with documentation enrichment

### Disabling Backups

By default, a backup file (`.d.ts.bak`) is created before any modifications. To skip backup creation:

```bash
npm run enrich -- src/types/daz/dz_node.d.ts --no-backup
```

## How It Works

### Enrichment Process

1. **Scan**: Find `.d.ts` files with `@docurl` tags
2. **Fetch**: Download and parse the official Daz documentation HTML
3. **Analyze**: Extract methods, properties, parameters, and descriptions
4. **Backup**: Create `.bak` copies of original files
5. **Enrich**: For each declaration in the `.d.ts` file:
   - If documented → Add JSDoc comment with description and parameters
   - If undocumented → Add `/** @undocumented */` marker
   - Otherwise → Preserve existing content exactly
6. **Write**: Save enriched file to disk

### What Gets Preserved

- All existing code structure and declarations
- Existing JSDoc comments on documented items
- Spacing and formatting
- Comments and inline TODOs

### What Gets Added

**For documented items:**
```typescript
/**
 * Description from official docs.
 * @param paramName Description of parameter
 * @param otherParam Another parameter description
 * @returns Description of return value
 */
methodName(paramName: type, otherParam: type): returnType;
```

**For undocumented items:**
```typescript
/** @undocumented */
someMethod(): void;

/** @undocumented */
someProperty: type;
```

## Examples

### Example 1: Enrich a Single Class

Add the `@docurl` tag to `dz_camera.d.ts`:

```bash
# File: src/types/daz/dz_camera.d.ts
/**
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/camera_dz
 */
declare class DzCamera extends DzNode {
    // ...
}
```

Run enrichment:
```bash
npm run enrich -- src/types/daz/dz_camera.d.ts
```

### Example 2: Batch Process Multiple Files

Add `@docurl` tags to all files you want to enrich, then run:

```bash
npm run enrich -- src/types/daz
```

The script will process:
- `dz_node.d.ts` (if it has `@docurl`)
- `dz_camera.d.ts` (if it has `@docurl`)
- `dz_material.d.ts` (if it has `@docurl`)
- All other `.d.ts` files recursively

### Example 3: Review Before Committing

After enrichment, check the generated backup:

```bash
# Compare original vs enriched
diff src/types/daz/dz_node.d.ts.bak src/types/daz/dz_node.d.ts
```

Or restore if needed:
```bash
cp src/types/daz/dz_node.d.ts.bak src/types/daz/dz_node.d.ts
```

## Output Example

**Before:**
```typescript
declare class DzNode extends DzElement {
    finalize(isRender: boolean, allowResChange: boolean): void;
    finalize(isRender: boolean, allowResChange: boolean): void;  // duplicate!
    finalize(isRender: boolean, allowResChange: boolean): void;  // duplicate!
    select(onOff: boolean): void;
    transformChanged(): void;
}
```

**After:**
```typescript
/**
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/node_dz
 */
declare class DzNode extends DzElement {
    /**
     * Finalizes the node rendering and geometry changes.
     * @param isRender Whether the finalization is for rendering.
     * @param allowResChange Whether to allow resolution changes.
     */
    finalize(isRender: boolean, allowResChange: boolean): void;
    finalize(isRender: boolean, allowResChange: boolean): void;
    finalize(isRender: boolean, allowResChange: boolean): void;

    /**
     * Selects or deselects the node.
     * @param onOff True to select, false to deselect.
     */
    select(onOff: boolean): void;

    /** @undocumented */
    transformChanged(): void;
}
```

## Troubleshooting

### No files found to process

**Problem:** "No files with @docurl found"

**Solution:** Ensure your `.d.ts` files have a JSDoc `@docurl` comment at the top. Example:
```typescript
/**
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/class_dz
 */
declare class MyClass {
    // ...
}
```

### Documentation not found

**Problem:** Script runs but no documentation appears in output

**Solution:** Verify the `@docurl` points to a valid Daz documentation page. Check:
- URL format matches: `https://docs.daz3d.com/.../object_index/{classname_lowercase}_dz`
- Class name is correctly formatted (lowercase)
- The official docs page exists and loads in a browser

### Invalid @docurl format

**Problem:** "No @docurl found in file"

**Solution:** The script looks for `@docurl` in JSDoc comments or line comments. Valid formats:
```typescript
// JSDoc comment format (preferred)
/**
 * @docurl https://...
 */

// Line comment format
// @docurl https://...
```

## Development

To modify or extend the scripts:

1. Edit `src/scripts/enrichFromDocs.ts` or `src/scripts/docParser.ts`
2. Run `npm run build` to compile
3. Test with `npm run enrich -- <file-or-folder>`

The scripts use:
- **TypeScript** for type safety
- **Cheerio** for HTML parsing (jQuery-like API)
- **Axios** for HTTP requests
- **Node.js fs/path** for file operations

## License

Part of the DazScript.Framework project. See LICENSE file.
