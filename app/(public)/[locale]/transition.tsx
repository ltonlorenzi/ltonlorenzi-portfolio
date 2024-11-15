'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const Transition = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      className="flex flex-grow"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
};

export default Transition;
