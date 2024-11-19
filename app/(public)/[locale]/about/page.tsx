'use client';
import { AboutMe } from '@/components/public/about/AboutMe';
import Education from '@/components/public/about/Education';
import { Technologies } from '@/components/public/about/Technologies';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ReactNode, useRef, useState } from 'react';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const ScrollAnimatedSection = ({
  index,
  children,
  ref,
}: {
  index: number;
  children: ReactNode;
  ref: React.RefObject<HTMLDivElement>;
}) => {
  const inView = useInView(ref, { once: true, margin: '0px 0px -40% 0px' });
  return (
    <motion.div
      key={index}
      ref={ref}
      initial={{ x: index % 2 === 0 ? '-20%' : '20%', opacity: 0 }}
      animate={{
        opacity: inView ? 1 : 0.05,
        x: 0,
      }}
      transition={{ duration: 1, delay: index * 0.2 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default function About() {
  const aboutComponents = [AboutMe, Technologies, Education];
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const sectionRefs = useRef(
    aboutComponents.map(() => React.createRef<HTMLDivElement>())
  );

  const handleScroll = () => {
    const nextIndex = currentSectionIndex + 1;
    if (nextIndex < sectionRefs.current.length) {
      sectionRefs.current[nextIndex].current?.scrollIntoView({
        behavior: 'smooth',
      });
      setCurrentSectionIndex(nextIndex);
    }
  };

  return (
    <div className="flex flex-grow flex-col items-start gap-8 md:gap-16 mb-32 md:px-36 overflow-hidden">
      <AnimatePresence>
        {aboutComponents.map((Component, index) => {
          return (
            <ScrollAnimatedSection
              index={index}
              key={index}
              ref={sectionRefs.current[index]}
            >
              <Component />
              {index < aboutComponents.length - 1 && (
                <hr className="w-full border-t border-gray-500" />
              )}
            </ScrollAnimatedSection>
          );
        })}
      </AnimatePresence>
      {currentSectionIndex < aboutComponents.length - 1 && (
        <div
          className="fixed cursor-pointer transform -translate-x-1/2 bottom-40 left-1/2 z-10"
          onClick={() => handleScroll()}
        >
          <IoIosArrowDown
            size={55}
            className="hover:scale-105 transition duration-300"
          />
        </div>
      )}
    </div>
  );
}
