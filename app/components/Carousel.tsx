'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactNode, useState } from 'react';
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from 'react-icons/md';

interface CarouselProps {
  children: ReactNode[];
}

export const Carousel = ({ children }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickNext = () => {
    setCurrentIndex(currentIndex < children.length - 1 ? currentIndex + 1 : 0);
  };
  const handleClickPrevious = () => {
    setCurrentIndex(currentIndex < children.length - 1 ? currentIndex + 1 : 0);
  };

  return (
    <div className="flex gap-24 justify-center w-full overflow-hidden relative">
      <button onClick={() => handleClickPrevious()}>
        <MdOutlineKeyboardDoubleArrowLeft size={35} />
      </button>
      <AnimatePresence>
        <motion.div
          className="flex w-full overflow-hidden max-w-3xl"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, type: 'spring' }}
          key={currentIndex}
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>
      <button onClick={() => handleClickNext()}>
        <MdOutlineKeyboardDoubleArrowRight size={35} />
      </button>
    </div>
  );
};
