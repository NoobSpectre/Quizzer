'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();

  return (
    <div className={pathname.includes('/auth') ? 'hidden' : ''}>
      <header className="h-16 border-b-2 px-1 md:px-6">
        <div className="flex justify-between h-full">
          <Link href="/" className="flex justify-center items-center xl:ml-10">
            <Image
              src="/logo.svg"
              alt="logo"
              width={45}
              height={45}
              className="object-contain"
            />
            <h1 className="text-4xl font-bold">Quizzer</h1>
          </Link>

          <nav>
            <div className="hidden h-full sm:flex">
              <Link href="/">Home</Link>
              <Link href="/profile/1">Profile</Link>
            </div>
          </nav>

          <div className="hidden sm:flex">
            <Link href="/auth/signin">Sign in</Link>
            <Link href="/auth/signup">Sign up</Link>
          </div>

          {/* <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          /> */}
        </div>
      </header>

      {/* mobile sidebar - in mobile only */}
      {/* <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="/" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <TbChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button
              component={Link}
              variant="default"
              href="/auth/signin"
              onClick={closeDrawer}
            >
              Sign in
            </Button>
            <Button component={Link} href="/auth/signup" onClick={closeDrawer}>
              Sign up
            </Button>
          </Group>
        </ScrollArea>
      </Drawer> */}
    </div>
  );
};
