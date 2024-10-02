import { AnyZodObject, ZodEffects } from "zod";
import { User, UserWithId } from "./api/users";

type WithArray<T> = T extends Array<infer U> ? U : T;

export type RequestValidators = {
  params?: AnyZodObject;
  body?: ZodEffects<AnyZodObject>;
  query?: AnyZodObject;
};

export type MessageResponse = {
  message: string[];
};

export type ErrorResponse = MessageResponse & {
  success: false;
  data: null;
};

export type SuccessResponse<
  T,
  SensitiveKeys extends keyof WithArray<T> = never,
> = MessageResponse & {
  success: true;
  data: T extends Array<infer U>
    ? {
        [key in keyof U as key extends SensitiveKeys ? never : key]: U[key];
      }[]
    : {
        [key in keyof T as key extends SensitiveKeys ? never : key]: T[key];
      };
};

export type SuccessResponseWithUser = SuccessResponse<User, "password">;
export type SuccessResponseWithUserId = SuccessResponse<UserWithId, "password">;
export type SuccessResponseWithUsers = SuccessResponse<User[], "password">;
