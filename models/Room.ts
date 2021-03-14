interface Room {
  id: string;
  messages: [Message];
  name: string;
  roomPic: string;
  user: User;
}

interface SingleRoom {
  id: string;
  name: string;
  roomPic: string;
}

interface Rooms {
  rooms: [SingleRoom];
  user: User;
}
