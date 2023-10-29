'use client';

import { FormInput } from '@/components/form';
import { CompanyButton, FormButton } from '@/components/ui';
import { Divider } from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';

const Signin = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-[52%] flex flex-col items-center p-16 gap-y-6 ">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-black">
          Welcome back <span className="italic text-3xl">Quizzer</span>
          <span className="text-3xl"> !</span>
        </h2>
      </div>

      {/* signin form container */}
      <div className="max-h-96 w-full px-3 py-1 flex flex-col items-center">
        {/* signin form */}
        <form className="flex flex-col w-full gap-5 mt-5">
          {/* user details */}
          <div className="w-full my-auto flex flex-col gap-8">
            <FormInput
              type="text"
              label="Email"
              id="email"
              categoryRight="email"
            />
            <FormInput
              type={show ? 'text' : 'password'}
              label="Password"
              id="password"
              categoryRight="password"
              onRightBtnClick={() => setShow(prev => !prev)}
            />
          </div>

          {/* forgot password */}
          <div className="flex justify-between items-center text-xs font-medium">
            <p className="flex gap-x-1">
              <span className="pointer-events-none">New Quizzer?</span>
              <Link
                href="/auth/signup"
                className="text-xs font-medium hover:underline hover:underline-offset-2"
              >
                Sign up
              </Link>
            </p>
            <Link
              href="/auth/forgot-password"
              className="hover:underline hover:underline-offset-2"
            >
              Forgot password?
            </Link>
          </div>

          {/* submit btn container */}
          <div className="w-full flex justify-center pt-2">
            <FormButton>Sign in</FormButton>
          </div>
        </form>
      </div>

      <div className="w-full px-3">
        <Divider my="xs" label="or sign in with" orientation="horizontal" />
      </div>

      <div className="w-full grid grid-flow-col justify-stretch px-3 py-1 gap-x-5">
        <CompanyButton company="Google" />
        <CompanyButton company="Github" />
      </div>
    </div>
  );
};

export default Signin;
