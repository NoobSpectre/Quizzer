import { config as envConfig } from "dotenv";

envConfig();

type Config = {
  PORT: number;
  NODE_ENV: "development" | "production";
  DB_CONNECTION_STRING: string;
};

export const config = {
  PORT: process.env.PORT ? Number(process.env.PORT) : 7050,
  NODE_ENV: (process.env.NODE_ENV as Config["NODE_ENV"]) ?? "development",
  DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING || "",
} satisfies Config;
