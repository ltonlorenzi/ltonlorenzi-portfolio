'use client'; // Mark the component as a client component

import Spinner from '@/app/components/Spinner';
import { useLocale } from '@/context/LocaleContext';
import { Project } from '@/types/Project';
import { useQuery } from '@tanstack/react-query';

const fetchProjects = async (locale: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/projects?locale=${locale}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }
  return res.json();
};

export function Projects() {
  const locale = useLocale();

  const {
    data: projects,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['projects', locale], // Locale is part of the query key
    queryFn: () => fetchProjects(locale),
    staleTime: 1000 * 60 * 30, // Data is considered fresh for 30 minutes
    refetchOnWindowFocus: false, // Disable refetching on window focus
  });

  if (isLoading) return <Spinner />;
  if (isError) return <p>Error loading projects: {error.message}</p>;

  return (
    <div className="p-6">
      <h1>Projects</h1>
      {projects?.map((p: Project) => (
        <div className="border-s-orange-300 p-2" key={p._id}>
          <h2>{p.title}</h2>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}
