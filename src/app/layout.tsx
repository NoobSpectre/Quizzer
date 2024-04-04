import { cn } from "@/lib/utils";
import Provider from "@/providers";
import type { Metadata } from "next";
import { Public_Sans, Space_Mono } from "next/font/google";
import { Header } from "./Header";

import "./globals.css";

const space_mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-primary",
});

const public_sans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "Quizzer",
  description: "Powered by OpenAI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${space_mono.variable} ${public_sans.variable}`}
    >
      <body className={cn("w-full overflow-x-hidden")}>
        <Provider>
          <Header />
          {/* <main className="grid justify-center">{children}</main> */}
          {children}
        </Provider>
      </body>
    </html>
  );
}
