'use client';

import { FormInput } from '@/components/form';
import { FormNavigation } from '@/components/form/FormNavigation';
import { FormHeader } from '@/components/headers';
import { CompanyButton, FormButton } from '@/components/ui';
import { Divider } from '@mantine/core';
import { useState } from 'react';

const Signin = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="sm:col-start-2">
      <div className="@container h-full max-w-[400px] mx-auto flex flex-col items-center justify-center px-1 sm:px-3 md:px-6 gap-y-6">
        <FormHeader formType="signin" />

        {/* signin form container */}
        <div className="max-h-96 w-full px-3 py-1 flex flex-col items-center">
          {/* signin form */}
          <form className="flex flex-col w-full gap-5 mt-4">
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

            {/* go to sign up form */}
            <FormNavigation
              to="/auth/signup"
              linkText="sign up"
              linkLabel="New Quizzer?"
              forgotPassword="include"
              className="text-[0.6rem] @[16.88rem]:text-xs"
            />

            {/* submit btn container */}
            <div className="w-full flex justify-center pt-2">
              <FormButton>Sign in</FormButton>
            </div>
          </form>
        </div>

        <div className="w-full px-3">
          <Divider
            my="xs"
            label="or sign in with"
            orientation="horizontal"
            color="#64748b"
          />
        </div>

        <div className="w-full grid grid-flow-col justify-stretch px-3 py-1 gap-x-5">
          <CompanyButton company="Google" />
          <CompanyButton company="Github" />
        </div>
      </div>
    </div>
  );
};

export default Signin;
