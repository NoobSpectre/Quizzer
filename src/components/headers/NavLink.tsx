import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type NavlinkProps = {
  path: string;
  className?: string;
  children: ReactNode;
};

export const Navlink = ({ className, path, children }: NavlinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={cn(
        'relative px-2 py-1 rounded transition-[background-color] hover:bg-muted focus:outline-none focus-visible:bg-muted isolate before:absolute before:inset-0 before:rounded-md before:-z-10 before:blur-none before:transition-[filter]',
        className,
        {
          'bg-muted before:bg-gradient-app focus-visible:before:rounded focus-visible:before:blur-[2px] hover:before:rounded hover:before:blur-[2px]':
            pathname === path,
        }
      )}
    >
      <span
        className={cn('font-semibold', {
          'text-gradient-app': pathname === path,
        })}
      >
        {children}
      </span>
    </Link>
  );
};
