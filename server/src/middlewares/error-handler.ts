import { ErrorResponse } from "@/types";
import { Request, Response } from "express";

export function errorHandler(
  err: Error,
  _: Request,
  res: Response<ErrorResponse>
) {
  // console.log(err.stack);
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  console.log("error", statusCode);

  res
    .status(statusCode)
    .json({ success: false, message: err.message, data: null });
}
