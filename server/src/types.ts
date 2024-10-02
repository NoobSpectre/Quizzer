import { AnyZodObject, ZodEffects } from "zod";
import { User, UserWithId } from "./api/users/model";

export type WithArray<T> = T extends Array<infer U> ? U : T;
export type WithoutSensitive<
  T,
  SensitiveKeys extends keyof WithArray<T> = never,
> = {
  [key in keyof WithArray<T> as key extends SensitiveKeys
    ? never
    : key]: WithArray<T>[key];
};

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
};

export type SuccessResponse<
  T = never,
  SensitiveKeys extends keyof WithArray<T> = never,
> = MessageResponse &
  ([T] extends [never]
    ? { success: true }
    : {
        success: true;
        data: WithoutSensitive<T, SensitiveKeys>;
      });

export type SuccessResponseWithUser = SuccessResponse<User, "password">;
export type SuccessResponseWithUserId = SuccessResponse<UserWithId, "password">;
export type SuccessResponseWithUsers = SuccessResponse<User[], "password">;
