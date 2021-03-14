import React from "react";
import { GET_USERS_ROOMS } from "../../apollo/queries/RoomQueries";
import { useQuery } from "@apollo/client";
import ContactList from "./ContactList/ContactList";
import RoomList from "./RoomList/RoomList";
import { View, StyleSheet } from "react-native";

interface Props {
  navigation: any;
}

const Home: React.FC<Props> = ({ navigation }) => {
  const { data, loading, error } = useQuery(GET_USERS_ROOMS);
  const handleContactIconPress = (id: string) => {
    console.log("navigated");
    navigation.push("Room", {
      roomId: id,
    });
  };

  return (
    <View style={styles.container}>
      <ContactList
        onContactPress={handleContactIconPress}
        contacts={loading ? [] : data.usersRooms.rooms}
      />
      <RoomList rooms={loading ? [] : data.usersRooms.rooms} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: "100vw",
    maxHeight: "100vh",
  },
});

export default Home;
