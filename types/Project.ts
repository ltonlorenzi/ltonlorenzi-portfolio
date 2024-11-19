import { Locale } from '@/lib/types';

export interface Project {
  _id?: number;
  title: string;
  description: string;
  start_date: Date;
  end_date: Date;
  technologies: number[];
  company: string;
  imageUrl?: string;
  type: string;
  projectUrl?: string;
}

export interface ProjectWTranslations extends Project {
  translations: {
    locale: Locale;
    fields: { description: string; title: string };
  }[];
}
