import React from 'react';

import ThemeToggle from './ThemeToggle';

export const Footer = () => {
  return (
    <div className="p-6 w-full">
      <div className="text-xs text-center">
        Made by Luciano Tonlorenzi &copy;
      </div>
      <ThemeToggle />
    </div>
  );
};
