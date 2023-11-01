import { AuthLayoutSection } from '@/components/auth';
import { authOptions } from '@/lib/auth/authOptions';
import { Paper } from '@mantine/core';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
  }

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
