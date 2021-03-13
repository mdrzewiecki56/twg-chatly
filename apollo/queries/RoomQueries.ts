import { gql } from "@apollo/client";

export const GET_ROOM = gql`
  query GetRoom {
    room {
      id
      name
    }
  }
`;
export const GET_ROOMS = gql`
  query GetRooms {
    rooms {
      id
      name
    }
  }
`;
export const GET_USERS_ROOMS = gql`
  query GetUsersRooms {
    usersRooms {
      user {
        email
        firstName
        lastName
        id
        role
      }
    }
  }
`;
