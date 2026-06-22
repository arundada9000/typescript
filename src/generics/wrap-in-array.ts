function wrapInArray<T>(item: T): T[] {
  return [item];
}

console.log(wrapInArray("masala"));
console.log(wrapInArray(42));
console.log(wrapInArray({ flavor: "Ginger", cup: 20 }));
