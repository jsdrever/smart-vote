const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
  }

  type Query {
    # Add query types
  }

  type Mutation {
    createUser(email: String!, password: String!): User!
  }
`;

module.exports = typeDefs;