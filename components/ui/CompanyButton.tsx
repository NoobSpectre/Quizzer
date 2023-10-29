'use client';

import { Button } from '@mantine/core';
import Image from 'next/image';

export const CompanyButton = ({ company }: { company: string }) => {
  return (
    <Button
      radius="xl"
      variant="filled"
      color="#dfe6f0"
      size="lg"
      style={{
        boxShadow:
          '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      }}
    >
      <Image
        src={`/${company.toLocaleLowerCase()}Icon.svg`}
        alt="Google icon"
        height={25}
        width={25}
        className="object-contain"
      />
      <span className="text-slate-700 text-lg font-medium">{company}</span>
    </Button>
  );
};
