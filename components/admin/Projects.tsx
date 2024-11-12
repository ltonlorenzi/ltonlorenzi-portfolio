'use client';
import { Button } from '@/components/common/Button';
import ErrorMessage from '@/components/common/ErrorMessage';
import Modal from '@/components/common/Modal';
import Spinner from '@/components/common/Spinner';
import Table from '@/components/common/table/Table';
import { fetchAllProjects } from '@/queries/projects';
import { projectsColumns } from '@/todatabase/projects';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';

export const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <div className="max-w-full w-full">
      <div className="flex relative justify-center">
        <h2 className="mb-4">Projects</h2>
        <Button
          className="absolute right-5 flex items-center gap-2"
          onClick={() => setIsModalOpen(true)}
        >
          Add
          <IoMdAddCircle />
        </Button>
      </div>
      <Table data={data} columns={projectsColumns} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>{'Edit Technology'}</h2>
      </Modal>
    </div>
  );
};
