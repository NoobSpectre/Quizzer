"use client";

import { GithubSVG, ModeToggle, Navlink } from "@/components/headers";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { useScroll } from "framer-motion";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAVBAR_ITEMS = [
  {
    linkTag: "Home",
    path: "/",
  },
  {
    linkTag: "Dashboard",
    path: "/dashboard",
  },
  {
    linkTag: "About",
    path: "/about",
  },
];

export const Header = () => {
  const [scrolledDown, setScrolledDown] = useState(false);

  const { scrollY } = useScroll();
  const pathname = usePathname();

  useEffect(() => {
    const showShadow = () => {
      if (scrollY.get() == 0) setScrolledDown(false);
      else setScrolledDown(true);
    };

    scrollY.on("change", showShadow);

    return () => scrollY.clearListeners();
  }, [scrollY]);

  return (
    <section
      className={cn(
        "w-screen fixed top-0 z-50 bg-transparent shadow-2xl", //transition-[backdrop-filter] duration-300
        {
          "backdrop-blur-xl": scrolledDown, // backdrop-blur-xl
          invisible: pathname.includes("/auth"),
        }
      )}
    >
      <header className="max-w-7xl mx-auto flex justify-between px-3 py-2">
        {/* App Logo */}
        <div className="">
          <Link href="/" className="flex items-center">
            <div className="relative size-12">
              <Image
                src="/logo.svg"
                alt="app logo"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-primary text-3xl">Quizzer</p>
          </Link>
        </div>

        {/* Desktop view */}
        <div className="max-md:hidden flex grow gap-4 justify-between items-center font-secondary">
          {/* Navbar */}
          <nav className="mx-auto h-full grid place-content-center rounded px-3 bg-background bg-shadow-app hover:before:blur-[8px] focus-within:before:blur-[8px] before:transition-[filter] before:duration-200">
            <ul className="flex gap-3 items-center">
              {NAVBAR_ITEMS.map(item => (
                <li key={item.linkTag}>
                  <Navlink path={item.path}>{item.linkTag}</Navlink>
                </li>
              ))}
              <li>
                <Link
                  href="https://github.com/NoobSpectre/Quizzer"
                  className="group/github focus:outline-none"
                >
                  <div className="p-0.5 rounded transition-[background-color] group-focus-visible/github:bg-muted hover:bg-muted">
                    <GithubSVG />
                  </div>
                </Link>
              </li>
            </ul>
          </nav>

          {/* App Settings */}
          <div className="flex gap-4 items-center">
            {/* Theme Toggle Btn */}
            <ModeToggle />

            {/* While Clerk is loading */}
            <ClerkLoading>
              <div className="relative flex gap-4 h-full justify-center items-center">
                <Loader2Icon className="absolute animate-spin" />

                {/* Place Holder UI */}
                <div className="flex gap-4 h-full justify-center items-center invisible">
                  <Button
                    variant="outline"
                    className="pointer-events-none text-xs"
                  >
                    Sign in
                  </Button>
                  <p className="">or</p>
                  <Button
                    variant="outline"
                    className="pointer-events-none text-xs"
                  >
                    Sign up
                  </Button>
                </div>
              </div>
            </ClerkLoading>

            {/* Once Clerk is loaded */}
            <ClerkLoaded>
              <div className="flex gap-4 h-full justify-center items-center">
                {/* Once User is signed out */}
                <SignedOut>
                  <SignInButton mode="redirect">
                    <Button variant="outline" className="text-xs">
                      Sign in
                    </Button>
                  </SignInButton>
                  <p className="text-muted-foreground">or</p>
                  <SignUpButton mode="redirect">
                    <Button variant="outline" className="text-xs">
                      Sign up
                    </Button>
                  </SignUpButton>
                </SignedOut>

                {/* Once User is signed in */}
                <SignedIn>
                  <UserButton
                    appearance={{
                      elements: {
                        userButtonAvatarBox: {
                          width: "2.5rem",
                          height: "100%",
                        },
                      },
                    }}
                  />
                </SignedIn>
              </div>
            </ClerkLoaded>
          </div>
        </div>
      </header>
    </section>
  );
};
