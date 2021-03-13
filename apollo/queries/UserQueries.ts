import { DocumentNode, TypedDocumentNode, gql } from "@apollo/client";
export const GET_USER = gql`
  query GetUser($id: ID) {
    user(id: $id) {
      id
      name
    }
  }
`;
export const GET_USERS = gql`
  query GetUsers {
    users {
      email
      firstName
      id
      lastName
      profilePic
      role
    }
  }
`;
