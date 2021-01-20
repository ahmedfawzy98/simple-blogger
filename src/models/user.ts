import mongoose, { Schema } from 'mongoose';
import IUser from '../interfaces/user';

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

export const User = mongoose.model<IUser>('User', userSchema);
