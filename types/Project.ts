export interface Project {
  _id: string;
  title: string;
  description: string;
  start_date: Date;
  end_date: Date;
  technologies: string[];
  translations: [{
    locale: string
    fields: { title: string, description: string}
  }]
}
