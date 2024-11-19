import { Locale } from '@/lib/types';

export interface Translation {
  _id?: number;
  entityId?: string;
  entityName?: string;
  locale: Locale;
  fields: object;
}
