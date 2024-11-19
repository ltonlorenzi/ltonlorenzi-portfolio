import TableActions from '@/components/common/table/TableActions'; // Make sure this import is correct
import { Project } from '@/types/Project';
import { Technology } from '@/types/Technology';
import { createColumnHelper, Row } from '@tanstack/react-table';
import moment from 'moment';

const columnHelper = createColumnHelper<Project>();

export const getProjectColumns = (
  technologies: Technology[],
  handleEdit: (row: Row<Project>) => void,
  handleDeleteModal: (row: Row<Project>) => void
) => {
  return [
    columnHelper.accessor('_id', {
      header: 'ID',
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor('title', {
      header: 'Title',
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor('description', {
      header: 'Description',
      footer: 'description',
    }),
    columnHelper.accessor(
      (row) =>
        row?.translations?.find((t) => t.locale === 'es')?.fields.description,
      {
        header: 'Description (es)',
        footer: 'description',
      }
    ),
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
    columnHelper.accessor('technologies', {
      header: 'Technologies',
      footer: 'technologies',
      cell: (info) =>
        info
          .getValue<[]>()
          ?.map(
            (tec) => technologies.find((t) => t._id === tec)?.name + '/' || ''
          )
          .join(' '),
    }),
    columnHelper.accessor('type', {
      header: 'Type',
      footer: 'type',
    }),
    columnHelper.accessor('imageUrl', {
      header: 'Image URL',
      footer: 'imageUrl',
    }),
    columnHelper.accessor('projectUrl', {
      header: 'Project URL',
      footer: 'projectUrl',
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
};
