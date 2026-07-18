'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFramer } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full text-white py-6 flex flex-col items-center text-sm px-4"
    >
      <div className="flex items-center flex-wrap justify-center gap-2 text-gray-300">
        <span>Built with</span>
        <FaHeart className="text-red-500 animate-pulse" />
        <span>using</span>

        <div className="flex items-center gap-1">
          <SiNextdotjs className="text-white" />
          <span>Next.js</span>
        </div>

        <div className="flex items-center gap-1">
          <SiTailwindcss className="text-sky-400" />
          <span>Tailwind CSS</span>
        </div>

        <div className="flex items-center gap-1">
          <SiFramer className="text-pink-400" />
          <span>Framer Motion</span>
        </div>
      </div>

      <div className="mt-4 text-gray-500 text-center">
        © {currentYear} Mohammed Abdullah Khan. All rights reserved.
      </div>

      <Link
        href="/accessibility-handbook"
        className="mt-2 text-gray-400 hover:text-white underline underline-offset-2 transition-colors"
      >
        Read the Accessibility Handbook
      </Link>
    </motion.footer>
  );
};

export default Footer;
