let apiRequestStatus: "pending" | "success" | "error" = "success";

apiRequestStatus = "pending";

let airlineSeat: "aisle" | "window" | "middle" = "aisle";

const orders = ["12", "20", "arun", "69"];

let currentOrder: string | undefined;

for (const order of orders) {
  if (order === "arun") {
    currentOrder = order;
    break;
  }
}
console.log(currentOrder);
