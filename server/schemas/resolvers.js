const {AuthenticationError} = require('apollo-server-express')
const User = require('../models/User');
const Senator = require('../models/Senator');
// const bcrypt = require('bcrypt');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    senators: async () => {
      return Senator.find();
    },

    senator: async (parent, { senatorId }) => {
      return Senator.findOne({ _id: senatorId });
    },
  },
  Mutation: {
    // async createUser(_, { email, password }) {
    //   try {
    //     const user = new User({ email, password });
    //     await user.save();
    //     return user;
    //   } catch (error) {
    //     throw new Error(error);
    //   }
    // },
    // async loginUser(_, {email, password}) {
    //   const user = await User.findOne({email});
    //   if(!user){
    //       throw new Error('User not found');
    //   }

    //   const isValidPassword = await user.compare(password, user.password);
    //   if(!isValidPassword) {
    //     throw new Error('Invalid password');
    //   }

    //   return user;
    // },

    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }

  },
};

module.exports = resolvers;