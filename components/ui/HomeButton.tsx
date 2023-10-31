import Link from 'next/link';

export const HomeButton = () => {
  return (
    <div className="absolute bottom-4 w-full flex justify-end px-1 sm:px-3 md:px-6">
      <Link href="/" className='hover:bg-gray-100 px-3 text-sm'>
        <span className="bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
          &lt;&nbsp;&nbsp;Home
        </span>
      </Link>
    </div>
  );
};
