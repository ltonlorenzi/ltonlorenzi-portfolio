import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className: string;
}

export const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} rounded border p-1 border-dark-foreground`}
    >
      {children}
    </button>
  );
};
