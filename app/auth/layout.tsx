import { AuthLayoutSection } from '@/components/auth';
import { Paper } from '@mantine/core';
import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="@container h-full flex justify-center items-center overflow-hidden bg-slate-700
    "
    >
      <Paper
        shadow="lg"
        className="relative h-[38rem] w-[56rem] overflow-hidden mx-4 @2xs:mx-6"
        style={{ backgroundColor: '#fff' }}
      >
        <AuthLayoutSection />

        <main className="h-full grid sm:grid-cols-2 -z-10">{children}</main>
      </Paper>
    </div>
  );
};

export default AuthLayout;
