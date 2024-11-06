'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IoMdMoon } from 'react-icons/io';
import { MdWbSunny } from 'react-icons/md';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-3 right-3">
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="flex items-center p-2 rounded-full transition-colors duration-300"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <IoMdMoon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        ) : (
          <MdWbSunny className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        )}
      </button>
    </div>
  );
}
