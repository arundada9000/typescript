let apiRequestStatus: "pending" | "success" | "error" = "success";

apiRequestStatus = "pending";

let airlineSeat: "aisle" | "window" | "middle" = "aisle";

const orders = ["12", "20", "nehu", "69"];

let currentOrder: string | undefined;

for (const order of orders) {
  if (order === "nehu") {
    currentOrder = order;
    break;
  }
}
console.log(currentOrder);
