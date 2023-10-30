'use client';

import { Button } from '@mantine/core';
import Image from 'next/image';

export const CompanyButton = ({ company }: { company: string }) => {
  return (
    <Button variant="filled" color="#dfe6f0" className='@container'>
      <Image
        src={`/${company.toLocaleLowerCase()}Icon.svg`}
        alt="Google icon"
        height={25}
        width={25}
        className="object-contain"
      />
      <span className="hidden @[5.8rem]:block text-slate-700 text-lg font-medium">{company}</span>
    </Button>
  );
};
