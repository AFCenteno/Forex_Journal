const { AuthenticationError } = require('apollo-server-express');
const { User, Trade } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id)
        return user;
      }

      throw new AuthenticationError('Not logged in');
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },

    login: async (parent, { email, password }) => {
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
    },

    addTrade: async (parent, args, context) => {
      if (context.user) {
        const userTrades = await User.findByIdAndUpdate(
          {_id: context.user._id},
          {$push: {trades: args}},
          {new: true}
          );
        return userTrades
      }
      throw new AuthenticationError('There was a request error...');
    },

    removeTrade: async (parent, { tradeId }, context) => {
      if (context.user) {
          const updatedTrades = await User.findOneAndUpdate(
              { _id: context.user._id },
              { $pull: { trades: { tradeId: tradeId } } },
              { new: true }
          );
          return updatedTrades;
      }
      throw new AuthenticationError('You need to be logged in!');
  }
  }
};

module.exports = resolvers;
