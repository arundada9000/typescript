import { useState } from "react";

interface OrderFormProps {
  onSubmit(order: { name: string; cups: number }): void;
}

const OrderForm = ({ onSubmit }: OrderFormProps) => {
  const [name, setName] = useState<string>("masala");
  const [cups, setCups] = useState<number>(0);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(name, cups);
    onSubmit({ name, cups });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Chai Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <label htmlFor="name">Cups</label>
      <input
        id="name"
        type="number"
        value={cups}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCups(Number(e.target.value) || 0)
        }
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default OrderForm;
