'use client';

import {
  CompanyButton,
  FormButton,
  HomeButton,
} from '@/components/customButtons';
import { FormInput, FormNavigation, FormSeparator } from '@/components/form';
import { FormHeader } from '@/components/headers';
import { userSignUpSchema } from '@/lib/models/schema';
import { UserSignUpSchema } from '@/lib/models/types';
import { submitForm } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Signup = () => {
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserSignUpSchema>({
    resolver: zodResolver(userSignUpSchema),
  });

  return (
    <div className="sm:col-start-2">
      <div className="@container h-full max-w-[400px] mx-auto flex flex-col items-center justify-center px-1 sm:px-3 md:px-6 gap-y-3">
        <FormHeader formType="signup" wrapperStyles="mb-2" />

        {/* signin form container */}
        <div className="max-h-96 w-full px-3 flex flex-col items-center">
          {/* signin form */}
          <form
            onSubmit={handleSubmit(async (data: UserSignUpSchema) => {
              const { success, user } = await submitForm(data, 'signup');
              if (success) signIn('credentials', { ...user });
            })}
            className="flex flex-col w-full gap-5 mt-1"
          >
            {/* user details */}
            <div className="w-full my-auto flex flex-col gap-7">
              <FormInput
                type="text"
                label="Name"
                id="name"
                rightCategory="name"
                register={register('name')}
                error={errors?.name?.message}
              />
              <FormInput
                type="text"
                label="Email"
                id="email"
                rightCategory="email"
                register={register('email')}
                error={errors?.email?.message}
              />
              <FormInput
                type={show ? 'text' : 'password'}
                label="Password"
                id="password"
                rightCategory="password"
                onRightBtnClick={() => setShow(prev => !prev)}
                register={register('password')}
                error={errors?.password?.message}
              />
              <FormInput
                type={show ? 'text' : 'password'}
                label="Confirm Password"
                id="confirmpassword"
                rightCategory="password"
                onRightBtnClick={() => setShow(prev => !prev)}
                register={register('confirmpassword')}
                error={errors?.confirmpassword?.message}
              />
            </div>

            {/* go to sign in form */}
            <FormNavigation
              to="/auth/signin"
              linkText="sign in"
              linkLabel="Already a Quizzer?"
            />

            {/* submit btn container */}
            <FormButton loading={isSubmitting}>Sign up</FormButton>
          </form>
        </div>

        {/* divider submit btn and auth btns */}
        <div className="w-full px-3">
          <FormSeparator label="or sign in with" />
        </div>

        {/* auth provider buttons */}
        <div className="w-full grid grid-flow-col justify-stretch px-3 py-1 gap-x-5">
          <CompanyButton company="Google" disabled={isSubmitting} />
          <CompanyButton company="Github" disabled={isSubmitting} />
        </div>

        {/* go back home container */}
        <HomeButton />
      </div>
    </div>
  );
};

export default Signup;
