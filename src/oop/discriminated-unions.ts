type MasalaChai = { type: "masala"; spiceLevel: number };

type GingerChai = { type: "ginger"; amount: number };

type ElaichiChai = { type: "elaichi"; aroma: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      return `Masala Chai`;
    case "elaichi":
      return `Elaichi Chai`;
    case "ginger":
      return `Ginger Chai`;
  }
}
