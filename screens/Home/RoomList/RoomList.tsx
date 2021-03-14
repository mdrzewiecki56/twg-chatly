import React from "react";
import { View, StyleSheet } from "react-native";
import RoomItem from "./RoomItem/RoomItem";
interface Props {
  rooms: SingleRoom[];
}

const RoomList: React.FC<Props> = ({ rooms }) => {
  return (
    <View style={styles.RoomList}>
      {rooms.map((r) => (
        <RoomItem room={r} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  RoomList: {
    height: "100%",
    width: "100vw",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    marginTop: "-1.5rem",
    padding: "2rem",
  },
});

export default RoomList;
