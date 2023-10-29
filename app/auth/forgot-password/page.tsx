'use client';

import { FormButton } from "@/components/ui";
import Link from "next/link";

const ForgotPassword = () => {
  return <div className="w-[52%] flex flex-col items-center p-8 gap-y-8">
  <div className="text-center">
    <h2 className="text-[2rem] font-semibold text-black">
      Welcome back <span className="italic">Quizzer</span> !
    </h2>
  </div>

  {/* signin form container */}
  <div className="h-[20rem] w-full px-3 py-1 flex flex-col items-center gap-6">
    {/* user image container */}
    <div className="w-24 aspect-square rounded-sm shadow-md overflow-hidden"></div>

    {/* signin form */}
    <form className="relative flex flex-col bg-emerald-50 w-full gap-6">
      {/* user details */}
      <div className="w-full my-auto flex flex-col gap-4">
        <div className="">
          <label htmlFor="email"></label>
          <input id="email" type="text" className="w-full px-3 py-2" />
        </div>
        <div className="">
          <label htmlFor="password"></label>
          <input id="password" type="text" className="w-full px-3 py-2" />
        </div>
      </div>

      {/* submit btn container */}
      <div className="w-full flex justify-center">
        <FormButton>Sign in</FormButton>
      </div>
    </form>
  </div>
</div>;
};

export default ForgotPassword;
