'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import LanguageChanger from './LanguageChanger';
import ThemeToggle from './ThemeToggle';
import { localizedLink } from '../../utils/linkHelper';

interface NavbarProps {
  locale: string;
}

export function Navbar({ locale }: NavbarProps) {
  const { t } = useTranslation(['common']);

  return (
    <div className="flex items-center">
      <Link href={localizedLink('/', locale)}>
        <h2 className="break-words whitespace-pre-wrap">
          LUCIANO
          <br />
          TONLORENZI
        </h2>
      </Link>
      <nav className="flex m-auto gap-8">
        <Link href={localizedLink('/about', locale)}>{t('about')}</Link>

        <Link href={localizedLink('/projects', locale)}>{t('projects')}</Link>

        <Link href={localizedLink('/contact', locale)}>{t('contact')}</Link>
      </nav>
      <ThemeToggle />
      <LanguageChanger />
    </div>
  );
}
