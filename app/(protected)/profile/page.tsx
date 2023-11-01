import { SignOutButton } from '@/components/ui';

const Profile = async () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-6xl">Welcome to your profile.</h1>
      <SignOutButton />
    </div>
  );
};

export default Profile;
