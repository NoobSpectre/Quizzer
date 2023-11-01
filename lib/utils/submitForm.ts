import { signinAction, signupAction } from '@/app/_actions';
import toast from 'react-hot-toast';
import {
  UserParentSchema,
  UserSignInSchema,
  UserSignUpSchema,
} from '../models/types';

type Action = 'signup' | 'signin';

type ActionResponse = {
  success: boolean;
  message: string;
  user?: Pick<UserParentSchema, 'email' | 'password'>;
};

export const submitForm = async (
  data: Partial<UserSignUpSchema>,
  action: Action
) => {
  let response: ActionResponse;

  switch (action) {
    case 'signup':
      response = await signupAction(data as UserSignUpSchema);
      break;
    case 'signin':
      response = await signinAction(data as UserSignInSchema);
      break;
    default:
      response = {
        success: false,
        message: 'Something went wrong! Please try again later.',
      };
  }

  if (!response.success) {
    toast.error(response.message);
    return { success: false };
  }

  toast.success(response.message);
  return { success: true, user: response.user };
};
