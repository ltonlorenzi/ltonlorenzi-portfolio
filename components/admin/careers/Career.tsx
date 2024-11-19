import { getJobs } from '@/queries/jobs';
import { Job } from '@/types/Job';
import { useQuery } from '@tanstack/react-query';
import { createColumnHelper, Row } from '@tanstack/react-table';
import moment from 'moment';
import React, { useRef, useState } from 'react';

import JobForm from './JobForm';
import ConfirmationModal from '../../common/ConfirmationModal';
import ErrorMessage from '../../common/ErrorMessage';
import Modal from '../../common/Modal';
import Spinner from '../../common/Spinner';
import Table from '../../common/table/Table';
import TableActions from '../../common/table/TableActions';
import TableHeader from '../../common/table/TableHeader';

const columnHelper = createColumnHelper<Job>();

export const Career = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [rowSelected, setRowSelected] = useState<Job>();
  // const queryClient = useQueryClient();
  const modalRef = useRef(null);
  const deleteModalRef = useRef(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setRowSelected(undefined);
  };

  const handleEdit = (row: Row<Job>) => {
    setRowSelected(row.original);
    setIsModalOpen(true);
  };

  const handleDeleteModal = (row: Row<Job>) => {
    setRowSelected(row.original);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteJob = () => {};

  const { data: jobs, status } = useQuery({
    queryKey: ['jobs'],
    queryFn: () => getJobs(),
  });

  const jobColumns = [
    columnHelper.accessor('_id', {
      header: 'ID',
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor('title', {
      header: 'Title',
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor('body', {
      header: 'Body',
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor('company', {
      header: 'Company',
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor('start_date', {
      header: 'From',
      footer: 'start_date',
      cell: (info) => moment(info.getValue<Date>()).format('MMMM D, YYYY'),
    }),
    columnHelper.accessor('end_date', {
      header: 'To',
      footer: 'end_date',
      cell: (info) => moment(info.getValue<Date>()).format('MMMM D, YYYY'),
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

  if (status === 'pending') return <Spinner />;
  if (status === 'error') return <ErrorMessage />;

  return (
    <div>
      <TableHeader title="Jobs" handleClickAdd={() => setIsModalOpen(true)} />
      <Table data={jobs} columns={jobColumns} />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} ref={modalRef}>
        <JobForm onClose={handleCloseModal} job={rowSelected} />
      </Modal>
      <ConfirmationModal
        handleCancel={() => setIsDeleteModalOpen(false)}
        handleConfirm={() => handleDeleteJob()}
        title="Delete Technology"
        isOpen={isDeleteModalOpen}
        ref={deleteModalRef}
      >
        Are you sure you want to delete {rowSelected?.title} technology?
      </ConfirmationModal>
    </div>
  );
};
