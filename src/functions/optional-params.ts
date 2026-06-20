function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default masala chai`;
}

console.log(serveChai("nehu"));
console.log(serveChai());
