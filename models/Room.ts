interface Room {
  id: String;
  messages: [Message];
  name: String;
  roomPic: String;
  user: User;
}

interface SingleRoom {
  id: String;
  name: String;
  roomPic: String;
}

interface Rooms {
  rooms: [SingleRoom];
  user: User;
}
