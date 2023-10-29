'use client';

import { Button } from '@mantine/core';
import { ReactNode } from 'react';

export const FormButton = ({ children }: { children: ReactNode }) => {
  return (
    <Button
      radius="xl"
      variant="gradient"
      gradient={{ from: '#E50000', to: '#210080', deg: 90 }}
      style={{
        fontWeight: 'normal',
        width: '50%'
      }}
    >
      {children}
    </Button>
  );
};
