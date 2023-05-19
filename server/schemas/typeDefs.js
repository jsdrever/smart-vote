const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
  }

  type Query {
    # Add any query types you need
  }

  type Mutation {
    createUser(email: String!, password: String!): User!
  }
`;

module.exports = typeDefs;