function getProperty<T, K extends keyof T>(user: T, key: K): T[K] {
  return user[key];
}

const user = {
  name: "Arun",
  age: 22,
  role: "developer",
};

const name = getProperty(user, "name");
const age = getProperty(user, "age");
const role = getProperty(user, "role");
