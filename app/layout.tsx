import { Header } from '@/components/header';
import { ColorSchemeScript } from '@mantine/core';
import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Providers from './providers/providers';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Quizzer',
  description:
    'Created using Nextjs and poweredby OpenAI. Test your knowledge on various topics you like to test yourself upon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={poppins.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
