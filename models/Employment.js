import mongoose from 'mongoose';

const employmentScehma = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  description: { type: String, required: true },
  email: String,
  image: String,
  created_at: { type: Date, required: true, default: Date.now },
});

export default mongoose.model('Employment', employmentScehma);
