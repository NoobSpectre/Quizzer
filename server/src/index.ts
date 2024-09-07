import connectDB from "@/db";
import { errorHandlerWithZod } from "@/middlewares/errorHandler";
import cors from "cors";
import { config } from "dotenv";
import express, { type Application } from "express";

config();

const app: Application = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 7001;

const CLIENT_PORT = 5173;
const CLIENT_ORIGIN = `http://localhost:${CLIENT_PORT}`;

app.use(
  cors({
    origin: [CLIENT_ORIGIN],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// router handlers
/* ... */

// error handler
app.use(errorHandlerWithZod);

connectDB()
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server listening to port ${PORT}`);
    })
  )
  .catch(err => console.log(err));
