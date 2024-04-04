import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui';

export const NotFound = () => {
  return (
    <>
      <section className="absolute inset-10 xl:inset-52 2xl:inset-80 opacity-30">
        <Image
          src="/404.svg"
          alt="404 not found"
          fill
          className="object-contain"
        />
      </section>
      <section className="relative grid gap-10">
        <p className="text-center font-black text-5xl">Oops! Page Not Found</p>
        <div className="flex justify-center">
          <Button
            size="sm"
            className="bg-gradient-to-r from-gradient-red to-gradient-blue shadow-lg hover:shadow-2xl"
            asChild
          >
            <Link href="/">Go back to home page</Link>
          </Button>
        </div>
      </section>
    </>
  );
};
