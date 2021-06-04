const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Trade {
    tradeId: Float
    name: String
    description: String
    entryPrice: String
    exitPrice: String
    sL: String
    tP: String
    winLose: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    trades: [Trade]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    trade: Trade
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addTrade(tradeId: Float!, name: String!, description: String!, entryPrice: String!, exitPrice: String, sL: String, tP: String, winLose: String): User
    removeTrade(tradeId: Float!): User
  }
`;

module.exports = typeDefs;
