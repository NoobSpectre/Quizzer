import { AuthLayoutSection } from '@/components/auth';
import { Paper } from '@mantine/core';
import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex justify-center items-center overflow-hidden bg-slate-700 px-6">
      <Paper
        shadow="lg"
        className="relative h-[48rem] sm:h-[38rem] w-[56rem] overflow-hidden"
        style={{ backgroundColor: '#fff' }}
      >
        <AuthLayoutSection />

        <main className="h-full grid sm:grid-cols-2 -z-10">
          {children}
        </main>
      </Paper>
    </div>
  );
};

export default AuthLayout;
