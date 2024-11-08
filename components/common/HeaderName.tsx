'use client';
import { useLocale } from '@/context/LocaleContext';
import { localizedLink } from '@/utils/linkHelper';
import { routes } from '@/utils/routes';
import Link from 'next/link';
import React from 'react';

const HeaderName = () => {
  const locale = useLocale();

  return (
    <Link href={localizedLink(routes[0], locale)} className="mr-auto md:mr-0">
      <h3 className="break-words whitespace-pre-wrap">
        Luciano
        <br />
        Tonlorenzi
      </h3>
    </Link>
  );
};

export default HeaderName;
