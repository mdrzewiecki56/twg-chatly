import React from "react";
import { View, StyleSheet } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_ROOM } from "../../apollo/requests/RoomRequests";
import RoomHeader from "./RoomHeader/RoomHeader";
import RoomChat from "./RoomChat/RoomChat";

interface Props {
  navigation: any;
  route: any;
}

const Room: React.FC<Props> = ({ navigation: { goBack }, route }) => {
  const { roomId } = route.params;
  const { data } = useQuery(GET_ROOM, {
    variables: { id: roomId },
  });

  const handleBackPress = () => {
    goBack();
  };
  return (
    <View style={styles.container}>
      <RoomHeader
        onBackPress={handleBackPress}
        roomName={!data ? "Loading..." : data.room.name}
      />
      <RoomChat messages={!data ? [] : data.room.messages} roomId={roomId} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100vw",
    height: "100vh",
  },
});

export default Room;
