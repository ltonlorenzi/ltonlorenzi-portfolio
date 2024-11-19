'use client';

import ConfirmationModal from '@/components/common/ConfirmationModal';
import ErrorMessage from '@/components/common/ErrorMessage';
import Modal from '@/components/common/Modal';
import Spinner from '@/components/common/Spinner';
import Table from '@/components/common/table/Table';
import TableActions from '@/components/common/table/TableActions';
import TableHeader from '@/components/common/table/TableHeader';
import { handleError } from '@/lib/utils';
import { deleteTechnology, fetchTechnologies } from '@/queries/technologies';
import { Technology } from '@/types/Technology';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { ColumnSort, createColumnHelper, Row } from '@tanstack/react-table';
import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useClickAway } from 'react-use';

import TechnologiesForm from './TechnologiesForm';

const columnHelper = createColumnHelper<Technology>();

const sorting: ColumnSort[] = [
  {
    id: '_id',
    desc: false,
  },
];

export const Technologies = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [rowSelected, setRowSelected] = useState<Technology>();
  const queryClient = useQueryClient();
  const modalRef = useRef(null);
  const deleteModalRef = useRef(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setRowSelected(undefined);
  };

  useClickAway(modalRef, handleCloseModal);
  useClickAway(deleteModalRef, () => setIsDeleteModalOpen(false));

  const { data, status, error } = useQuery({
    queryKey: ['technologies'],
    queryFn: () => fetchTechnologies(),
    refetchInterval: 1000 * 60 * 20, // Poll in 20 minutes
    refetchOnWindowFocus: true, // Refetch on window focus if data is stale
    staleTime: 1000 * 60 * 0.1, // 5 minutes data fresh, will not refetch
    refetchOnMount: 'always', // Always refetch on mount
    enabled: true, // Enable the query
    retry: 0,
  });

  const handleEdit = (row: Row<Technology>) => {
    setRowSelected(row.original);
    setIsModalOpen(true);
  };

  const handleDeleteModal = (row: Row<Technology>) => {
    setRowSelected(row.original);
    setIsDeleteModalOpen(true);
  };

  const technologiesColumns = [
    columnHelper.accessor('_id', {
      header: 'ID',
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor('name', {
      header: 'Name',
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor('description', {
      header: 'Description',
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor('imageUrl', {
      header: 'Image URL',
      footer: (props) => props.column.id,
    }),
    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      footer: (props) => props.column.id,
      cell: ({ row }) => (
        <TableActions
          handleEdit={() => handleEdit(row)}
          handleDelete={() => handleDeleteModal(row)}
        />
      ),
    }),
  ];

  const handleDeleteTechnology = async () => {
    try {
      const res = await deleteTechnology(rowSelected?._id as number);
      await queryClient.invalidateQueries({ queryKey: ['technologies'] });
      toast.success(res.message);
    } catch (error) {
      toast.error(handleError(error, 'Failed to delete the technology.'));
    } finally {
      setIsDeleteModalOpen(false);
    }
  };

  if (status === 'pending') return <Spinner />;
  if (status === 'error') return <ErrorMessage message={error.message} />;

  return (
    <div>
      <TableHeader
        title="Technologies"
        handleClickAdd={() => setIsModalOpen(true)}
      />
      <Table data={data} columns={technologiesColumns} sorting={sorting} />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} ref={modalRef}>
        <TechnologiesForm onClose={handleCloseModal} technology={rowSelected} />
      </Modal>
      <ConfirmationModal
        handleCancel={() => setIsDeleteModalOpen(false)}
        handleConfirm={() => handleDeleteTechnology()}
        title="Delete Technology"
        isOpen={isDeleteModalOpen}
        ref={deleteModalRef}
      >
        Are you sure you want to delete {rowSelected?.name} technology?
      </ConfirmationModal>
    </div>
  );
};
