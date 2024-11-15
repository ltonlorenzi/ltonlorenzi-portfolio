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
      row?.translations?.find((t) => t.locale === 'es')?.fields.title,
    footer: 'title',
  },
  {
    header: 'Title (fr)',
    accessorFn: (row) =>
      row?.translations?.find((t) => t.locale === 'fr')?.fields.title,
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
      row?.translations?.find((t) => t.locale === 'fr')?.fields.description,
    footer: 'description',
  },
  {
    header: 'Description (fr)',
    accessorFn: (row) =>
      row?.translations?.find((t) => t.locale === 'fr')?.fields.description,
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

export const projectsToDb: Project[] = [
  {
    _id: 1,
    title: 'Sucursal Virtual Telered',
    company: 'Telered',
    description:
      'App for Telered(ISP) customers to pay and download bills, buy new products, manage services. In developed the entire app. I was designed to work with the client on my own, having meetings with them and being in charge of the whole project',
    start_date: new Date('2019-01-01T00:00:00Z'),
    end_date: new Date('2020-06-01T00:00:00Z'),
    technologies: ['16', '13', '5', '14', '17', '18'],
    pathToImage: '/images/projects/telered.jpg',
    // },
    // {
    //   _id: 2,
    //   title: 'Temis Lostalo',
    //   description: 'A personal website to showcase portfolio work.',
    //   start_date: {
    //     $date: '2020-05-01T00:00:00Z',
    //   },
    //   end_date: {
    //     $date: '2020-07-01T00:00:00Z',
    //   },
    //   technologies: ['1', '8', '11'],
    // },
    // {
    //   _id: 3,
    //   title: 'Communo',
    //   description: 'A CMS platform for managing and publishing blog content.',
    //   start_date: {
    //     $date: '2021-03-10T00:00:00Z',
    //   },
    //   end_date: {
    //     $date: '2021-05-20T00:00:00Z',
    //   },
    //   technologies: ['4', '2', '3'],
    // },
    // {
    //   _id: 4,
    //   title: 'Torc',
    //   description: 'A mobile-friendly social media application.',
    //   start_date: {
    //     $date: '2020-08-01T00:00:00Z',
    //   },
    //   end_date: {
    //     $date: '2021-01-01T00:00:00Z',
    //   },
    //   technologies: ['1', '6', '9', '13'],
    // },
    // {
    //   _id: 5,
    //   title: 'Frontec',
    //   description: 'A tool for tracking inventory levels and orders.',
    //   start_date: {
    //     $date: '2019-10-01T00:00:00Z',
    //   },
    //   end_date: {
    //     $date: '2020-02-01T00:00:00Z',
    //   },
    //   technologies: ['5', '7', '9'],
    // },
    // {
    //   _id: 6,
    //   title: 'Kernel',
    //   description: 'An app for checking live weather updates.',
    //   start_date: {
    //     $date: '2021-02-01T00:00:00Z',
    //   },
    //   end_date: {
    //     $date: '2021-04-01T00:00:00Z',
    //   },
    //   technologies: ['14', '10', '12'],
    // },
    // {
    //   _id: 7,
    //   title: 'Mundi',
    //   description: 'An application to manage and prioritize tasks.',
    //   start_date: {
    //     $date: '2020-04-01T00:00:00Z',
    //   },
    //   end_date: {
    //     $date: '2020-07-01T00:00:00Z',
    //   },
    //   technologies: ['1', '8', '12'],
    // },
    // {
    //   _id: 9,
    //   title: 'Portfolio',
    //   description: 'A real-time chat application for messaging.',
    //   start_date: {
    //     $date: '2020-09-01T00:00:00Z',
    //   },
    //   end_date: {
    //     $date: '2021-01-01T00:00:00Z',
    //   },
    //   technologies: ['2', '4', '13'],
    //
  },
];
