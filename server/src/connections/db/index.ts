import { config } from "@/config";
import { MongoClient } from "mongodb";

const client = new MongoClient(config.DB_CONNECTION_STRING);
export const db = client.db(config.DB_NAME);

export const connectDb = async () => {
  try {
    await client.connect();
    if (config.NODE_ENV === "development") console.log("Database connected!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  } finally {
    await client.close();
  }
};
