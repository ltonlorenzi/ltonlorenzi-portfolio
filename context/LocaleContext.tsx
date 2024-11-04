'use client';
import React, { createContext, useContext, ReactNode } from 'react';

interface LocaleContextProps {
  locale: string;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export const LocaleProvider = ({
  locale,
  children,
}: {
  locale: string;
  children: ReactNode;
}) => {
  return (
    <LocaleContext.Provider value={{ locale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context)
    throw new Error('useLocale must be used within a LocaleProvider');
  return context.locale;
};