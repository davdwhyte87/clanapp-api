import mongoose from 'mongoose';

const rumorScehma = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  content: { type: String, required: true },
  location: { type: String },
  image: String,
  like: { type: Array, default: [0, 30903, 93993] },
  comment: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment', required: false },
  created_at: { type: Date, default: Date.now },
});

export default mongoose.model('Rumor', rumorScehma);
