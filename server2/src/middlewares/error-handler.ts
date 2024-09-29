import { ErrorResponse } from "@/types";
import { Request, Response } from "express";
import { ZodError } from "zod";

export function errorHandler(
  err: Error | ZodError,
  _: Request,
  res: Response<ErrorResponse>
) {
  console.log(err.stack);

  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res
    .status(statusCode)
    .json({ success: false, message: err.message, data: null });
}
