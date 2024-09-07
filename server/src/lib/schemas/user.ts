import { isBefore, isValid, subYears } from "date-fns";
import { z } from "zod";

export const MIN_AGE = 10;
export const MAX_AGE = 101;

export const verifyDob = (date: string, ageLimit = MIN_AGE) => {
  if (!isValid(date)) return false;

  const ageLimitYearsAgo = subYears(new Date(), ageLimit);

  const dob = new Date(date);

  return (
    isBefore(dob, ageLimitYearsAgo) ||
    dob.getTime() === ageLimitYearsAgo.getTime()
  );
};

export const genderEnum = ["Male", "Female", "Non-Binary", "Other"] as const;

export const userSchema = z
  .object({
    username: z
      .string()
      .min(4, "Username must be atleast 4 characters long.")
      .max(16, "Username must be less than 16 characters long."),
    password: z
      .string()
      .min(6, "Password cannot be less than 6 characters.")
      .max(16, "Password cannot be more than 16 characters.")
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
      ),
    email: z.string().email("Invalid email."),
    phone: z
      .string() // phone length min 8 and max 10 starting with either 6, 7, 8 or 9
      .regex(/^[6789]\d{7,10}$/, "Invalid phone number."),
    age: z
      .number()
      .min(MIN_AGE, "Age must be at least 10")
      .max(MAX_AGE, "Age must be at most 101"),
    dob: z
      .string()
      .date()
      .refine(dob => verifyDob(dob, MIN_AGE), {
        message: `Date of birth must be at most ${MIN_AGE} years ago.`,
      })
      .refine(dob => verifyDob(dob, MAX_AGE), {
        message: `Date of birth must be no more than ${MAX_AGE} years ago.`,
      }),
    gender: z.enum(genderEnum),
    address: z
      .object({
        street: z.string(),
        state: z.string().min(1, "Please provide the name of your state."),
        country: z.string().min(1, "Please provide your country name."),
      })
      .partial({ street: true }),
    imageUrl: z.string().default(""),
  })
  .partial({
    dob: true,
    email: true,
    phone: true,
    gender: true,
    imageUrl: true,
  });

export type UserSchema = z.infer<typeof userSchema>;
