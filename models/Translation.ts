import mongoose from 'mongoose';

const TranslationSchema = new mongoose.Schema({
  entityId: {
    type: Number,
    required: true,
  },
  entityName: {
    type: String,
    required: true,
  },
  locale: {
    type: String,
    required: true,
    enum: ['en', 'es'],
  },
  fields: {
    type: Object,
    required: true,
  },
});

export default mongoose.models.Translation ||
  mongoose.model('Translation', TranslationSchema);
