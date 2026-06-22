import type { Chai } from "../types";
import { ChaiCard } from "./ChaiCard";

interface ChaiListProps {
  items: Chai[];
}

export function ChaiList({ items }: ChaiListProps) {
  return (
    <div>
      {items.map((item) => (
        <ChaiCard
          key={item.id}
          name={item.name}
          price={item.price}
          isSpecial={item.price >= 40}
        />
      ))}
    </div>
  );
}
