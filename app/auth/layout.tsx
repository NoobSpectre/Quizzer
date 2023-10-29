import { LeftSection } from '@/components/auth';
import { Paper } from '@mantine/core';
import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex justify-center items-center overflow-hidden bg-slate-700 px-6">
      <Paper
        shadow="lg"
        className="h-[48rem] sm:h-[38rem] w-[56rem] overflow-hidden"
      >
        <main className="h-full bg-amber-300">
          <LeftSection />

          <section>{children}</section>
        </main>
      </Paper>
    </div>
  );
};

export default AuthLayout;
