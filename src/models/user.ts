import mongoose, { Schema } from 'mongoose';

export const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
},
{
  timestamps: true
})

export const User = mongoose.model('User', userSchema);
