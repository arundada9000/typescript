# TypeScript Study Notes

> Learning TypeScript - a personal study journey by **Arun Neupane**.

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-arunneupane.netlify.app-6d28d9?style=flat-square&logo=netlify&logoColor=white)](https://arunneupane.netlify.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-arundada9000-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/arundada9000)
[![YouTube](https://img.shields.io/badge/YouTube-arundada9000-FF0000?style=flat-square&logo=youtube&logoColor=white)](https://youtube.com/@arundada9000)
[![Email](https://img.shields.io/badge/Email-arunneupane0000@gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:arunneupane0000@gmail.com)

</div>

## About

I'm a full-stack developer from Nepal: CTO at [Sajilo Digital](https://sajilodigital.com.np), building with React, Next.js, TypeScript, Node.js, PostgreSQL, and MongoDB. My roots are in C and C++: I enjoy understanding _why_ things work, not just _how_.

This repo tracks my TypeScript learning. Each file focuses on a specific concept with examples written around a **chai (tea)** theme - keeps it fun and relatable.

## Topics Covered

### Basics
- **Variable declarations and type inference** - `let`, `const`, inferred vs explicit types
- **Union types** - `string | number`, `string | undefined`
- **Literal types** - exact value types, combining with unions

### Functions and Type Narrowing
- **`typeof` narrowing** - discriminating between `string` and `number` params
- **Truthiness narrowing** - checking optional params with falsy checks
- **Literal type narrowing** - switching behavior based on exact literal values
- **`instanceof` narrowing** - distinguishing class instances at runtime
- **Custom type predicates** - `obj is Type` for reusable runtime checks

### OOP
- **Classes** - constructors, `public` parameter properties
- **Inheritance** - `extends`, `super()`, method overriding

## Project Structure

```
src/
├── basics/
    │   ├── variables.ts        - type inference, explicit types
    │   ├── unions.ts           - union type declarations
    │   └── literals.ts         - literal types with unions
├── functions/
    │   ├── typeof-narrowing.ts     - typeof type guard
    │   ├── optional-params.ts      - truthiness narrowing
    │   ├── literal-narrowing.ts    - literal comparison narrowing
    │   ├── instanceof-narrowing.ts - instanceof type guard
    │   └── type-predicates.ts      - custom type predicate
├── oop/
    │   └── chai-classes.ts         - classes and inheritance
    └── index.ts                     - entry point
```

## Setup

```bash
npm install
npx tsc
npm start
```

## Contributing

This is a learning repo - open to contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT - see [LICENSE](LICENSE) for details.

---

<div align="center">

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=arundada9000&show_icons=true&theme=tokyonight&count_private=true&include_all_commits=true&hide_border=true&bg_color=0d1117)

_Building things that ship._

</div>
