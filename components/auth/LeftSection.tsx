'use client';

import logo from '@/public/logo.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const LeftSection = () => {
  return (
    <section className="h-full flex justify-center items-center">
      {/* image and text container */}
      <motion.div
        animate
        className="flex flex-col w-[380px] scale-75"
      >
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
        <p className="w-full break-words text-center text-xl text-amber-900 font-bold">
          Play and Discover your knowledge, while competing with others.
        </p>
      </motion.div>
    </section>
  );
};
