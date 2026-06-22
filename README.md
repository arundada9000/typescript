# Learning TypeScript

A personal journey learning TypeScript through hands-on examples with a chai/tea theme.

## Topics Covered

### Entry Point
- Basic greeting function with typed params (`index.ts`)

### Basics
- Type inference with `let` and `const` (`basics/variables.ts`)
- Literal types (`basics/literals.ts`)
- Union types (`basics/unions.ts`)
- `any` vs `unknown` (`basics/any-unknown.ts`)
- Type assertions (`basics/type-assertions.ts`)
- Object types, structural typing, and excess property checks (`basics/object-types.ts`)
- Object arrays, `readonly`, and `reduce` (`basics/order-calculation.ts`)

### Arrays & Enums
- Array types, tuples, and enums (`arrays/arrays.ts`)

### Functions
- Function parameters, return types, and `void` (`functions/function.ts`)
- `typeof` type narrowing (`functions/typeof-narrowing.ts`)
- `instanceof` type narrowing (`functions/instanceof-narrowing.ts`)
- Literal type narrowing (`functions/literal-narrowing.ts`)
- Optional parameters (`functions/optional-params.ts`)
- User-defined type predicates (`functions/type-predicates.ts`)
- `never` type and exhaustiveness checking (`functions/never-type.ts`)

### Generics
- Basic generics (`generics/first-item.ts`)
- Generic `wrapInArray` function (`generics/wrap-in-array.ts`)
- Multiple type parameters with `pair` (`generics/pair.ts`)
- Generic interfaces (`generics/generic-interface.ts`)
- Generic `fetchData` with `Promise<T>` (`generics/generic-fetch.ts`)
- `keyof` constraint (`generics/keyof-constraint.ts`)
- `Omit` utility type (`generics/omit-utility.ts`)
- `Partial` utility type (`generics/partial-utility.ts`)
- `Pick` utility type (`generics/pick-utility.ts`)

### Interfaces
- Basic, callable, method and index signatures (`interface/basic.ts`)
- Declaration merging (`interface/declaration-merging.ts`)
- Interface `extends` (`interface/extends.ts`)

### OOP (Object-Oriented Programming)
- Classes and inheritance (`oop/classes.ts`)
- Interfaces and `implements` (`oop/interfaces.ts`)
- Object type aliases (`oop/type-aliases.ts`)
- Intersection types (`oop/intersection-types.ts`)
- Optional and `readonly` properties (`oop/optional-readonly.ts`)
- Discriminated unions (`oop/discriminated-unions.ts`)
- `in` operator narrowing (`oop/in-operator.ts`)
- Error handling with try/catch (`oop/try-catch.ts`)

### Web Requests
- Fetch API with typed response (`webRequest/fetchRequest.ts`)
- Axios with typed response and error handling (`webRequest/axiosRequest.ts`)

### React + TypeScript
- React project with Vite (`react-ts/`) - components, hooks, typed props

## Setup

```bash
npm install
npx tsc
```

## Author

- **Arun Neupane** - [arunneupane.netlify.app](https://arunneupane.netlify.app)
- GitHub: [@arundada9000](https://github.com/arundada9000)
