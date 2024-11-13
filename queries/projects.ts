import { handleError } from '@/utils/handleError';
import axios from 'axios';

export const fetchProjects = async (locale: string) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/projects?locale=${locale}`
    );
    return res.data;
  } catch (error) {
    throw new Error(handleError(error, 'Failed to get projects'));
  }
};

export const fetchAllProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/projects`, {
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }

  return res.json();
};
