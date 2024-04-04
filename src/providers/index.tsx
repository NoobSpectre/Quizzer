"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";
import { ThemeProvider } from "./Themeprovider";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <ClerkProvider
        publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      >
        {children}
      </ClerkProvider>
    </ThemeProvider>
  );
};

export default Provider;
