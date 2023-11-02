'use server';

import { db, preparedFindUserByEmail } from '@/lib/db';
import { users } from '@/lib/db/schema';
import { userSignInSchema, userSignUpSchema } from '@/lib/models/schema';
import { UserSignInSchema, UserSignUpSchema } from '@/lib/models/types';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

// signup action
export const signupAction = async (data: UserSignUpSchema) => {
  const parsedData = userSignUpSchema.safeParse(data);

  if (!parsedData.success) {
    const { formErrors } = parsedData.error.flatten();
    return { success: false, message: formErrors[0] };
  }

  const { name, email, password } = parsedData.data;

  try {
    const existingUser = await preparedFindUserByEmail.execute({ email });

    if (existingUser)
      return { success: false, message: `Email already exists!` };

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = {
      id: uuid(),
      email,
      name,
      password: hashedPassword,
    };

    await db.insert(users).values(newUser);

    return {
      success: true,
      user: { email, password },
      message: `Welcome ${name} 🎉`,
    };
  } catch (error) {
    return {
      success: false,
      message: `Something went wrong! Please try again later.`,
    };
  }
};

// signin action
export const signinAction = async (data: UserSignInSchema) => {
  const parsedData = userSignInSchema.safeParse(data);

  if (!parsedData.success) {
    const { formErrors } = parsedData.error.flatten();
    return { success: false, message: formErrors[0] };
  }

  try {
    const user = await preparedFindUserByEmail.execute({
      email: parsedData.data.email,
    });

    if (!user) return { success: false, message: 'Account does not exist!' };

    const passwordMatch = await bcrypt.compare(
      parsedData.data.password,
      user.password || ''
    );

    if (!passwordMatch) return { success: false, message: 'Wrong password!' };

    return {
      success: true,
      user: parsedData.data,
      message: `Welcome back ${user?.name || 'user'} 🎉`,
    };
  } catch (error) {
    return {
      success: false,
      message: `Something went wrong! Please try again.`,
    };
  }
};
