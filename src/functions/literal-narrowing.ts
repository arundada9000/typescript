function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `small cutting chai...`;
  }
  if (size === "medium" || size === "large") {
    return `Make extra cutting chai...`;
  }
  return `chai order #${size}`;
}

console.log(orderChai("small"));
console.log(orderChai(99));
