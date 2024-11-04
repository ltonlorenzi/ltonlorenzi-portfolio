'use client';

import { Job } from '@/types/Job';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TimelineCardProps {
  index: number;
  job: Job;
}

export const TimelineCard = ({ index, job }: TimelineCardProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="relative bg-white shadow-lg rounded-lg p-4 w-64"
      initial={{ x: index % 2 === 0 ? '-100%' : '100%', opacity: 0 }}
      animate={{
        opacity: inView ? 1 : 0,
        x: 0,
      }}
      transition={{ duration: 1, delay: index * 0.2 }}
    >
      {/* Triangle arrow pointing to the vertical line */}
      <div
        className={`absolute w-0 h-0 border-t-8 border-b-8  border-transparent ${
          index % 2 === 0
            ? 'left-full border-l-white border-l-8'
            : 'right-full border-r-white border-r-8'
        }`}
      />

      {/* Content of the card */}
      <div className="text-lg font-semibold text-blue-600">{job.title}</div>
      <div className="text-gray-500">{job.company}</div>
      <div className="text-gray-400">{job.year}</div>
      <p className="mt-2 text-sm text-gray-600">{job.body}</p>
    </motion.div>
  );
};
