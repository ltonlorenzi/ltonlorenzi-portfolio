import { ContactFormValues } from '@/app/(public)/[locale]/contact/page';
import { handleError } from '@/utils/handleError';
import axios from 'axios';

export const sendEmail = async (data: ContactFormValues) => {
  try {
    const response = await axios.post('/api/sendEmail', data);
    return response.data;
  } catch (error) {
    throw new Error(handleError(error, 'Failed to send email'));
  }
};
