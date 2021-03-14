import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CircleIcon from "../../../../components/CircleIcon";

interface Props {
  room: SingleRoom;
}

const RoomItem: React.FC<Props> = ({ room }) => {
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
            Timestamp
          </Text>
        </View>
        <Text>Last message</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  RoomItem: {
    height: "100px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  RoomItem__Icon: {},
  RoomItem__Text: {
    width: "100%",
    padding: "1rem",
  },
  RoomItem__Text__Header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: "2rem",
  },
  RoomItem__Text__Header__RoomName: {
    color: "#302050",
    paddingRight: "10px",
    fontWeight: 700,
  },
  RoomItem__Text__Header__Timestamp: {
    color: "#b6b1c2",
    minWidth: "fit-content",
  },
});

export default RoomItem;
