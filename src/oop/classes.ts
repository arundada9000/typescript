class KulhadChai {
  constructor(
    public name: string,
    public sugar: number,
  ) {}

  describe(): string {
    return `${this.name} chai with ${this.sugar} spoons of sugar`;
  }
}

class MasalaKulhadChai extends KulhadChai {
  constructor(
    name: string,
    sugar: number,
    public spices: string[],
  ) {
    super(name, sugar);
  }

  describe(): string {
    return `${super.describe()} and spices: ${this.spices.join(", ")}`;
  }
}

const plain = new KulhadChai("normal", 1);
const masala = new MasalaKulhadChai("masala", 2, [
  "cardamom",
  "ginger",
  "cinnamon",
]);

console.log(plain.describe());
console.log(masala.describe());
