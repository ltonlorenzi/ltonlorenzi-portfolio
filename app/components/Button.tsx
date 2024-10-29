import React from 'react';

interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps) => {
  return <div className="p-8 rounded">{text}</div>;
};
