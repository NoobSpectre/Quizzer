import { AuthLayoutSection } from '@/components/auth';
import { authOptions } from '@/lib/auth/authOptions';
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
      className="@container h-screen flex justify-center items-center overflow-hidden bg-slate-700
    "
    >
      {/* <Paper
        shadow="lg"
        className="relative h-[38rem] w-[56rem] overflow-hidden mx-4 @2xs:mx-6"
        style={{ backgroundColor: '#fff' }}
      > */}
      <div className="relative h-[38rem] w-[56rem] overflow-hidden bg-white mx-4 @2xs:mx-6 border border-slate-700 shadow-lg rounded">
        <AuthLayoutSection />

        <main className="h-full grid sm:grid-cols-2 -z-10">{children}</main>
      </div>
      {/* </Paper> */}
    </div>
  );
};

export default AuthLayout;
