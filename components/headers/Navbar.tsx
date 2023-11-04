'use client';

import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="hidden sm:flex items-center gap-3 text-sm">
      <div className="">
        <Link href="/">Home</Link>
      </div>
      <div className="">
        <Link href="/about">About</Link>
      </div>
      <div className="">
        <Link href="/profile/1">Profile</Link>
      </div>
    </nav>
  );
};
