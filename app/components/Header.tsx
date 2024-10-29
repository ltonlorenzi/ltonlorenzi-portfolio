'use client';

// import Hamburger from 'hamburger-react';
import Link from 'next/link';
// import { useState } from 'react';

import LanguageChanger from './LanguageChanger';
import { Navbar } from './Navbar';
import { NavbarMobile } from './NavbarMobile';
import ThemeToggle from './ThemeToggle';
import { localizedLink } from '../../utils/linkHelper';

interface HeaderProps {
  locale: string;
}

export function Header({ locale }: HeaderProps) {
  return (
    <div className="flex items-center pt-4 md:py-8 md:px-16 px-8 gap-2">
      <Link href={localizedLink('/', locale)} className="mr-auto md:mr-0">
        <h2 className="break-words whitespace-pre-wrap">
          Luciano
          <br />
          Tonlorenzi
        </h2>
      </Link>

      <Navbar locale={locale} />

      <ThemeToggle />
      <LanguageChanger />
      <NavbarMobile locale={locale} />
    </div>
  );
}
