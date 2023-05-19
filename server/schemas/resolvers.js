
const User = require('../models/User');
const bcrypt = require('bcrypt');

const resolvers = {
  Query: {
    // Add query resolvers
  },
  Mutation: {
    async createUser(_, { email, password }) {
      try {
        const user = new User({ email, password });
        await user.save();
        return user;
      } catch (error) {
        throw new Error(error);
      }
    },
    async loginUser(_, {email, password}) {
      const user = await User.findOne({email});
      if(!user){
          throw new Error('User not found');
      }

      const isValidPassword = await bcrypt.compare(password, user.password);
      if(!isValidPassword) {
        throw new Error('Invalid password');
      }

      return user;
    },
  },
};

module.exports = resolvers;