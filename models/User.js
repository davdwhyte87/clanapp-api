import mongoose from 'mongoose';

const userScehma = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  location: { type: String },
  phone: String,
  image: String,
  created_at: { type: Date, required: true },
});

userScehma.pre('save', (next) => {
  const now = new Date();
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});

export default mongoose.model('User', userScehma);
