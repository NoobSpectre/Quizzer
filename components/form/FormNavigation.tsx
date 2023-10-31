'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';

type FormNavigationProps = {
  to?: string;
  linkText?: string;
  linkLabel?: string;
  className?: string;
  forgotPassword?: 'include';
};

export const FormNavigation = ({
  to,
  linkText,
  linkLabel,
  className,
  forgotPassword,
}: FormNavigationProps) => {
  return (
    // other page links container
    <div
      className={cn(
        'flex justify-between items-center font-medium text-slate-700 text-xs',
        className
      )}
    >
      {/* go to sign in page */}
      <p className="flex gap-x-0.5">
        <span className="pointer-events-none">
          {linkLabel ? `${linkLabel}` : 'linklabel'}
        </span>
        <Link
          href={to ? to : '/'}
          className="font-medium italic hover:underline hover:underline-offset-2 text-red-600"
        >
          {linkText ? `${linkText}` : 'linktext'}
        </Link>
      </p>

      {/* forgot password */}
      {forgotPassword ? (
        <Link
          href="/auth/forgot-password"
          className="italic hover:underline hover:underline-offset-2 text-indigo-700"
        >
          Forgot password?
        </Link>
      ) : null}
    </div>
  );
};
