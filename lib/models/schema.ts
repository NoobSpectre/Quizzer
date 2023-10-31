import { z } from 'zod';

export const userSignUpSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, 'Name is required.')
      .min(5, 'Name must be atleast 5 characters.')
      .max(30, 'Name limited to 30 characters.'),
    email: z
      .string()
      .trim()
      .min(1, 'Email is required.')
      .email('Invalid email'),
    password: z
      .string()
      .trim()
      .min(1, 'Password is required.')
      .min(6, 'Password must be atleast 6 characters.')
      .max(16, 'Password limited to 16 characters.'),
    confirmpassword: z.string().trim(),
  })
  .refine(data => data.password === data.confirmpassword, {
    message: 'Both passwords must match.',
    path: ['confirmpassword'],
  });

// export const requiredUser = userSignUpSchema

export const userSignInSchema = z.object({
  email: z
    .string({ required_error: 'Field cannot be empty' })
    .email('Invalid email')
    .trim(),
  password: z.string({ required_error: 'Field cannot be empty' }).trim(),
});
