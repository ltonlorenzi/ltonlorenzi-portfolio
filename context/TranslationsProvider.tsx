'use client';

import initTranslations from '@/app/(public)/i18n';
import { createInstance, Resource } from 'i18next';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import { useLocale } from './LocaleContext';

interface TranslationsProviderProps {
  children: ReactNode;
  namespaces: string[]; // Array of namespaces as strings
  resources?: Resource; // Correct type for resources
}

export default function TranslationsProvider({
  children,
  namespaces,
  resources,
}: TranslationsProviderProps) {
  const i18n = createInstance();
  const locale = useLocale();

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
