'use client';

import { deleteCookie, getCookie } from 'cookies-next';
import { SessionProvider } from 'next-auth/react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const Providers = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const loggedIn = getCookie('loggedIn');
    if (loggedIn === 'true') {
      toast(`Welcome 🎉`);
      deleteCookie('loggedIn');
    }
  }, []);

  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
