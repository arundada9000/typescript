# TypeScript Study Notes

> Learning TypeScript — a personal study journey.

## About

This repository tracks my progress as I learn TypeScript. Each file focuses on a specific concept, with practical examples written around a **chai (tea)** theme to keep things fun and relatable.

## Topics Covered

### Basics
- **Variable declarations & type inference** — `let`, `const`, inferred vs explicit types
- **Union types** — `string | number`, `string | undefined`
- **Literal types** — exact value types, combining with unions

### Functions & Type Narrowing
- **`typeof` narrowing** — discriminating between `string` and `number` params
- **Truthiness narrowing** — checking optional params with falsy checks
- **Literal type narrowing** — switching behavior based on exact literal values
- **`instanceof` narrowing** — distinguishing class instances at runtime
- **Custom type predicates** — `obj is Type` for reusable runtime checks

### OOP
- **Classes** — constructors, `public` parameter properties
- **Inheritance** — `extends`, `super()`, method overriding

## Project Structure

```
src/
├── basics/
│   ├── variables.ts        — type inference, explicit types
│   ├── unions.ts           — union type declarations
│   └── literals.ts         — literal types with unions
├── functions/
│   ├── typeof-narrowing.ts     — typeof type guard
│   ├── optional-params.ts      — truthiness narrowing
│   ├── literal-narrowing.ts    — literal comparison narrowing
│   ├── instanceof-narrowing.ts — instanceof type guard
│   └── type-predicates.ts      — custom type predicate
├── oop/
│   └── chai-classes.ts         — classes & inheritance
└── index.ts                     — entry point
```

## Setup

```bash
npm install
npx tsc
npm start
```

## Author

**Arun Neupane**
