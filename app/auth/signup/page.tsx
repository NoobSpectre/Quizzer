'use client';

import { FormButton } from '@/components/ui';

const Signup = () => {
  return (
    <div className="w-[52%] flex flex-col items-center p-8 gap-20">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-black">
          Welcome <span className="italic text-3xl">Quizzer</span>
          <span className="text-3xl"> !</span>
        </h2>
      </div>

      {/* signup form */}
      <div className="h-80 w-full px-10">
        <form className="relative h-full flex flex-col">
          {/* user image input container */}
          <div className="absolute h-24 aspect-square mx-auto left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm shadow-md overflow-hidden"></div>

          {/* user details */}
          <div className="w-full my-auto"></div>

          {/* submit btn container */}
          <div className="w-full flex justify-center">
            <FormButton>Sign up</FormButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
