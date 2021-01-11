import {
  objectType,
  queryField,
  list,
  nonNull,
  stringArg,
  mutationField,
} from 'nexus';
import { User } from '../models/user';

export const user = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.string('_id')
    t.nonNull.string('name')
    t.nonNull.string('email')
    t.nonNull.string('password')
    t.nonNull.timestamp('createdAt')
    t.nonNull.timestamp('updatedAt')
  },
});

export const getUsers = queryField('users', {
  type: nonNull(list(nonNull('User'))),
  resolve: async (parent, args, ctx) => {
    return await User.find().lean();
  }
});

export const getUser = queryField('user', {
  type: 'User',
  args: {
    email: nonNull(stringArg()),
  },
  resolve: async (parent, args, ctx): Promise<any> => {
    let user = await User.findOne({...args}).exec();
    console.log(user);
    return user;
  }
});

export const createUser = mutationField('createUser', {
  type: 'User',
  args: {
    name: nonNull(stringArg()),
    email: nonNull(stringArg()),
    password: nonNull(stringArg()),
  },
  resolve: async (parent, args, ctx): Promise<any> => {
    let user = new User({
      name: args.name,
      email: args.email,
      password: args.password
    });
    return await user.save();
  }
});
