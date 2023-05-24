const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
  }

  type Senator {
    _id: ID!
    firstName: String!
    lastName: String!
    PartyAffiliation: String!
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    senators: [Senator]!
    senator(senatorId: ID!): Senator
  }

  type Mutation {
    createUser(email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;