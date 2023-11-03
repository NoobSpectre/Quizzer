'use client';

import logo from '@/public/logo.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const AuthLayoutSection = () => {
  return (
    <motion.section
      initial={{ translateY: '0%', width: '100%' }}
      animate={{
        translateY: 'var(--y-to, 0%)',
        width: 'var(--width-to, 100%)',
      }}
      transition={{ duration: 1, delay: 0.2 }}
      className="absolute flex justify-center items-center bg-red-600 sm:rounded-r z-10 h-full
        max-sm:[--y-to:-100%] sm:[--width-to:49%]
      "
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
