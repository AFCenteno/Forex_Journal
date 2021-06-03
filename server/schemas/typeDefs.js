const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Trade {
    name: String
    description: String
    entryPrice: Float
    exitPrice: Float
    sL: Float
    tP: Float
    winLose: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
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
    addTrade(name: String!, description: String!, entryPrice: Float!, exitPrice: Float, sL: Float, tP: Float, winLose: String): Trade
  }
`;

module.exports = typeDefs;
