import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import { useMutation, useSubscription } from "@apollo/client";
import {
  ADD_MESSAGE,
  TYPING_USER_SUBSCRIPTION,
} from "../../../apollo/requests/RoomRequests";

interface Props {
  messages: Message[];
  roomId: string;
}
const RoomChat: React.FC<Props> = ({ messages, roomId }) => {
  const [addMessage, { data }] = useMutation(ADD_MESSAGE);
  const { data: typingPerson } = useSubscription(TYPING_USER_SUBSCRIPTION, {
    variables: { roomId },
  });
  const [locallyAddedMessages, setLocallyAddedMessages] = useState<Message[]>(
    []
  );

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
        renderFooter={() =>
          typingPerson && typingPerson.firstName ? (
            <Text>{typingPerson.firstName} is typing...</Text>
          ) : (
            ""
          )
        }
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
