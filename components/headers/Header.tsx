'use client';

import { cn } from '@/lib/utils';
import { ChevronRight, LayoutList, Menu } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../ui';
import { HeaderTitle } from './HeaderTitle';
import { Navbar } from './Navbar';
import { ProfileHeader } from './ProfileHeader';
import { SidebarLink } from './SidebarLink';

export const Header = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  const [sheetOpen, setSheetOpen] = useState(false);
  const [modesOpen, setModesOpen] = useState(
    pathname === '/single' || pathname === '/multiplayer'
  );

  const handleSheetClose = () => setSheetOpen(false);
  const closesheetAndModes = () => {
    setSheetOpen(false);
    setModesOpen(false);
  };

  return (
    <header
      className={cn('py-2 border-b-2 px-4 bg-amber-300 flex justify-between', {
        hidden: pathname.includes('/auth'),
      })}
    >
      <HeaderTitle />
      <Navbar />

      <div className="hidden sm:flex items-center gap-4">
        <div className="">
          <Link href="/auth/signin">Sign in</Link>
        </div>
        <div className="">
          <Link href="/auth/signup">Sign up</Link>
        </div>
      </div>

      {/* Mobile View Sidebar */}
      <Sheet open={sheetOpen} onOpenChange={val => setSheetOpen(val)}>
        <SheetTrigger
          asChild
          onClick={() => setSheetOpen(true)}
          className="sm:hidden"
        >
          <div className="flex items-center cursor-pointer">
            <Menu strokeWidth={1.75} />
          </div>
        </SheetTrigger>
        <SheetContent
          side="top"
          className="flex flex-col gap-2 w-full sm:hidden outline-none rounded-b-xl"
        >
          {session ? (
            <ProfileHeader
              id={session.user.id}
              name={session.user.name}
              image={session.user.image}
              onclick={closesheetAndModes}
            />
          ) : null}

          {/* Home Navlink */}
          <SidebarLink
            link="/"
            label="Home"
            currentPath={pathname === '/'}
            onclick={closesheetAndModes}
          />

          {/* About Navlink */}
          <SidebarLink
            link="/about"
            label="About"
            currentPath={pathname === '/about'}
            onclick={closesheetAndModes}
          />

          {/* Modes Dropdown Menu */}
          <div
            className={cn('flex flex-col text-primary text-sm rounded gap-2')}
          >
            <div
              className="group flex gap-3 hover:bg-secondary py-2 pl-3 cursor-pointer select-none"
              onClick={() => setModesOpen(prev => !prev)}
            >
              <div className="relative h-5 w-5">
                <LayoutList className="absolute h-4 w-4 top-[1.2px]" />
              </div>
              <div
                className={cn('flex gap-2 opacity-70 group-hover:opacity-100', {
                  'opacity-100':
                    pathname === '/single' || pathname === '/multiplayer',
                })}
              >
                Modes
                <span className="flex items-center">
                  <ChevronRight
                    className={cn(
                      `h-3.5 w-3.5 ${modesOpen ? 'rotate-90' : 'rotate-0'}`
                    )}
                  />
                </span>
              </div>
            </div>
            <div
              className={cn(
                `flex-col ml-7 gap-2 ${modesOpen ? 'flex' : 'hidden'}`
              )}
            >
              <SidebarLink
                link="/single"
                label="Single"
                currentPath={pathname === '/single'}
                onclick={handleSheetClose}
              />
              <SidebarLink
                link="/multiplayer"
                label="Multiplayer"
                currentPath={pathname === '/multiplayer'}
                onclick={handleSheetClose}
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};
