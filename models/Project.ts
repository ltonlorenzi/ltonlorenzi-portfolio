import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  title: {
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
    type: Array<string>,
    required: true,
  },
});

export default mongoose.models.Project ||
  mongoose.model('Project', ProjectSchema);
