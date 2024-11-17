export interface Job {
  _id?: number;
  company: string;
  title: string;
  start_date: Date;
  end_date: Date;
  body: string;
  companyId: string;
}
