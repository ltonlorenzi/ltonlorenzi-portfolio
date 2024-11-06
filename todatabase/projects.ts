import { Project } from '@/types/Project';
import { ColumnDef } from '@tanstack/react-table';
import moment from 'moment';

import { technologies } from './technologies';

export const projectsColumns: ColumnDef<Project>[] = [
  { header: 'ID', accessorKey: '_id', footer: '_id' },
  { header: 'Title', accessorKey: 'title', footer: 'title' },
  {
    header: 'Title (es)',
    accessorFn: (row) =>
      row.translations.find((t) => t.locale === 'es')?.fields.title,
    footer: 'title',
  },
  {
    header: 'Title (fr)',
    accessorFn: (row) =>
      row.translations.find((t) => t.locale === 'fr')?.fields.title,
    footer: 'title',
  },
  {
    header: 'Description',
    accessorKey: 'description',
    footer: 'description',
  },
  {
    header: 'Description (es)',
    accessorFn: (row) =>
      row.translations.find((t) => t.locale === 'fr')?.fields.description,
    footer: 'description',
  },
  {
    header: 'Description (fr)',
    accessorFn: (row) =>
      row.translations.find((t) => t.locale === 'fr')?.fields.description,
    footer: 'description',
  },
  {
    header: 'From',
    accessorKey: 'start_date',
    footer: 'start_date',
    cell: (info) => {
      return moment(info.getValue<Date>()).format('MMMM D, YYYY');
    },
  },
  {
    header: 'To',
    accessorKey: 'end_date',
    footer: 'end_date',
    cell: (info) => {
      return moment(info.getValue<Date>()).format('MMMM D, YYYY');
    },
  },
  {
    header: 'Technologies',
    accessorKey: 'technologies',
    footer: 'technologies   ',
    cell: (info) => {
      return info
        .getValue<[]>()
        ?.map((tec) => technologies.find((t) => t._id === tec)?.name + '/');
    },
  },
];
