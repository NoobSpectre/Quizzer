import { Header } from '@/components/headers';
import { ColorSchemeScript } from '@mantine/core';
import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Providers from '../providers';
import './globals.css';

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
        <Toaster />
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
