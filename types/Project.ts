export interface Project {
  _id?: number;
  title: string;
  description: string;
  start_date: Date;
  end_date: Date;
  technologies: number[];
  translations?: [
    {
      locale: string;
      fields: { title: string; description: string };
    },
  ];
  company: string;
  imageUrl: string;
  type?: string;
  projectUrl?: string;
}
