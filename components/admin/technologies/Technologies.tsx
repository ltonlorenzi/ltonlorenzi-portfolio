'use client';

import { Button } from '@/components/common/Button';
import ErrorMessage from '@/components/common/ErrorMessage';
import Modal from '@/components/common/Modal';
import Spinner from '@/components/common/Spinner';
import Table from '@/components/common/Table';
import { deleteTechnology, fetchTechnologies } from '@/queries/technologies';
import { Technology } from '@/types/Technology';
import { useQuery } from '@tanstack/react-query';
import { createColumnHelper } from '@tanstack/react-table';
import React, { useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';

import TechnologiesForm from './TechnologiesForm';
const columnHelper = createColumnHelper<Technology>();

export const Technologies = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [rowSelected, setRowSelected] = useState<Technology>();

  const technologiesColumns = [
    columnHelper.accessor('_id', {
      header: 'ID',
    }),
    columnHelper.accessor('name', {
      header: 'Name',
    }),
    columnHelper.accessor('description', {
      header: 'Name',
    }),
    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => {
        const handleEdit = () => {
          alert(`Edit ${row.original.name}`);
        };

        const handleDelete = () => {
          setIsDeleteModalOpen(true);
          setRowSelected(row.original);
        };

        return (
          <div className="flex space-x-2">
            <button
              onClick={handleEdit}
              className="bg-blue-500 px-4 py-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500  px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        );
      },
    }),
  ];

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
      <div className="flex relative justify-center">
        <h2 className="mb-4">Technologies</h2>
        <Button
          className="absolute right-5 flex items-center gap-2"
          onClick={() => setIsModalOpen(true)}
        >
          Add
          <IoMdAddCircle />
        </Button>
      </div>
      <Table data={data.technologies} columns={technologiesColumns} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="flex justify-center mb-4">Add Technology</h2>
        <TechnologiesForm onClose={() => setIsModalOpen(false)} />
      </Modal>
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      >
        <h2 className="text-lg font-bold mb-4">Delete Technology</h2>
        <p>Are you sure you want to delete {rowSelected?.name} technology?</p>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={() => setIsDeleteModalOpen(false)}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
          <button
            onClick={async () => {
              // Call delete function here
              const deleted = await deleteTechnology(
                rowSelected?._id as number
              );
              console.log(deleted);
              setIsDeleteModalOpen(false);
            }}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div>
      </Modal>
    </div>
  );
};
