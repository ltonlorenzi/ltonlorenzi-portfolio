'use client';
import { AboutMe } from '@/components/public/about/AboutMe';
import Education from '@/components/public/about/Education';
import { Technologies } from '@/components/public/about/Technologies';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

const ScrollAnimatedSection = ({
  index,
  children,
}: {
  index: number;
  children: ReactNode;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -50% 0px' });
  return (
    <motion.div
      key={index}
      ref={ref}
      initial={{ x: index % 2 === 0 ? '-20%' : '20%', opacity: 0 }}
      animate={{
        opacity: inView ? 1 : 0.1,
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
  return (
    <div className="flex flex-grow flex-col items-start gap-16 mb-32 md:px-36">
      <AnimatePresence>
        {aboutComponents.map((Component, index) => {
          return (
            <ScrollAnimatedSection index={index} key={index}>
              <Component />
              {index < aboutComponents.length - 1 && (
                <hr className="w-full border-t border-gray-500 mt-32" />
              )}
            </ScrollAnimatedSection>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
