import { SuccessResponse } from "@/types";
import { Response, Router } from "express";
import { router as userRouter } from "./users";

const router = Router();

router.get("/", (_, res: Response<SuccessResponse>) =>
  res.status(200).json({ success: true, message: "API - 👋 Hello Quizzerssss!!" })
);

router.use("/users", userRouter);

export default router;
