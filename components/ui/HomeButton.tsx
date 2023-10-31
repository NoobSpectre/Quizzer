import Link from 'next/link';

export const HomeButton = () => {
  return (
    <div className="absolute bottom-4 w-full flex justify-end px-4 sm:px-6 md:px-9">
      <Link href="/" className='hover:bg-gray-200 pl-2.5 pr-[2px] text-sm'>
        <span className="bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
          &lt;&nbsp;&nbsp;Home
        </span>
      </Link>
    </div>
  );
};
