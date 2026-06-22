interface A {
  a: string;
}

interface B {
  b: string;
}

interface C extends A, B {}

const obj: C = {
  a: "hello",
  b: "world",
};
