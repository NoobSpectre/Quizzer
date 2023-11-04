'use client';

import Image from 'next/image';
import Link from 'next/link';

export const HeaderTitle = () => {
  return (
    <Link href="/" className="flex justify-center items-center xl:ml-10">
      <Image
        src="/logo.svg"
        alt="logo"
        width={40}
        height={40}
        className="object-contain"
      />
      <h1 className="text-4xl font-bold">Quizzer</h1>
    </Link>
  );
};
