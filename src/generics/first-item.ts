function getFirstItem<T>(arr: readonly T[]): T | undefined {
  return arr[0];
}
console.log(getFirstItem([1, 2, 3, 4]));
console.log(getFirstItem(["masala", "ginger", "elaichi"]));
