import { gql } from "@apollo/client";

export const GET_ROOM = gql`
  query GetRoom($id: ID!) {
    room(id: $id) {
      id
      messages {
        id
        body
        insertedAt
        user {
          id
        }
      }
      name
      roomPic
      user {
        id
      }
    }
  }
`;

export const GET_USERS_ROOMS = gql`
  query GetUsersRooms {
    usersRooms {
      rooms {
        id
        name
        roomPic
      }
    }
  }
`;

export const MESSAGE_ADDED_SUBSCRIPTION = gql`
  subscription OnMessageAdded($roomId: String!) {
    messageAdded(roomId: $roomId) {
      body
      id
      insertedAt
    }
  }
`;
