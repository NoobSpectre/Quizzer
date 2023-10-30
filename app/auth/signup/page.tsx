'use client';

import { FormInput } from '@/components/form';
import { FormNavigation } from '@/components/form/FormNavigation';
import { FormHeader } from '@/components/headers';
import { CompanyButton, FormButton } from '@/components/ui';
import { Divider } from '@mantine/core';
import { useState } from 'react';

const Signup = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="sm:col-start-2">
      <div className="@container h-full w-full flex flex-col items-center justify-center sm:px-3 md:px-6 gap-y-5">
        <FormHeader formType="signup" />

        {/* signin form container */}
        <div className="max-h-96 w-full px-3 py-1 flex flex-col items-center">
          {/* signin form */}
          <form className="flex flex-col w-full gap-5 mt-3">
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
              <FormInput
                type={show ? 'text' : 'password'}
                label="Confirm Password"
                id="confirmpassword"
                categoryRight="password"
                onRightBtnClick={() => setShow(prev => !prev)}
              />
            </div>

            {/* go to sign in form */}
            <FormNavigation
              to="/auth/signin"
              linkText="sign in"
              linkLabel="Already a Quizzer?"
            />

            {/* submit btn container */}
            <div className="w-full flex justify-center pt-1">
              <FormButton>Sign up</FormButton>
            </div>
          </form>
        </div>

        <div className="w-full px-3">
          <Divider
            my="xs"
            label="or sign up with"
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

export default Signup;
