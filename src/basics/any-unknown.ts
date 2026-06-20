let value: any;
value = "Arun";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase();

let value1: unknown;
value1 = "Arun";
value1 = [1, 2, 3];
value1 = 2.5;
if (typeof value1 === "string") {
  value1.toUpperCase();
}
