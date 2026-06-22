import "./App.css";
import { ChaiCard } from "./components/ChaiCard.tsx";
import { Counter } from "./components/Counter.tsx";
import { ChaiList } from "./components/ChaiList.tsx";
import type { Chai } from "./types.ts";
import OrderForm from "./components/OrderForm.tsx";
import Card from "./components/Card.tsx";

const menu: Chai[] = [
  { id: 1, name: "masala", price: 30 },
  { id: 2, name: "lemon", price: 40 },
  { id: 3, name: "ginger", price: 50 },
];

function App() {
  return (
    <>
      <h1>Vite + React </h1>
      <ChaiCard name="Headphones" price={200} />
      <ChaiCard name="Iphone" price={50000} />
      <Counter initial={10} />
      <div>
        <ChaiList items={menu} />
      </div>
      <div>
        <OrderForm
          onSubmit={(order) => console.log("Placed :", order.name, order.cups)}
        />
      </div>
      <div>
        <Card title="Chai aur typescript" footer={<button>Order Now</button>} />
      </div>
    </>
  );
}

export default App;
