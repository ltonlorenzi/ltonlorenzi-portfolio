'use client';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../public/common/Spinner';
import ErrorMessage from '../public/common/ErrorMessage';
import Table from './Table';
import { technologies, technologiesColumns } from '@/todatabase/technologies';
import { fetchTechnologies } from '@/queries/technologies';

export const Technologies = () => {
  const { data, status } = useQuery({
    queryKey: ['technologies'],
    queryFn: () => fetchTechnologies(),
    refetchInterval: 1000 * 60 * 20, // Poll in 20 minutes
    refetchOnWindowFocus: true, // Refetch on window focus if data is stale
    staleTime: 1000 * 60 * 0.1, // 5 minutes data fresh, will not refetch
    refetchOnMount: 'always', // Always refetch on mount
    enabled: true, // Enable the query
  });

  if (status === 'pending') return <Spinner />;
  if (status === 'error') return <ErrorMessage />;
  return (
    <div>
      <h2 className="text-center mb-4">Technologies</h2>
      <Table data={data.technologies} columns={technologiesColumns} />
    </div>
  );
};
