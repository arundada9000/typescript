function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type}`);
}
makeChai("Masala", 2);
makeChai("Ginger", 3);

function getChaiPrice(): number {
  return 25;
}
function logChai(): void {
  console.log("Chai is ready");
}
function orderChai(type?: string) {}
// function orderChai(type: string = "Masala") {}
