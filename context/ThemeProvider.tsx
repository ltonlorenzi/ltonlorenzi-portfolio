"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState, ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Prevents rendering until theme is mounted to avoid hydration mismatch
    return <div className="hidden">{children}</div>;
  }

  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      {children}
    </NextThemesProvider>
  );
}
