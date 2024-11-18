import { Locale } from './Locale';

export interface Project {
  _id?: number;
  title: string;
  description: string;
  start_date: Date;
  end_date: Date;
  technologies: number[];
  translations?: {
    locale: Locale;
    fields: { description: string; title: string };
  }[];
  company: string;
  imageUrl?: string;
  type: string;
  projectUrl?: string;
}
