import { SignOutButton } from '@/components/customButtons';
import { ReactNode } from 'react';

const Profile = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-6xl">Welcome to your profile.</h1>

      <main className="m-6">{children}</main>

      <SignOutButton />
    </div>
  );
};

export default Profile;
