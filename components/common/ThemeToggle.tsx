'use client';

import { useState } from 'react';
import { IoMdMoon } from 'react-icons/io';
import { MdWbSunny } from 'react-icons/md';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(document.documentElement.classList.toggle('dark'));
  };

  return (
    <div className="fixed bottom-3 right-3">
      <button
        onClick={toggleTheme}
        className="flex items-center p-2 rounded-full transition-colors duration-300"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <IoMdMoon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        ) : (
          <MdWbSunny className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        )}
      </button>
    </div>
  );
}
