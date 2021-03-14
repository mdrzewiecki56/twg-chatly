import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSubscription } from "@apollo/client";
import { MESSAGE_ADDED_SUBSCRIPTION } from "../../../../apollo/queries/RoomQueries";
import CircleIcon from "../../../../components/CircleIcon";

interface Props {
  room: SingleRoom;
}

const RoomItem: React.FC<Props> = ({ room }) => {
  const { data } = useSubscription(MESSAGE_ADDED_SUBSCRIPTION, {
    variables: { roomId: room.id },
  });

  return (
    <View style={styles.RoomItem}>
      <CircleIcon icon={room.roomPic} />
      <View style={styles.RoomItem__Text}>
        <View style={styles.RoomItem__Text__Header}>
          <Text
            numberOfLines={1}
            style={styles.RoomItem__Text__Header__RoomName}
          >
            {room.name}
          </Text>
          <Text
            numberOfLines={1}
            style={styles.RoomItem__Text__Header__Timestamp}
          >
            {!data ? "Loading..." : data.messageAdded.insertedAt.substr(11, 5)}
          </Text>
        </View>
        <Text>{!data ? "Loading..." : data.messageAdded.body}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  RoomItem: {
    height: "100px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  RoomItem__Icon: {},
  RoomItem__Text: {
    maxWidth: "100%",
    flex: 1,
    padding: "1rem",
  },
  RoomItem__Text__Header: {
    maxWidth: "100%",
    flex: 1,
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  RoomItem__Text__Header__RoomName: {
    color: "#302050",
    paddingRight: "10px",
    fontWeight: 700,
    minWidth: 0,
  },
  RoomItem__Text__Header__Timestamp: {
    color: "#b6b1c2",
    minWidth: "fit-content",
  },
});

export default RoomItem;
