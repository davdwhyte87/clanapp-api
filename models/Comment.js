import mongoose from 'mongoose';

const commentScehma = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  content: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  created_at: { type: Date, required: true },
});

commentScehma.pre('save', (next) => {
  const now = new Date();
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});

export default mongoose.model('Comment', commentScehma);
