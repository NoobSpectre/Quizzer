'use client';

import { Button } from '@mantine/core';
import { ReactNode } from 'react';

export const FormButton = ({ children }: { children: ReactNode }) => {
  return (
    <Button
      variant="gradient"
      size="md"
      gradient={{ from: '#E50000', to: '#210080', deg: 90 }}
      style={{
        fontWeight: 'normal',
        width: '60%',
        boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        filter:
          'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',
      }}
    >
      {children}
    </Button>
  );
};
