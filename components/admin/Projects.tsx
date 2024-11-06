'use client';
import { fetchAllProjects, fetchProjects } from '@/queries/projects';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../public/common/Spinner';
import ErrorMessage from '../public/common/ErrorMessage';
import Table from './Table';
import { projectsColumns } from '@/todatabase/projects';

export const Projects = () => {
  const { data, status } = useQuery({
    queryKey: ['projects', 'en'],
    queryFn: () => fetchAllProjects(),
    refetchInterval: 1000 * 60 * 20, // Poll in 20 minutes
    refetchOnWindowFocus: true, // Refetch on window focus if data is stale
    staleTime: 1000 * 60 * 0.1, // 5 minutes data fresh, will not refetch
    refetchOnMount: 'always', // Always refetch on mount
    enabled: true, // Enable the query
  });

  if (status === 'pending') return <Spinner />;
  if (status === 'error') return <ErrorMessage />;

  console.log(data, 'kjn');
  return (
    <div className="max-w-full w-full">
      <h2 className="text-center mb-4">Projects</h2>
      <Table data={data} columns={projectsColumns} />
    </div>
  );
};
