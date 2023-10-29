import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { DefaultSession, NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { db } from '../db';
import { eq } from 'drizzle-orm';

declare module 'next-auth' {
  type Session = DefaultSession & {
    user: { id: string } & DefaultSession['user'];
  };
}

declare module 'next-auth/jwt' {
  type JWT = {
    id: string;
  };
}

export const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: DrizzleAdapter(db),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    jwt: async ({ token }) => {
      console.log(token)

      const db_user = await db.query.users.findFirst({
        // where: eq(users.email, token?.email || '')
      })

      return token;
    },
  },
};
