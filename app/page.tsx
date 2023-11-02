'use client';

import { welcomeUser } from '@/lib/utils';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const Home = () => {
  const { data: session } = useSession();

  useEffect(() => {
    welcomeUser(session?.user.isNew, session?.user.name);
  }, [session?.user.isNew, session?.user.name]);

  return (
    <main className="flex flex-col items-center mt-2">
      <div className="bg-amber-300">Quizzer home page</div>
    </main>
  );
};

export default Home;
