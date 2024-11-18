import { Locale } from '@/types/Locale';

export const localizedLink = (path: string, locale: Locale): string => {
  return `/${locale}${path}`;
};
