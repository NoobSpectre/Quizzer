import { AnyZodObject } from "zod";
import { User } from "./api/users";

export type ErrorResponse = {
  success: false;
  message: string;
  data: null;
};

export type SuccessResponse = {
  success: true;
  message: string;
};

export type SuccessResponseWithData<T> = SuccessResponse & {
  data: T;
};

export type SuccessResponseWithUser = SuccessResponseWithData<User>;

export type RequestValidators = {
  params?: AnyZodObject;
  body?: AnyZodObject;
  query?: AnyZodObject;
};
