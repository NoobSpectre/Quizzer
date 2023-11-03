import { DrizzleAdapter } from '@auth/drizzle-adapter';
import bcrypt from 'bcrypt';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { cookies } from 'next/headers';
import { db, preparedFindUserByEmail } from '../db';

export const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: DrizzleAdapter(db),
  pages: {
    signIn: '/auth/signin',
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: { email: {}, password: {} },
      authorize: async credentials => {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await preparedFindUserByEmail.execute({
          email: credentials.email,
        });

        if (!user) return null;

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password || ''
        );

        if (!passwordMatch) return null;

        return user;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token }) => {
      const db_user = await preparedFindUserByEmail.execute({
        email: token.email,
      });

      if (db_user) {
        token.id = db_user.id;
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.id = token.id;
      }

      return session;
    },
  },
};
