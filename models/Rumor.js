import mongoose from 'mongoose';

const rumorScehma = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  content: { type: String, required: true },
  location: { type: String },
  image: String,
  like: { type: Array },
  comment: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment', required: false },
  created_at: { type: Date, required: true },
});

rumorScehma.pre('save', (next) => {
  const now = new Date();
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});

export default mongoose.model('Rumor', rumorScehma);
