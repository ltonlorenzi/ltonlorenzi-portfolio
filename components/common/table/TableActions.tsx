import React from 'react';

interface TableActionsProps {
  handleEdit: () => void;
  handleDelete: () => void;
}

const TableActions = ({ handleEdit, handleDelete }: TableActionsProps) => {
  return (
    <div className="flex space-x-2">
      <button onClick={handleEdit} className="bg-blue-500 px-4 py-2 rounded">
        Edit
      </button>
      <button onClick={handleDelete} className="bg-red-500  px-4 py-2 rounded">
        Delete
      </button>
    </div>
  );
};

export default TableActions;
