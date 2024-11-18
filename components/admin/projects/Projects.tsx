'use client';
import { getProjectColumns } from '@/components/admin/projects/getProjectColumns';
import { Button } from '@/components/common/Button';
import ConfirmationModal from '@/components/common/ConfirmationModal';
import ErrorMessage from '@/components/common/ErrorMessage';
import Modal from '@/components/common/Modal';
import Spinner from '@/components/common/Spinner';
import Table from '@/components/common/table/Table';
import { deleteProject, fetchAllProjects } from '@/queries/projects';
import { fetchTechnologies } from '@/queries/technologies';
import { Project } from '@/types/Project';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Row } from '@tanstack/react-table';
import React, { useRef, useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { toast } from 'react-toastify';
import { useClickAway } from 'react-use';

import ProjectsForm from './ProjectsForm';

export const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowSelected, setRowSelected] = useState<Project>();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const deleteModalRef = useRef(null);
  const modalRef = useRef(null);
  const queryClient = useQueryClient();

  const handleCloseModal = () => {
    setRowSelected(undefined);
    setIsModalOpen(false);
  };

  useClickAway(modalRef, handleCloseModal);
  useClickAway(deleteModalRef, () => setIsDeleteModalOpen(false));

  const { data: projects, status } = useQuery({
    queryKey: ['projects'],
    queryFn: () => fetchAllProjects(),
    refetchInterval: 1000 * 60 * 20, // Poll in 20 minutes
    refetchOnWindowFocus: true, // Refetch on window focus if data is stale
    staleTime: 1000 * 60 * 0.1, // 5 minutes data fresh, will not refetch
    refetchOnMount: 'always', // Always refetch on mount
    enabled: true, // Enable the query
  });

  const { data: technologiesList, status: techStatus } = useQuery({
    queryKey: ['technologies'],
    queryFn: () => fetchTechnologies(),
  });

  const handleEdit = (row: Row<Project>) => {
    setRowSelected(row.original);
    setIsModalOpen(true);
  };

  const handleDeleteModal = (row: Row<Project>) => {
    setRowSelected(row.original);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteProject = async () => {
    try {
      const res = await deleteProject(rowSelected?._id as number);
      await queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast.success(res.message);
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete');
    } finally {
      setIsDeleteModalOpen(false);
    }
  };

  if (status === 'pending' || techStatus === 'pending') return <Spinner />;
  if (status === 'error' || techStatus === 'error') return <ErrorMessage />;

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
      <Table
        data={projects}
        columns={getProjectColumns(
          technologiesList,
          handleEdit,
          handleDeleteModal
        )}
      />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} ref={modalRef}>
        <ProjectsForm onClose={handleCloseModal} project={rowSelected} />
      </Modal>
      <ConfirmationModal
        handleCancel={() => setIsDeleteModalOpen(false)}
        handleConfirm={() => handleDeleteProject()}
        title="Delete Technology"
        isOpen={isDeleteModalOpen}
        ref={deleteModalRef}
      >
        Are you sure you want to delete {rowSelected?.title} project?
      </ConfirmationModal>
    </div>
  );
};
