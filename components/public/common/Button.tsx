import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="p-8 rounded">
      {children}
    </button>
  );
};
