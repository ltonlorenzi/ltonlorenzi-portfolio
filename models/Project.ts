import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  technologies: {
    type: [Number],
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['desktop', 'mobile'],
    required: true,
  },
  projectUrl: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Project ||
  mongoose.model('Project', ProjectSchema);
