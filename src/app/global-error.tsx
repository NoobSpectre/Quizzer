"use client";

import { Button } from "@/components/ui";
import Link from "next/link";

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  return (
    <html>
      <body className="h-screen">
        <div className="h-full max-w-[450px] grid place-content-center gap-5">
          <h1>Something went wrong!</h1>
          <div className="w-full flex justify-stretch gap-5">
            <Button
              size="sm"
              className="bg-gradient-to-r from-gradient-red to-gradient-blue"
              onClick={reset}
            >
              Try again
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-gradient-red to-gradient-blue"
              asChild
            >
              <Link href="/">Go back to home page</Link>
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
};

export default ErrorPage;
