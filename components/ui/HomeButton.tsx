import Link from 'next/link';

export const HomeButton = () => {
  return (
    <div className="w-full flex justify-end px-3">
      <Link href="/" className='hover:bg-gray-100 pl-3 pr-[2px] text-sm'>
        <span className="bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
          &lt;&nbsp;&nbsp;Home
        </span>
      </Link>
    </div>
  );
};
