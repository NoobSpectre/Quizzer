'use client';

import {
  CompanyButton,
  FormButton,
  HomeButton,
} from '@/components/customButtons';
import { FormInput, FormSeparator } from '@/components/form';
import { FormNavigation } from '@/components/form/FormNavigation';
import { FormHeader } from '@/components/headers';
import { userSignInSchema } from '@/lib/models/schema';
import { UserSignInSchema } from '@/lib/models/types';
import { submitForm } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Signin = () => {
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserSignInSchema>({
    resolver: zodResolver(userSignInSchema),
  });

  return (
    <div className="sm:col-start-2">
      <div className="@container h-full max-w-[400px] mx-auto flex flex-col items-center justify-center px-1 sm:px-3 md:px-6 gap-y-6">
        <FormHeader formType="signin" />

        {/* signin form container */}
        <div className="max-h-96 w-full px-3 py-1 flex flex-col items-center">
          {/* signin form */}
          <form
            onSubmit={handleSubmit(async data => {
              const { success, user } = await submitForm(data, 'signin');
              if (success) signIn('credentials', { ...user });
            })}
            className="flex flex-col w-full gap-7 mt-4"
          >
            {/* user details */}
            <div className="w-full my-auto flex flex-col gap-8">
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
            </div>

            {/* go to sign up form */}
            <FormNavigation
              to="/auth/signup"
              linkText="sign up"
              linkLabel="New Quizzer?"
              forgotPassword="include"
              className="text-[0.6rem] @3xs:text-xs"
            />

            {/* submit btn container */}
            <FormButton loading={isSubmitting}>Sign in</FormButton>
          </form>
        </div>

        {/* sepatator btn submit btn and auth btns */}
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

export default Signin;
