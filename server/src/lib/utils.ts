import bcrypt from "bcrypt";
import { addYears, isAfter, isWithinInterval, subYears } from "date-fns";
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

export const encryptPassword = async (password: string, saltRounds = 10) => {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return { hash, error: null };
  } catch (error) {
    return { hash: null, error: "Error while hashing password!" };
  }
};

export const verifyDob = (age: number, dob?: string) => {
  if (dob === undefined) return false;

  const dateAfterDob = addYears(new Date(dob), age);

  console.log(dateAfterDob);

  if (isAfter(dateAfterDob, new Date())) return false;

  if (
    !isWithinInterval(dateAfterDob, {
      end: new Date(),
      start: subYears(new Date(), 1),
    })
  )
    return false;

  return true;
};
