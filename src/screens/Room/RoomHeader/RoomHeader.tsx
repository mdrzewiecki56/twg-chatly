import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

interface Props {
  onBackPress: () => void;
  roomName: string;
}

const RoomHeader: React.FC<Props> = ({ onBackPress, roomName }) => {
  return (
    <View style={styles.RoomHeader}>
      <Pressable onPress={onBackPress}>
        <View style={styles.RoomHeader__GoBack}>
          <Text style={styles.RoomHeader__GoBack__Text}>Go back</Text>
        </View>
      </Pressable>
      <View style={styles.RoomHeader__Header}>
        <Text style={styles.RoomHeader__Header__Text}>
          <Text>{roomName}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  RoomHeader: {
    backgroundColor: "#5b61b9",
    height: "200px",
  },

  RoomHeader__Header: {
    position: "absolute",
    top: "60px",
    left: "25px",
    marginBottom: "1rem",
  },
  RoomHeader__Header__Text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  RoomHeader__GoBack: {
    position: "absolute",
    top: "1rem",
    left: "1rem",
  },
  RoomHeader__GoBack__Text: {
    color: "#a0a3cb",
    fontWeight: "600",
  },
});

export default RoomHeader;
