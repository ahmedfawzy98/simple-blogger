import User from '../models/user';

export default {
  users: async () => {
    return User.find();
  },

  user: async (parent, args, ctx, info) => {
    return await User.findOne(args.where).exec();
  },

  createUser: async (parent, args, ctx, info) => {
    return await User.create(args.data);
  },

  updateUser: async (parent, args, ctx, info) => {
    return await User.findOneAndUpdate(args.where, args.data,{new: true});
  },

  deleteUser: async (parent, args, ctx, info) => {
    return await User.findOneAndDelete(args.where);
  },
};
