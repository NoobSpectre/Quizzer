'use client';

import { Loader2 } from 'lucide-react';
import { ReactNode } from 'react';
import { Button } from '../ui';

export const FormButton = ({
  disabled,
  loading,
  children,
}: {
  disabled?: boolean;
  loading?: boolean;
  children: ReactNode;
}) => {
  // toast a promise when loading is true

  return (
    <div className="w-full flex justify-center">
      <Button
        type="submit"
        size="sm"
        disabled={loading || disabled}
        className="w-[60%] bg-gradient-to-r from-gradient-red to-gradient-blue disabled:select-none drop-shadow-xl"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </>
        ) : (
          <>{children}</>
        )}
      </Button>
    </div>
  );
};
