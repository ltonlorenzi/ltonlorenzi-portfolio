'use client';

import { Job } from '@/types/Job';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

interface TimelineCardProps {
  index: number;
  job: Job;
}

export const TimelineCard = ({ index, job }: TimelineCardProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -25% 0px' });
  return (
    <motion.div
      ref={ref}
      className="relative bg-white shadow-lg rounded-lg p-8 w-full md:w-96"
      initial={{ x: index % 2 === 0 ? '-100%' : '100%', opacity: 0.1 }}
      animate={{
        opacity: inView ? 1 : 0.1,
        x: 0,
      }}
      transition={{ duration: 1, delay: index * 0.2 }}
    >
      <div
        className={`absolute w-0 h-0 border-t-[16px] border-b-[16px] border-transparent ${
          index % 2 === 0
            ? 'left-full border-l-white border-l-[16px]'
            : 'right-full border-r-white border-r-[16px]'
        }`}
      />

      <div className="flex">
        <div>
          <div className="text-lg font-semibold text-blue-600">{job.title}</div>
          <div className="text-gray-500">{job.company}</div>
          <div className="text-gray-400">{job.year}</div>
        </div>
        <div className="ml-auto min-w-16">
          <Image
            alt="icon"
            src={`/images/companies/${job.companyId}.jpg`}
            width={64}
            height={64}
          />
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-600">{job.body}</p>
    </motion.div>
  );
};
