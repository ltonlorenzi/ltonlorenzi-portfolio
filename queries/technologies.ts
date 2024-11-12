import { Technology } from '@/types/Technology';
import { handleError } from '@/utils/handleError';
import axios from 'axios';

export const fetchTechnologies = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/technologies`
    );
    return res.data;
  } catch (error) {
    throw new Error(handleError(error, 'Failed to fetch technologies'));
  }
};

export const addTechnology = async (technology: Technology) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/technologies`,
      {
        body: { technology },
      }
    );
    return res.data;
  } catch (error) {
    throw new Error(handleError(error, 'Failed to add the technology'));
  }
};

export const deleteTechnology = async (id: number) => {
  try {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/technologies`,
      {
        data: { id },
      }
    );
    return res.data;
  } catch (error) {
    throw new Error(handleError(error, 'Error deleting technology'));
  }
};