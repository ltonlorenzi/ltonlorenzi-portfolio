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
    setCurrentIndex((prevIndex) =>
      prevIndex < children.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleClickPrevious = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const handleSetIndex = (idx: number) => {
    setDirection(currentIndex < idx ? 0 : 1);
    setCurrentIndex(idx);
  };

  return (
    <div className="flex flex-col items-center w-full relative h-full">
      <div className="flex md:gap-8 justify-center items-center overflow-hidden">
        <button
          onClick={handleClickPrevious}
          className="p-2 rounded-full shadow-md transition-transform transform hover:scale-110"
        >
          <MdOutlineKeyboardDoubleArrowLeft size={30} />
        </button>
        <div className="w-full overflow-hidden">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={{
                x: direction === 0 ? '100%' : '-100%',
                opacity: 0,
              }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, type: 'keyframes' }}
            >
              {children[currentIndex]}{' '}
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          onClick={handleClickNext}
          className="p-2 rounded-full shadow-md transition-transform transform hover:scale-110"
        >
          <MdOutlineKeyboardDoubleArrowRight size={30} />
        </button>
      </div>
      <div className="flex gap-2 mt-16">
        {children.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-gray-700' : 'bg-gray-300'
            }`}
            onClick={() => handleSetIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
