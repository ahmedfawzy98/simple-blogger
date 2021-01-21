import cuid from 'cuid';
import _ from 'lodash';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const clearDB = () => {
  return Promise.all(_.map(mongoose.connection.collections, c => c.deleteMany({})));
}

beforeEach(async () => {
  const db = process.env.TEST_DB_URL + cuid();
  if(mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(db, { useNewUrlParser: true })
      await clearDB();
    } catch(e) {
      console.log('Connection error');
      console.error(e);
      throw e;
    }
  } else {
    await clearDB();
  }
});

afterEach(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.disconnect();
});

