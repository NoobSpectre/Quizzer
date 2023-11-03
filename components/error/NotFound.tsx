import Image from 'next/image';
import Link from 'next/link';

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
        <p className="text-center font-black text-5xl">
          Oops! Page Not Found
        </p>
        <div className='flex justify-center'>
          {/* <Button
            component={Link}
            href="/"
            size="md"
            className="hover:shadow-2xl"
            variant="gradient"
            gradient={{ from: '#E50000', to: '#210080', deg: 90 }}
            styles={{
              root: {
                boxShadow:
                  '0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
              },
            }}
          >
            Go back to home page
          </Button> */}
        </div>
      </section>
    </>
  );
};
