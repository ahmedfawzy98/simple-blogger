import mongoose from 'mongoose';

export const connect = () => {
  return mongoose.connect('mongodb://localhost:27017/simple-blogging', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
}
