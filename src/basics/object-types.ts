const chai = {
  name: "Masala Chai",
  price: 20,
  isHot: true,
};
let tea: {
  name: string;
  price: number;
  isHot: boolean;
};
tea = {
  name: "Ginger",
  price: 25,
  isHot: true,
};

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};
const adrakChai: Tea = {
  name: "Adrak Chai",
  price: 25,
  ingredients: ["ginger", "tea leaves"],
};
type Cup = { size: string };
let smallCup: Cup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };

smallCup = bigCup;
type Brew = { brewTime: number };
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew: Brew = coffee;

type User = {
  username: string;
  password: string;
};
const u: User = {
  username: "Arun Neupane",
  password: "1234",
};
