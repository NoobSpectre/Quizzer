import { preparedFindUserById } from '@/lib/db';
import { notFound } from 'next/navigation';

const UserDashboard = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const user = await preparedFindUserById.execute({ id });

  if (!user) {
    notFound();
  }

  return (
    <div>
      <h1>Welcome to your dashboard</h1>
      <p>Id: {id}</p>
    </div>
  );
};

export default UserDashboard;
