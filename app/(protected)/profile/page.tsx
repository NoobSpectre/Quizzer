import { SignOutButton } from '@/components/ui';
import { authOptions } from '@/lib/auth/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const Profile = async () => {
  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect('/auth/signin');
  // }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-6xl">Welcome to your profile.</h1>
      <SignOutButton />
    </div>
  );
};

export default Profile;
