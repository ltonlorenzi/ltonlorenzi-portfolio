'use client';
import { defaultTechPath } from '@/lib/constants';
import { fetchTechnologies } from '@/queries/technologies';
import { Technology } from '@/types/Technology';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

import Skill from './Skill';

export const Technologies = () => {
  const { data: technologies } = useQuery<Technology[]>({
    queryKey: ['techonologies'],
    queryFn: () => fetchTechnologies(),
  });
  return (
    <div className="mb-8 md:mb-32">
      <h2 className="md:text-left text-center md:mt-4">
        Technologies and Tools
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 justify-center mt-12">
        {technologies
          ?.sort((a, b) => (a._id as number) - (b._id as number))
          ?.map((t) => (
            <Skill
              key={t._id}
              imageUrl={t.imageUrl || defaultTechPath}
              name={t.name}
            />
          ))}
      </div>
    </div>
  );
};
