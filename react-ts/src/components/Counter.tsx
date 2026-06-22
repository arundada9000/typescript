import { useState } from "react";

export function Counter({ initial = 0 }) {
  const [count, setCount] = useState<number>(initial);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
      <p>Cups ordered: {count}</p>
    </div>
  );
}
