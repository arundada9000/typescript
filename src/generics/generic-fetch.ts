type User = {
  name: string;
};

function fetchData<T>(url: string): Promise<T> {
  const fakeData = {
    name: "Arun",
  };

  return Promise.resolve(fakeData as T);
}

const user = await fetchData<User>("/users/1");

console.log(user.name);
