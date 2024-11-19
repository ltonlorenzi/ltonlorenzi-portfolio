'use client';
import { userName } from '@/lib/constants';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import ThemeToggle from './ThemeToggle';

export const Footer = () => {
  const [clickCounter, setClickCouter] = useState(0);
  const router = useRouter();

  const handleClick = () => {
    setTimeout(() => setClickCouter(0), 3000);

    if (clickCounter < 2) setClickCouter(clickCounter + 1);
    else {
      setClickCouter(0);
      router.push('/admin');
    }
  };

  return (
    <div className="p-6 w-full">
      <div className="text-xs text-center">
        Made by {userName}
        <span className="cursor-pointer" onClick={handleClick}>
          &copy;
        </span>
      </div>
      <ThemeToggle />
    </div>
  );
};
