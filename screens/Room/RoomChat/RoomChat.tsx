import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import { useMutation } from "@apollo/client";
import { ADD_MESSAGE } from "../../../apollo/queries/RoomQueries";

interface Props {
  messages: Message[];
  roomId: string;
}
const RoomChat: React.FC<Props> = ({ messages, roomId }) => {
  const [addMessage, { data }] = useMutation(ADD_MESSAGE);
  const [locallyAddedMessages, setLocallyAddedMessages] = useState([]);

  const handleMessageSend = (messages: IMessage[]) => {
    messages.forEach((m) => {
      addMessage({
        variables: {
          body: m.text,
          roomId,
        },
      });
    });
  };

  useEffect(() => {
    if (data && data.sendMessage) {
      setLocallyAddedMessages([...locallyAddedMessages, data.sendMessage]);
    }
  }, [data]);

  return (
    <View style={styles.RoomList}>
      <GiftedChat
        messages={[...messages, ...locallyAddedMessages].map((m) => ({
          _id: m.id,
          text: m.body,
          createdAt: m.insertedAt,
          user: {
            _id: m.user.id,
            name: m.user.firstName,
            avatar: m.user.profilePic,
          },
        }))}
        inverted={false}
        onSend={handleMessageSend}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  RoomList: {
    height: "100%",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    marginTop: "-1.5rem",
    padding: "1rem",
  },
});

export default RoomChat;
