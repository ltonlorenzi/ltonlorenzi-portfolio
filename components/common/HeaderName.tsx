'use client';
import { useLocale } from '@/context/LocaleContext';
import { userName } from '@/lib/constants';
import { routes } from '@/lib/constants';
import { localizedLink } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const HeaderName = () => {
  const locale = useLocale();

  return (
    <Link href={localizedLink(routes[0], locale)} className="mr-auto md:mr-0">
      <h3 className="w-3">{userName}</h3>
    </Link>
  );
};

export default HeaderName;
