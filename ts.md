# TypeScript with TSC

A practical guide to setting up and running TypeScript projects using the TypeScript Compiler (TSC).

## 1. Getting Started

### Initialize a project

```bash
mkdir my-project
cd my-project
npm init -y
npm install --save-dev typescript
npx tsc --init
```

`npx tsc --init` generates a `tsconfig.json` with sensible defaults. This is the control center for your TypeScript project.

### Install type definitions

For Node.js runtime types:

```bash
npm install --save-dev @types/node
```

For DOM APIs (browser projects), types are included by default when `lib` includes `"dom"`.

---

## 2. tsconfig.json Essentials

This is your project's TypeScript configuration. Key options:

### File Layout

```json
{
  "compilerOptions": {
    "rootDir": "./src",   // Where your .ts files live
    "outDir": "./dist",   // Where compiled .js files go
  }
}
```

- `rootDir` - TSC mirrors this directory structure in `outDir`
- `outDir` - compiled JavaScript output location
- `include` / `exclude` - which files to compile (default: everything under rootDir)

### Environment

```json
{
  "compilerOptions": {
    "target": "esnext",       // JS version to emit (es5, es2015, es2022, esnext)
    "module": "nodenext",     // Module system (commonjs, esnext, nodenext)
    "lib": ["esnext"],        // Type definitions for the runtime environment
    "types": ["node"],        // Auto-include @types/* packages
  }
}
```

- `target` - higher targets produce cleaner JS. Use `esnext` unless you need old browser support
- `module` - `nodenext` for Node.js, `esnext` for bundlers
- `lib` - what type definitions to include. Browser projects typically use `["dom", "esnext"]`
- `types` - which `@types/*` packages to auto-include. Empty array means include none manually

### Strictness

```json
{
  "compilerOptions": {
    "strict": true   // Enables all strict checks
  }
}
```

Turn `strict` on from day one. It includes:

| Option | What it does |
|--------|-------------|
| `strictNullChecks` | `null`/`undefined` are not assignable to other types |
| `noImplicitAny` | Error when TS cannot infer a type |
| `strictFunctionTypes` | Stronger function parameter checking |
| `strictBindCallApply` | Type-safe `.bind()`, `.call()`, `.apply()` |
| `strictPropertyInitialization` | Class properties must be initialized |
| `noImplicitThis` | Error on `this` with implicit `any` |
| `alwaysStrict` | Emit `"use strict"` in JS output |

### Extra Safety (optional but recommended)

```json
{
  "compilerOptions": {
    "noUncheckedIndexedAccess": true,  // Adds |undefined to index access
    "exactOptionalPropertyTypes": true, // Optional props can't be set to undefined
    "noUnusedLocals": true,             // Error on unused variables
    "noUnusedParameters": true,         // Error on unused params
    "noImplicitReturns": true,          // Error on missing return paths
    "noFallthroughCasesInSwitch": true  // Error on switch fallthrough
  }
}
```

### Module Resolution

```json
{
  "compilerOptions": {
    "moduleDetection": "force",   // Treat all files as modules
    "isolatedModules": true,      // Ensure each file can be transpiled alone
    "verbatimModuleSyntax": true  // Preserve import/export syntax
  }
}
```

- `moduleDetection: force` - every file is a module (you need `import`/`export` to share)
- Without this, files with no import/export share the global scope and can collide
- `verbatimModuleSyntax` - prevents using `import` for values when emitting CommonJS

### Output Quality

```json
{
  "compilerOptions": {
    "sourceMap": true,       // Debug .ts files in the runtime
    "declaration": true,     // Generate .d.ts files for consumers
    "declarationMap": true   // Map .d.ts back to .ts for editor Go-to-Definition
  }
}
```

---

## 3. Compiling and Running

### Compile only

```bash
npx tsc
```

Compiles all files matched by `include`/`exclude` in `tsconfig.json`.

### Compile with no emit (type-check only)

```bash
npx tsc --noEmit
```

Checks types without producing `.js` files. Use this in CI or before commits.

### Watch mode

```bash
npx tsc --watch
```

Recompiles on every file change.

### Run compiled output

```bash
node dist/index.js
```

Or use a single step with `tsx` (a TypeScript executor):

```bash
npm install --save-dev tsx
npx tsx src/index.ts
```

---

## 4. Running Files from Different Locations

### Single file outside rootDir

```bash
npx tsc src/temp/test.ts --outDir dist
```

If a file is outside `rootDir`, TSC complains. Compile it individually with `--outDir`.

### Run a specific file with tsx

```bash
npx tsx src/basics/unions.ts
```

`tsx` executes any `.ts` file directly without needing a tsconfig.

### Use project references for multiple tsconfigs

```json
// ./tsconfig.json
{
  "compilerOptions": { "outDir": "./dist" },
  "references": [
    { "path": "./packages/shared" },
    { "path": "./packages/server" }
  ]
}
```

Then `npx tsc --build` compiles all referenced projects.

---

## 5. File Organization Patterns

```
src/
├── <domain>/     - group by feature or concept
│   ├── index.ts  - barrel export
│   └── foo.ts
└── index.ts      - entry point
```

- Each file should demonstrate one concept (this repo convention)
- Files are self-contained with no cross-imports unless demonstrating module patterns
- Use barrel files (`index.ts`) to re-export when organizing larger projects

---

## 6. Useful Commands Cheat Sheet

| Command | Purpose |
|---------|---------|
| `npm install --save-dev typescript` | Install TS |
| `npx tsc --init` | Generate tsconfig.json |
| `npx tsc` | Compile everything |
| `npx tsc --noEmit` | Type-check only |
| `npx tsc --watch` | Watch mode |
| `npx tsc --project tsconfig.custom.json` | Use custom config |
| `npx tsx src/file.ts` | Run TS file directly |
| `npm install --save-dev @types/node` | Node.js type defs |

---

## 7. Common Issues

### "Cannot redeclare block-scoped variable"

Files share global scope when there are no `import`/`export` statements. Fix: add `moduleDetection: force` to tsconfig or add `export {}` to files.

### "Cannot find module" or "Cannot find name 'process'"

Missing type definitions:

```bash
npm install --save-dev @types/node
```

### File is under rootDir

TSC only compiles files under `rootDir`. Move the file or adjust `rootDir`.

### Cannot write file because it would overwrite input file

Set `outDir` to a different directory than `rootDir`. Never compile `.ts` files into the same directory.

---

## Reference

- [TSConfig Reference](https://aka.ms/tsconfig)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [tsx - TypeScript Execute](https://github.com/privatenumber/tsx)
