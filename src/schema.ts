import { makeSchema, objectType, queryType } from 'nexus';
import { join } from 'path';
import * as allTypes from './schema/index';

const query = queryType({
  definition(t) {
    t.string('hello', {
      resolve(parent, args, ctx) {
        return "Hello world from server"
      },
    })
  },
})

export const schema = makeSchema({
  types: [query, allTypes],
  outputs: {
    typegen: join(__dirname, '.', 'nexus-typegen.ts'),
    schema: join(__dirname, '.', 'schema.graphql'),
  },
});
