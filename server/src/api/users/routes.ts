import { validateRequest } from "@/middlewares";
import { SuccessResponseWithData } from "@/types";
import { Request, Response, Router } from "express";
import { User, userSchema, UserWithId } from "./model";

const router = Router();

router
  .route("/")
  .get(
    validateRequest({ body: userSchema }),
    (
      req: Request<{}, UserWithId, User>,
      res: Response<SuccessResponseWithData<User[]>>
    ) => {
      const data = req.body;
      res.status(200).json({
        success: true,
        message: "Successfully retrieved all users!",
        data: [data],
      });
    }
  );

export { router };
