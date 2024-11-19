'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TemplateProps {
  children: ReactNode;
}

const Template = ({ children }: TemplateProps) => {
  return (
    <div className="relative flex flex-grow px-1 md:px-16">
      {/* Background circles container */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-10 -left-72 w-[400px] h-[400px] rounded-full border border-gray-100 border-opacity-10"></div>
        <div className="absolute -bottom-28 -right-80 w-[600px] h-[600px] rounded-full border border-gray-100 border-opacity-10"></div>
        <div className="absolute -top-0 -right-96 w-[500px] h-[500px] rounded-full border border-gray-100 border-opacity-10"></div>
      </div>

      {/* Main content */}
      <motion.div
        className="flex flex-grow"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.75 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Template;
