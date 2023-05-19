const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
  }

  type Mutation {
    createUser(email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;