'use client';

import { Button } from '@/components/ui';
import Link from 'next/link';

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  return (
    <html>
      <body className="h-screen">
        <div className="h-full max-w-[450px] grid place-content-center gap-5"></div>
        <h1>Something went wrong!</h1>
        <div className="w-full flex justify-stretch gap-5">
          <Button
            // size="md"
            style={{
              background: 'linear-gradient(to right, #E50000, #210080)',
              border: 0,
            }}
            onClick={reset}
          >
            Try again
          </Button>
          <Button
            // component={Link}
            // href="/"
            // size="md"
            style={{
              background: 'linear-gradient(to right, #E50000, #210080)',
              border: 0,
            }}
          >
            Go back to home page
          </Button>
        </div>
      </body>
    </html>
  );
};

export default ErrorPage;
