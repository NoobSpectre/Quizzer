import { ErrorResponse } from "@/types";
import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export function errorHandler(
  err: unknown,
  _: Request,
  res: Response<ErrorResponse>,
  next: NextFunction
) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  if (err instanceof ZodError) {
    res.status(statusCode).json({
      success: false,
      data: null,
      message: err.errors.map(({ message }) => message),
    });
  } else if (err instanceof Error) {
    console.log(err);
    res
      .status(statusCode)
      .json({ success: false, message: [err.message], data: null });
  } else {
    console.log(err);
    res
      .status(500)
      .json({ success: false, message: ["Something went wrong!"], data: null });
  }
}
