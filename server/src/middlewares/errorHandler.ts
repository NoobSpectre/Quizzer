// middlewares/zodErrorHandler.ts

import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const errorHandlerWithZod = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof z.ZodError) {
    res.status(400).json({
      error: err.flatten(),
    });
    return;
  } else if (err instanceof Error) {
    const error = err as Error & { statusCode?: number };
    return res.status(error.statusCode ?? 400).json({
      message: err.message,
    });
  }
  res.status(500).json({
    message: "Internal server error.",
  });
};
