'use client';
import ErrorMessage from '@/components/common/ErrorMessage';
import Spinner from '@/components/common/Spinner';
import { TimelineCard } from '@/components/public/career/TimelineCard';
import { getJobs } from '@/queries/jobs';
import { Job } from '@/types/Job';
import { useQuery } from '@tanstack/react-query';
import { AnimatePresence } from 'framer-motion';
import React from 'react';

const Career = () => {
  const { data: jobs, status } = useQuery<Job[]>({
    queryKey: ['jobs'],
    queryFn: () => getJobs(),
  });

  if (status === 'pending') return <Spinner />;
  if (status === 'error') return <ErrorMessage />;

  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden">
      <div className="invisible md:visible absolute w-1 bg-gray-300 h-full left-1/2 transform -translate-x-1/2 my-12"></div>
      <AnimatePresence>
        {jobs.map((job, index) => (
          <div
            key={index}
            className={`relative flex items-start w-full max-w-4xl justify-start ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} my-4`}
          >
            <TimelineCard index={index} job={job} />
            <div className="invisible md:visible absolute w-6 h-6 my-11 bg-blue-500 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-3"></div>
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Career;
