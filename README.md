# DazScript Types

This project provides TypeScript typings for [Daz Studio](https://www.daz3d.com/).

## Overview

This project aims to provide TypeScript typings for Daz Script, making it easier to use in a TypeScript environment.

From [Daz Script Documentation](http://docs.daz3d.com/doku.php/public/software/dazstudio/4/referenceguide/scripting/start):

> Daz Script 2 is a dynamically-typed, interpreted, object-oriented scripting language that is tightly integrated with the Daz Studio API. It is an extension of Qt Script, which is an extension of ECMAScript as defined in the ECMAScript Language Specification (ECMA-262), 5.1 Edition.

> Syntactically Daz Script is very similar to JavaScript, JScript, and ActionScript.

## Usage

To use these typings in your project, install the package from npm:

```
npm install dazscript-types
```

Then make sure you update your tsconfig.json to include the typings like so:

```
{
  "compilerOptions": {
    ...
  },
  "include": ["node_modules/dazscript-types/src/types/**/*"]
}
```

## Updating The Types

When maintaining this package, update the types through the local sync pipeline instead of editing large generated sections by hand.

Recommended collaborator workflow:

1. Refresh the saved DAZ HTML corpus.
2. Bootstrap augments if needed.
3. Run the HTML sync pipeline.
4. Review the summary and the resulting diff.
5. Recover missed undocumented members only if real consumer code proves they are needed.

Commands:

```bash
# Refresh the local HTML cache
node scripts/daz_scraper.mjs

# Refresh one type only
node scripts/daz_scraper.mjs --type DzNode

# Custom output directory if needed
node scripts/daz_scraper.mjs path/to/daz_api_html --type DzNode

# Bootstrap augment files from current legacy/generated types
npm run sync:extract-augments

# Rebuild eligible DAZ class files from saved HTML plus augments
npm run sync:html

# Rebuild and prune redundant augment members afterward
npm run sync:html -- --prune-augments

# Rebuild one type only
npm run sync:html -- --type DzNode

# Rebuild one type only and prune augments
npm run sync:html -- --type DzNode --prune-augments

# Standalone augment prune pass
npm run sync:prune-augments

# Recover candidate missing members from compiler errors
npm run sync:recover-errors -- path/to/tsc-errors.txt
```

What the pipeline does:

- writes transient HTML models to `.generated/html-models`
- stores repo-tracked undocumented members in `src/augments/daz`
- rebuilds generated declarations from `HTML + augments`
- removes inherited members already covered by ancestry
- can prune redundant augment members after generation

Recommended flows:

- Bootstrap or rebuild augments:
  1. `npm run sync:extract-augments`
  2. `npm run sync:html -- --prune-augments`
- Normal ongoing sync:
  1. `npm run sync:html`
  2. optionally `npm run sync:html -- --prune-augments`

Detailed sync behavior, command reference, and cleanup workflow are documented in [src/sync/README.md](src/sync/README.md).

## Contributing

Contributions are welcome! If you find a bug or think of a feature that should be added, please open an issue. If you want to contribute code, feel free to open a pull request.

## License

This project is licensed under the Mozilla version 2.0 License. See the LICENSE file for more details.
