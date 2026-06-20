type User = {
  username: string;
  bio?: string;
};

const u1: User = {
  username: "Arun",
};

const u2: User = {
  username: "Aruna",
  bio: "hey",
};

type Config = {
  readonly appName: string;
  version: number;
};

const cfg: Config = {
  appName: "App1",
  version: 1,
};
// cfg.appName = "cannot change it"
cfg.version = 20;
