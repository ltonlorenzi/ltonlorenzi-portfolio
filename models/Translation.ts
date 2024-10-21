import mongoose from 'mongoose';

const TranslationSchema = new mongoose.Schema({
  entityId: {
    type: String,
    required: true,
  },
  entityName: {
    type: String,
    required: true,
  },
  locale: {
    type: String,
    required: true,
  },
  fields: {
    type: Object,
    required: true,
  },
});

export default mongoose.models.Translation ||
  mongoose.model('Translation', TranslationSchema);
