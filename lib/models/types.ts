import { userSignInSchema, userSignUpSchema } from '@/lib/models/schema';
import { z } from 'zod';

export type UserSignUpSchema = z.infer<typeof userSignUpSchema>;
export type UserSignInSchema = z.infer<typeof userSignInSchema>;
