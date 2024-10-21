'use client';

import i18nConfig from '@/i18nConfig';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = () => {
    const newLocale = currentLocale === 'en' ? 'es' : 'en';

    // Set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // Use replace to avoid pushing a new entry in the history stack
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.replace('/' + newLocale + currentPathname);
    } else {
      router.replace(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }
  };

  return <button onClick={handleChange}>{currentLocale}</button>;
}
