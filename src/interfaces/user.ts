import { Document } from 'mongoose';

export default interface IUser extends Document{
  id: string
  name: string,
  email: string,
  password: string,
  createdAt: Date,
  updatedAt: Date
};

