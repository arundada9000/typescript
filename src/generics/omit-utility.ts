type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

type PublicUser = Omit<User, "password">;

const user: PublicUser = {
  id: 1,
  name: "Arun",
  email: "a@test.com",
};

console.log(user);
