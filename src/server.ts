import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { schema } from './schema';
import { connect } from './utils/db';

const server = new ApolloServer({ schema });

const app = express();
server.applyMiddleware({ app })

export const start = async () => {
  try {
    await connect();
    app.listen(4000, () => {
      console.log('🚀 Server is running and listening to http://localhost:4000/graphql');
    });
  } catch(e) {
    console.error(e);
  }
}


