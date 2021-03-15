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
          profilePic
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

export const TYPING_USER_SUBSCRIPTION = gql`
  subscription onUserTyping($roomId: String!) {
    typingUser(roomId: $roomId) {
      firstName
    }
  }
`;

export const ADD_MESSAGE = gql`
  mutation sendMessage($body: String!, $roomId: String!) {
    sendMessage(body: $body, roomId: $roomId) {
      body
      id
      insertedAt
      user {
        id
        profilePic
      }
    }
  }
`;
