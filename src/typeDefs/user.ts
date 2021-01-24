import {
  objectType,
  queryField,
  list,
  nonNull,
  mutationField,
  arg,
  inputObjectType,
} from 'nexus';
import resolvers from '../resolvers/user_resolvers'

export const user = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.string('id')
    t.nonNull.string('name')
    t.nonNull.email('email')
    t.nonNull.string('password')
    t.nonNull.timestamp('createdAt')
    t.nonNull.timestamp('updatedAt')
  },
});

export const getUsers = queryField('users', {
  type: nonNull(list(nonNull('User'))),
  resolve: resolvers.users,
});

export const getUser = queryField('user', {
  type: 'User',
  args: {
    where: arg({type: 'userWhereUniqueInput'})
  },
  resolve: resolvers.user,
});

export const createUser = mutationField('createUser', {
  type: 'User',
  args: {
    data: arg({type: 'createUserInput'})
  },
  resolve: resolvers.createUser,
});

export const updateUser = mutationField('updateUser', {
  type: 'User',
  args: {
    where: arg({ type: "userWhereUniqueInput" }),
    data: arg({ type: "updateUserInput" })
  },
  resolve: resolvers.updateUser,
});

export const deleteUser = mutationField('deleteUser', {
  type: 'User',
  args: {
    where: arg({type: 'userWhereUniqueInput'})
  },
  resolve: resolvers.deleteUser,
})

export const userWhereUniqueInput = inputObjectType({
  name: 'userWhereUniqueInput',
  definition(t) {
    t.nonNull.email('email')
  }
});

export const updateUserInput = inputObjectType({
  name: 'updateUserInput',
  definition(t) {
    t.string('name')
    t.string('password')
  }
});

export const createUserInput = inputObjectType({
  name: 'createUserInput',
  definition(t) {
    t.nonNull.email('email')
    t.nonNull.string('name')
    t.nonNull.string('password')
  }
});
