type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  createdAt: Date;
};

type ProductCard = Pick<Product, "id" | "name" | "price">;

const productCard: ProductCard = {
  id: 20,
  name: "Bag",
  price: 200.5,
};

console.log(productCard);
