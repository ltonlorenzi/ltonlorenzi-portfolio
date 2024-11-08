import { Technology } from '@/types/Technology';
import { createColumnHelper } from '@tanstack/react-table';
const columnHelper = createColumnHelper<Technology>();

export const technologiesColumns = [
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
        alert(`Delete ${row.original.name}`);
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

export const technologies = [
  {
    _id: '1',
    name: 'React',
    description: 'A JavaScript library for building user interfaces',
  },
  {
    _id: '2',
    name: 'Node.js',
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
  },
  {
    _id: '3',
    name: 'MongoDB',
    description: 'A document database, part of the NoSQL family',
  },
  {
    _id: '4',
    name: 'Express',
    description: 'A web application framework for Node.js',
  },
  {
    _id: '5',
    name: 'TypeScript',
    description: 'A superset of JavaScript that adds static types',
  },
  { _id: '6', name: 'GraphQL', description: 'A query language for APIs' },
  {
    _id: '7',
    name: 'PostgreSQL',
    description: 'A powerful, open-source object-relational database system',
  },
  {
    _id: '8',
    name: 'Tailwind CSS',
    description: 'A utility-first CSS framework',
  },
  {
    _id: '9',
    name: 'Docker',
    description:
      'A platform for developing, shipping, and running applications in containers',
  },
  {
    _id: '10',
    name: 'AWS',
    description: 'Amazon Web Services, a comprehensive cloud platform',
  },
  {
    _id: '11',
    name: 'Next.js',
    description: 'A React framework for production',
  },
  {
    _id: '12',
    name: 'Redux',
    description: 'A state management tool for JavaScript applications',
  },
  {
    _id: '13',
    name: 'Firebase',
    description:
      'A platform developed by Google for creating mobile and web applications',
  },
  {
    _id: '14',
    name: 'Angular',
    description: 'A platform for building mobile and desktop web applications',
  },
  {
    _id: '15',
    name: 'Python',
    description:
      'A programming language known for its readability and versatility',
  },
];
