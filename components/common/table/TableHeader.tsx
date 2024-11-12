import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';

import { Button } from '../Button';

interface TableHeaderProps {
  title: string;
  handleClickAdd: () => void;
}

const TableHeader = ({ title, handleClickAdd }: TableHeaderProps) => {
  return (
    <div className="flex relative justify-center">
      <h2 className="mb-4">{title}</h2>
      <Button
        className="absolute right-5 flex items-center gap-2"
        onClick={handleClickAdd}
      >
        Add
        <IoMdAddCircle />
      </Button>
    </div>
  );
};

export default TableHeader;
