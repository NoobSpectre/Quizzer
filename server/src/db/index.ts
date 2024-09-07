import { config } from "dotenv";
import mongoose from "mongoose";

config();

const dbName = "quizzer";
const connectionString = process.env.DB_CONNECTION_STRING as string;

const connectDB = async () => {
  try {
    await mongoose.connect(connectionString, { dbName });
    console.log(`Database by the name ${dbName} is connected`);
  } catch (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1);
  }
};

export default connectDB;
