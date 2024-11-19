import { AxiosError } from 'axios';

import { Locale } from './types';

export const localizedLink = (path: string, locale: Locale): string => {
  return `/${locale}${path}`;
};

export const handleError = (
  error: unknown,
  customMessage = 'An error occurred'
) => {
  if (error instanceof AxiosError && error?.response?.data?.message)
    return error.response.data.message;
  if (error instanceof Error) {
    if (error?.message) return error.message;
  }
  return customMessage;
};
