import { TimelineCard } from '@/components/public/career/TimelineCard';
import { jobs } from '@/todatabase/jobs';
import { AnimatePresence } from 'framer-motion';
import React from 'react';

const CareerTimeline = () => {
  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden">
      {/* Vertical timeline line */}
      <div className="absolute w-1 bg-gray-300 h-full left-1/2 transform -translate-x-1/2 my-8"></div>

      <AnimatePresence>
        {jobs.map((job, index) => (
          <div
            key={index}
            className={`relative flex items-start w-full max-w-2xl ${index % 2 === 0 ? 'justify-start' : 'justify-end'} my-4`}
          >
            <TimelineCard index={index} job={job} />

            {/* Timeline Circle */}
            <div className="absolute w-6 h-6 my-5 bg-blue-500 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-3"></div>
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CareerTimeline;