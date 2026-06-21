const chaiFlavours: string[] = ["arun", "one", "two"];
const chaiPrice: number[] = [1, 2, 3, 4, 5];

const rating: Array<number> = [4.5, 5.0];

type Chai = {
  name: string;
  price: number;
};
const menu: Chai[] = [
  {
    name: "masala",
    price: 15,
  },
];
const cities: readonly string[] = ["delhi", "jaipur"];
// cities.push("Pune");
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];
let chaiTuple: [string, number];
chaiTuple = ["masala", 20];
// chaiTuple = [20,"masala"]
let userInfo: [string, number, boolean?];
userInfo = ["arun", 100];
userInfo = ["arun", 100, true];
const location: readonly [number, number] = [29.65, 54.66];

const chaiItems1: [name: string, price: number] = ["Masala", 20];

// enum
enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}
const size = CupSize.LARGE;
console.log(size);
enum Status {
  PENDING = 100,
  SERVED, //101
  CANCELLED, //102
}
enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}
const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}
const enum HybridEnums {
  name = "Chai",
  cup = 1,
}
