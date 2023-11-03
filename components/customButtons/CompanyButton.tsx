'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';

export const CompanyButton = ({
  company,
  disabled,
}: {
  company: string;
  disabled?: boolean;
}) => {
  const authProvider = company.toLowerCase();

  return (
    <button
      disabled={disabled}
      className="@container flex justify-center items-center gap-2 bg-gray-300 px-2 py-1 rounded shadow hover:shadow-md focus:outline-none focus:shadow-md active:scale-95 disabled:cursor-not-allowed"
      onClick={() => signIn(authProvider)}
    >
      <Image
        src={`/${company.toLowerCase()}Icon.svg`}
        alt="Google icon"
        height={25}
        width={25}
        className="object-contain"
      />
      <span className="hidden @[5.8rem]:block text-slate-700 text-lg font-medium">
        {company}
      </span>
    </button>
  );
};
