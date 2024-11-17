'use client'; // Mark the component as a client component

import { Carousel } from '@/components/common/Carousel';
import ErrorMessage from '@/components/common/ErrorMessage';
import Spinner from '@/components/common/Spinner';
import { useLocale } from '@/context/LocaleContext';
import { fetchProjects } from '@/queries/projects';
import { fetchTechnologies } from '@/queries/technologies';
// import { projectsToDb } from '@/todatabase/projects';
// import { technologies } from '@/todatabase/technologies';
import { Project } from '@/types/Project';
import { Technology } from '@/types/Technology';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import Image from 'next/image';
import React from 'react';

export function Projects() {
  const locale = useLocale();

  const {
    data: projects,
    isLoading,
    status,
    error,
  } = useQuery({
    queryKey: ['projects', locale], // Locale is part of the query key
    queryFn: () => fetchProjects(locale),
    staleTime: 1000 * 60 * 30, // Data is considered fresh for 30 minutes
    refetchOnWindowFocus: false, // Disable refetching on window focus
    retry: 0,
  });

  const {
    data: technologies,
    isLoading: isLoadingTech,
    status: techError,
  } = useQuery({
    queryKey: ['technologies'],
    queryFn: () => fetchTechnologies(),
  });

  if (isLoading || isLoadingTech) return <Spinner />;
  if (status === 'error' || techError === 'error')
    return <ErrorMessage message={error?.message} />;

  return (
    <div className="flex-col flex-grow flex justify-center items-center w-full">
      <Carousel>
        {projects.map((p: Project) => (
          <div
            key={p._id}
            className="flex gap-8 p-2 max-w-4xl items-center flex-col md:flex-row"
          >
            <div className="flex-grow">
              <div className="flex flex-col gap-2">
                <h2>{p.title}</h2>
                <div className="font-bold text-gray-500">
                  {moment.utc(p.start_date).year()} -{' '}
                  {moment.utc(p.end_date).year()}
                </div>
                <p>{p.description}</p>
              </div>
              <div className="mt-6">
                <h3>Tech Stack</h3>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mt-4">
                  {p.technologies.map((technology) => {
                    const t = technologies.find(
                      (t: Technology) => t._id === technology
                    );
                    return (
                      <div
                        key={technology}
                        className="flex flex-col items-center justify-between text-center"
                      >
                        <Image
                          alt={t?.name || 'tool'}
                          src={
                            t?.imageUrl || '/images/technologies/default.svg'
                          }
                          className="rounded-md" // Using tailwindcss
                          width={30}
                          height={30}
                          style={{ height: 30, width: 30 }}
                        />
                        <div className="text-xs">{t?.name || 'tool'}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* Project Image */}
            <div className="flex flex-col justify-around items-center gap-3">
              <div
                className={`relative flex-shrink-0 ${
                  p.type === 'mobile'
                    ? ' w-[180px] h-96'
                    : 'aspect-square w-96 h-60'
                }`}
              >
                <Image
                  loading="lazy"
                  src={p.imageUrl}
                  alt="project"
                  className="rounded-3xl"
                  fill
                  sizes="h-auto w-auto"
                />
              </div>
              {p.projectUrl && (
                <a
                  href={p.projectUrl}
                  target="_blank"
                  className="text-sm hover:scale-105 hover:text-gray-400 text-gray-500"
                >
                  Visit
                </a>
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
