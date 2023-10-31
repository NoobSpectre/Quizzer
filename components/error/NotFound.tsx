import { Button, Group, Title } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

export const NotFound = () => {
  return (
    <div className="">
      <div className="absolute inset-10 opacity-30">
        <Image
          src="/404.svg"
          alt="404 not found"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative grid gap-10">
        <Title className="text-center font-black text-5xl">
          Oops! Page Not Found
        </Title>
        <Group justify="center">
          <Button component={Link} href="/" size="md">
            Go back to home page
          </Button>
        </Group>
      </div>
    </div>
  );
};
