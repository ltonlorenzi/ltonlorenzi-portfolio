'use client';

// import Hamburger from 'hamburger-react';
import { useLocale } from '@/context/LocaleContext';
import { localizedLink } from '@/utils/linkHelper';
import { routes } from '@/utils/routes';
import Link from 'next/link';
// import { useState } from 'react';

import LanguageChanger from './LanguageChanger';
import { Navbar } from './Navbar';
import { NavbarMobile } from './NavbarMobile';
import ThemeToggle from './ThemeToggle';

export function Header() {
  const locale = useLocale();
  return (
    <div className="flex items-center py-4 md:py-8 md:px-16 px-8 gap-2">
      <Link href={localizedLink(routes[0], locale)} className="mr-auto md:mr-0">
        <h3 className="break-words whitespace-pre-wrap">
          Luciano
          <br />
          Tonlorenzi
        </h3>
      </Link>

      <Navbar />

      <ThemeToggle />
      <LanguageChanger />
      <NavbarMobile />
    </div>
  );
}
