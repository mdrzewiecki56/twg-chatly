import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import RoomItem from "./RoomItem/RoomItem";
interface Props {
  rooms: SingleRoom[];
  onRoomPress: (id: string) => void;
}

const RoomList: React.FC<Props> = ({ rooms, onRoomPress }) => {
  return (
    <View style={styles.RoomList}>
      {rooms.map((r) => (
        <Pressable key={r.id} onPress={() => onRoomPress(r.id)}>
          <RoomItem room={r} />
        </Pressable>
      ))}
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

export default RoomList;
