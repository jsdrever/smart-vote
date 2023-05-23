import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation createUser(
    $email: String!
    $password: String!
  ) {
    createUser(
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
