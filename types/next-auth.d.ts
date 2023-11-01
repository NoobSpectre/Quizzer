import 'next-auth';

declare module 'next-auth' {
  interface Session extends DefaultSession['user'] {
    user: {
      id: string;
      name: string;
      email: string;
      password: string;
      image: string;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    email: string;
  }
}
