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
  "include": ["node_modules/dazscript-types/**/*"]
}
```

## Contributing

Contributions are welcome! If you find a bug or think of a feature that should be added, please open an issue. If you want to contribute code, feel free to open a pull request.

## License

This project is licensed under the Mozilla version 2.0 License. See the LICENSE file for more details.
