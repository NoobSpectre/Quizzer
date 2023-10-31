'use client';

import { Button } from '@mantine/core';
import Link from 'next/link';

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  return (
    <div className="h-screen">
      <div className="h-full max-w-[400px] grid place-content-center gap-5"></div>
      <h1>An unexpected error occured</h1>
      <div className="w-full flex justify-stretch gap-5">
        <Button
          size="md"
          style={{
            background: 'linear-gradient(to right, #E50000, #210080)',
            border: 0,
          }}
        >
          Try again
        </Button>
        <Button
          component={Link}
          href="/"
          size="md"
          style={{
            background: 'linear-gradient(to right, #E50000, #210080)',
            border: 0,
          }}
        >
          Go back to home page
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
