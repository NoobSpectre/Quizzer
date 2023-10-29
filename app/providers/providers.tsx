'use client';

import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import { SessionProvider } from 'next-auth/react';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider defaultColorScheme="dark">
      <SessionProvider>{children}</SessionProvider>
    </MantineProvider>
  );
};

export default Providers;
