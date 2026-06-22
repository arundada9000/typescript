type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

function updateUser<T>(user: T, updates: Partial<T>): T {
  return {
    ...user,
    ...updates,
  };
}

const user: User = {
  id: 1,
  name: "Arun",
  email: "a@test.com",
  age: 22,
};

const updatedUser = updateUser(user, {
  name: "New Name",
});

console.log(updatedUser);
