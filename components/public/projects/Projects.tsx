'use client'; // Mark the component as a client component

import { Carousel } from '@/components/common/Carousel';
import ErrorMessage from '@/components/common/ErrorMessage';
import Spinner from '@/components/common/Spinner';
import { useLocale } from '@/context/LocaleContext';
import { fetchProjects } from '@/queries/projects';
import { projectsToDb } from '@/todatabase/projects';
import { technologies } from '@/todatabase/technologies';
import { Project } from '@/types/Project';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

export function Projects() {
  // const locale = useLocale();

  // const {
  //   data: projects,
  //   isLoading,
  //   status,
  //   error,
  // } = useQuery({
  //   queryKey: ['projects', locale], // Locale is part of the query key
  //   queryFn: () => fetchProjects(locale),
  //   staleTime: 1000 * 60 * 30, // Data is considered fresh for 30 minutes
  //   refetchOnWindowFocus: false, // Disable refetching on window focus
  //   retry: 0,
  // });

  // if (isLoading) return <Spinner />;
  // if (status === 'error') return <ErrorMessage message={error.message} />;

  const projectsData = projectsToDb;
  const tec = technologies;
  return (
    <div className="flex-col flex-grow flex justify-center items-center w-full">
      <Carousel>
        {projectsData?.map((p: Project) => (
          <div key={p._id} className="flex gap-8 p-2 max-w-3xl">
            <div>
              <div className="flex flex-col gap-4">
                <h2>{p.title}</h2>
                <p>{p.description}</p>
              </div>
              <div className="mt-6">
                <h3>Tech Stack</h3>
                <div className="grid grid-cols-5 gap-2 mt-4">
                  {p.technologies.map((technology) => {
                    const t = tec.find((t) => t._id === technology);
                    return (
                      <div
                        key={technology}
                        className="flex flex-col items-center"
                      >
                        <Image
                          alt="technology-icon"
                          src={
                            t?.pathToImage || '/images/technologies/default.svg'
                          }
                          height={30}
                          width={30}
                        />
                        <div className="text-xs">{t?.name || 'tool'}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <Image
              src={p.pathToImage}
              alt="project"
              height={200}
              width={200}
              className="rounded-3xl"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
