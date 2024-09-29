import { isBefore, isValid, subYears } from "date-fns";
import { NextFunction, Response } from "express";
import { ZodError } from "zod";

export const handleError = (
  res: Response,
  next: NextFunction,
  error: ZodError | Error,
  statusCode = 400
) => {
  if (error instanceof ZodError) {
    res.status(statusCode);
  }
  next(error);
};

export const verifyDob = (date: string, ageLimit: number) => {
  if (!isValid(date)) return false;

  const ageLimitYearsAgo = subYears(new Date(), ageLimit);

  const dob = new Date(date);

  return (
    isBefore(dob, ageLimitYearsAgo) ||
    dob.getTime() === ageLimitYearsAgo.getTime()
  );
};
