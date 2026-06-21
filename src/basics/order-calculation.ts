type ChaiOrder = {
  name: string;
  price: number;
  quantity: number;
};

const orders: ChaiOrder[] = [
  {
    name: "Masala Chai",
    price: 20,
    quantity: 2,
  },
  {
    name: "Ginger Chai",
    price: 25,
    quantity: 3,
  },
];

const total: number = calculateTotal(orders);
console.log(total);

function calculateTotal(orders: readonly ChaiOrder[]): number {
  return orders.reduce(
    (acc, order) => order.price * order.quantity + acc,
    0,
  );
}
