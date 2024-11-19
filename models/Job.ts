import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
  start_date: {
    type: Date,
    required: false,
  },
  end_date: {
    type: Date,
    required: false,
  },
  body: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: false,
  },
});

export default mongoose.models.Job || mongoose.model('Job', JobSchema);
