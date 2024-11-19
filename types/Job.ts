export interface Job {
  _id?: string;
  company: string;
  title: string;
  start_date: Date;
  end_date: Date;
  body: string;
  imageUrl: string;
}
