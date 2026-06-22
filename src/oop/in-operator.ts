type MasalaChai = { type: "masala"; spiceLevel: number };

type GingerChai = { type: "ginger"; amount: number };

function brew(order: MasalaChai | GingerChai) {
  if ("spiceLevel" in order) {
  }
}

function isStringArray(arr: unknown): arr is string[] {
  return true;
}
