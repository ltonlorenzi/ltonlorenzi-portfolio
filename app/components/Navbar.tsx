import { localizedLink } from '@/utils/linkHelper';
import { routes } from '@/utils/routes';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  locale: string;
}

export const Navbar = ({ locale }: NavbarProps) => {
  const { t } = useTranslation(['common']);

  return (
    <nav className="mx-auto gap-8 hidden md:flex">
      {routes.map((route) => (
        <Link href={localizedLink(`/${route}`, locale)} key={route}>
          {t(`headers.${route}`)}
        </Link>
      ))}
    </nav>
  );
};
