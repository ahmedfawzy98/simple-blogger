import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { schema } from './schema';
import { connect } from './utils/db';
import { typeDefs, resolvers } from 'graphql-scalars';
import dotenv from 'dotenv';

dotenv.config();

const server = new ApolloServer({
  schema,
  typeDefs: [ ...typeDefs ],
  resolvers: {
    ...resolvers,
  },
});

const app = express();
server.applyMiddleware({ app })

export const start = async () => {
  try {
    await connect();
    console.log('Connected to the database');
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server is running and listening to http://localhost:${process.env.PORT}/graphql`);
    });
  } catch(e) {
    console.error(e);
  }
}


