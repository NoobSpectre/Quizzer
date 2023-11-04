import { cn } from '@/lib/utils';
import { Home, Info, Sword, Swords } from 'lucide-react';
import Link from 'next/link';

type SidebarLinkProps = {
  link: string;
  label: string;
  currentPath: boolean;
  className?: string;
  onclick: () => void;
};

export const SidebarLink = ({
  link,
  label,
  currentPath,
  className,
  onclick,
}: SidebarLinkProps) => {
  const NavlinkIcon = {
    home: <Home className="absolute h-4 w-4 top-[1.2px]" />,
    about: <Info className="absolute h-4 w-4 top-[1.2px]" />,
    single: <Sword className="absolute h-4 w-4 top-[1.2px]" />,
    multiplayer: <Swords className="absolute h-4 w-4 top-[1.2px]" />,
  };

  return (
    <Link
      href={link}
      className={cn(
        'group flex gap-3 hover:bg-secondary text-primary text-sm py-2 pl-3 rounded',
        className,
        {
          'bg-secondary': currentPath,
        }
      )}
      onClick={onclick}
    >
      <div className="relative h-5 w-5">
        {NavlinkIcon[label.toLowerCase() as keyof typeof NavlinkIcon]}
      </div>
      <div
        className={cn('opacity-70 group-hover:opacity-100 w-full', {
          'opacity-100': currentPath,
        })}
      >
        {label}
      </div>
    </Link>
  );
};
