'use client';
import { useLocale } from '@/context/LocaleContext';
import { routes } from '@/lib/constants';
import { localizedLink } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { t } = useTranslation(['common']);
  const locale = useLocale();

  return (
    <nav className="mx-auto gap-8 hidden md:flex">
      {routes.map((route) => {
        return (
          <Link
            href={localizedLink(`/${route}`, locale)}
            key={route}
            className="hover:scale-105 hover:font-semibold"
          >
            {t(`headers.${route}`)}
          </Link>
        );
      })}
    </nav>
  );
};
