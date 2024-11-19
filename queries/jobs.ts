import { handleError } from '@/lib/utils';
import { Job } from '@/types/Job';
import axios from 'axios';

export const getJobs = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/jobs`);
    const jobs = res.data.map((p: Job) => ({
      ...p,
      start_date: new Date(p.start_date),
      end_date: new Date(p.end_date),
    }));
    return jobs;
  } catch (error) {
    throw new Error(handleError(error, 'Failed to fetch jobs'));
  }
};

export const addJob = async (job: Job) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/jobs`,
      job
    );
    return res.data;
  } catch (error) {
    throw new Error(handleError(error, 'Failed to add the job'));
  }
};

export const editJob = async (job: Job) => {
  try {
    const res = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/jobs`,
      job
    );
    return res.data;
  } catch (error) {
    throw new Error(handleError(error, 'Failed to edit the job'));
  }
};

export const deleteJob = async (id: number) => {
  try {
    const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/jobs`, {
      data: { id },
    });
    return res.data;
  } catch (error) {
    throw new Error(handleError(error, 'Error deleting job'));
  }
};
