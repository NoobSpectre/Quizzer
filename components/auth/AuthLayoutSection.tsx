'use client';

import logo from '@/public/logo.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const AuthLayoutSection = () => {
  return (
    // whole left section heving red bg
    <motion.section
      initial={{
        height: '100%',
        width: '100%',
      }}
      animate={{
        width: '48%',
        transition: {
          width: { duration: 1 },
          delay: 0.2,
        },
      }}
      className="absolute flex justify-center items-center bg-red-600 rounded-r z-10"
    >
      {/* image and text container */}
      <div className="flex flex-col w-[380px] scale-75">
        {/* image container */}
        <div className="relative h-[320px] sm:h-[400px] w-full aspect-square">
          <Image
            src={logo}
            alt="logo"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* text container */}
        <p className="w-full break-words text-center text-xl text-slate-50 font-bold tracking-wide">
          Play and Discover your knowledge, while competing with others.
        </p>
      </div>
    </motion.section>
  );
};
