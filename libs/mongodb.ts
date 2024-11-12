import { handleError } from '@/utils/handleError';
import mongoose from 'mongoose';

const connectMongoDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri)
    throw new Error('MONGODB_URI is not defined in the environment variables');

  try {
    await mongoose.connect(uri);

    console.log('Connected to MongoDB');
  } catch (error) {
    throw new Error(handleError(error, 'Failed to connect to MongoDB'));
  }
};

export default connectMongoDB;
