import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document{
  id: string
  name: string,
  email: string,
  password: string,
  createdAt: Date,
  updatedAt: Date
};

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

const User = mongoose.model<IUser>('User', userSchema);
export default User;
