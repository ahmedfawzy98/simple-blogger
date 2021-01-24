import { queryType } from 'nexus';

export const query = queryType({
  definition(t) {
    t.string('hello', {
      resolve(parent, args, ctx) {
        return "Hello world from server"
      },
    })
  },
})

export * from './user';
export * from './scalar_types';
