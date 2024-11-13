'use client'; // Mark the component as a client component

import { Carousel } from '@/components/common/Carousel';
import ErrorMessage from '@/components/common/ErrorMessage';
import Spinner from '@/components/common/Spinner';
import { useLocale } from '@/context/LocaleContext';
import { fetchProjects } from '@/queries/projects';
import { Project } from '@/types/Project';
import { useQuery } from '@tanstack/react-query';

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

  if (isLoading) return <Spinner />;
  if (status === 'error') return <ErrorMessage message={error.message} />;

  return (
    <div className="flex-col flex justify-center items-center w-full">
      <Carousel>
        {projects?.map((p: Project) => (
          <div
            className="p-2 flex flex-col justify-center items-center gap-4 h-60"
            key={p._id}
          >
            <h2>{p.title}</h2>
            <p>{p.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
