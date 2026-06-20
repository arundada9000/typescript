function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai ...`;
  }
  return `Chai order: ${kind}`;
}

console.log(getChai("masala"));
console.log(getChai(2));
