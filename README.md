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
2. Run the HTML sync pipeline.
3. Review the summary and the resulting diff together with any skipped files.
4. Discuss any out-of-scope or unsafe skips before making manual follow-up edits.

Commands:

```bash
# Refresh the local HTML cache
node scripts/daz_scraper.mjs

# Refresh one type only
node scripts/daz_scraper.mjs --type DzNode

# Custom output directory if needed
node scripts/daz_scraper.mjs path/to/daz_api_html --type DzNode

# Rebuild eligible DAZ class files from the saved HTML
npm run sync:html

# Rebuild one type only
npm run sync:html -- --type DzNode

# Run the current orchestrator
npm run sync:all

# Run the current orchestrator for one type only
npm run sync:all -- --type DzNode
```

What the pipeline does:

- rebuilds eligible `src/types/daz/*.d.ts` files from local HTML
- fixes class summaries, `extends`, properties, methods, and signals from the docs
- removes members already inherited from ancestors
- preserves old non-HTML members at the end of the file as `@undocumented`
- leaves helper or non-mapped files untouched and reports them in the summary

If a file is skipped because it has no 1:1 HTML match or has unsafe top-level content, keep that discussion explicit in review instead of forcing it into the automated pass.

## Contributing

Contributions are welcome! If you find a bug or think of a feature that should be added, please open an issue. If you want to contribute code, feel free to open a pull request.

## License

This project is licensed under the Mozilla version 2.0 License. See the LICENSE file for more details.
