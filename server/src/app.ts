import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import api_v1 from "./api";
import { errorHandler, notFound } from "./middlewares";

const app = express();

// all configuration middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

// routes entry point
app.use("/api/v1", api_v1);

app.use(notFound);
app.use(errorHandler);

export default app;
