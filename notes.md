| Field          | `type: module`                                   | `type: commonjs`                                  |
|----------------|--------------------------------------------------|---------------------------------------------------|
| **Module System** | ES Modules (ESM)                                | CommonJS (CJS)                                   |
| **Syntax**         | `import` and `export`                           | `require` and `module.exports`                   |
| **File Extension** | Typically `.mjs` file extension                | Typically `.js` file extension                   |
| **Main Entry Point** | Specified in the `main` field as ESM          | Specified in the `main` field as CJS             |
| **Usage**          | Used for modern JavaScript projects            | Used for legacy or Node.js-specific projects     |
| **Tree-shaking**   | Supports tree-shaking for dead code elimination | Limited support for tree-shaking                |
| **Browser Support** | Supported in modern browsers (with caveats)   | Not supported natively in browsers              |
| **Node.js Support** | Supported in Node.js since v12.0.0             | Supported in all versions of Node.js            |



| Feature              | `export const`                       | `export default`                    |
|----------------------|-------------------------------------|------------------------------------|
| **Exported Value**  | Exports a named constant or variable | Exports a default value            |
| **Usage**            | Can export multiple values from a module | Typically used for a single default export |
| **Import Syntax**    | Requires curly braces when importing | No curly braces are needed when importing |
| **Import Alias**     | Allows renaming when importing (e.g., `import { myVar as alias } from 'module';`) | Renaming is done when importing with any desired name |
| **Multiple Exports** | Supports multiple named exports within the same module | Typically used for a single default export per module |
| **Usage in a Module** | Can have multiple `export const` declarations in the same module | Only one `export default` per module is allowed |
| **Default Import**   | Cannot be imported using a default import syntax | Imported using a default import syntax (e.g., `import moduleDefault from 'module';`) |
| **Common Use Cases**  | Exporting constants, variables, or functions for explicit import | Exporting a single, often the most important, value from a module |


### nodemon should be saved as dev-dependency(because it is requrired only in development and testing,not on production).
### Dependencies which are required in production should be saved as dependencies
### we can configure our app in a way for developers & testers reducing the bundle size for production build
