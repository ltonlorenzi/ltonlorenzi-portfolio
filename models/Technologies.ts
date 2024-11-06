import mongoose from 'mongoose';

const TechnologiesSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Technologies ||
  mongoose.model('Technologies', TechnologiesSchema);
