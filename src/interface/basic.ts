interface Chai {
  flavor: string;
  price: number;
}

const masala: Chai = {
  flavor: "Masala",
  price: 20,
};

interface Shop {
  readonly id: number;
  name: string;
}

const shop: Shop = { id: 20, name: "Arun" };

interface DiscountCalculator {
  (price: number): number;
}

const applyFiftyPercent: DiscountCalculator = (p) => p * 0.5;
console.log(applyFiftyPercent(1));

interface TeaMachine {
  start(price: number): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log("start");
  },
  stop() {
    console.log("stop");
  },
};

interface ChaiRatings {
  [flavor: string]: number;
}

const ratings: ChaiRatings = {
  masala: 4.5,
  ginger: 4.5,
};
