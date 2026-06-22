interface Box<T> {
  content: T;
}

const stringBox: Box<string> = { content: "string value" };
const numberBox: Box<number> = { content: 10 };

interface ApiResponse<T> {
  status: number;
  data: T;
}

const res: ApiResponse<{ flavor: string }> = {
  status: 200,
  data: { flavor: "masala" },
};
