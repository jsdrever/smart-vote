/* const { Tech, Matchup } = require('../models');

const resolvers = {
  Query: {
    tech: async () => {
      return Tech.find({});
    },
    matchups: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Matchup.find(params);
    },
  },
  Mutation: {
    createMatchup: async (parent, args) => {
      const matchup = await Matchup.create(args);
      return matchup;
    },
    createVote: async (parent, { _id, techNum }) => {
      const vote = await Matchup.findOneAndUpdate(
        { _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
  },
}; */

module.exports = resolvers;


const User = require('../models/User');

const resolvers = {
  Query: {
    // Add  query resolvers
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
  },
};

module.exports = resolvers;