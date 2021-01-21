import mongoose, { Schema } from 'mongoose';
import IUser from '../interfaces/user';

export const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
},
{
  timestamps: true
})

export const User = mongoose.model<IUser>('User', userSchema);
