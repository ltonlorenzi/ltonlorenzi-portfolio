import mongoose from 'mongoose';

const TechnologySchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: false,
  },
});

export default mongoose.models.Technology ||
  mongoose.model('Technology', TechnologySchema);
