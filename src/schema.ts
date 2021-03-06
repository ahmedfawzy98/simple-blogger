import { makeSchema } from 'nexus';
import { join } from 'path';
import * as allTypes from './typeDefs/index';

export const schema = makeSchema({
  types: [allTypes],
  outputs: {
    typegen: join(__dirname, '.', 'nexus-typegen.ts'),
    schema: join(__dirname, '.', 'schema.graphql'),
  },
});

export default schema;
