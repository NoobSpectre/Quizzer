import { usernameSchema } from "@/api/users/model";
import { z } from "zod";

const username_paramSchema = z.object({
  username: usernameSchema,
});

export type UsernameParams = z.infer<typeof username_paramSchema>;

type ValidateParams = {
  username?: 1;
};

export const validateParams = ({ username }: ValidateParams) => {
  const validationSchema = z.object({});

  if (username) {
    validationSchema.merge(username_paramSchema);
  }

  return validationSchema;
};
