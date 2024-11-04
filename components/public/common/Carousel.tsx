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
  const [direction, setDirection] = useState(0);

  const handleClickNext = () => {
    setDirection(0);
    setCurrentIndex(currentIndex < children.length - 1 ? currentIndex + 1 : 0);
  };

  const handleClickPrevious = () => {
    setDirection(1);
    setCurrentIndex(
      currentIndex === 0 ? children.length - 1 : currentIndex - 1
    );
  };

  return (
    <div className="flex gap-8 md:gap-24 justify-center w-full overflow-hidden relative">
      <button onClick={() => handleClickPrevious()}>
        <MdOutlineKeyboardDoubleArrowLeft size={35} />
      </button>
      <div className="w-full max-w-3xl overflow-hidden">
        <AnimatePresence>
          <motion.div
            initial={{ x: direction === 0 ? '100%' : '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
            key={currentIndex}
          >
            {children[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
      <button onClick={() => handleClickNext()}>
        <MdOutlineKeyboardDoubleArrowRight size={35} />
      </button>
    </div>
  );
};
