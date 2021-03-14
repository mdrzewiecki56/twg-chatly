import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useQuery } from "@apollo/client";
import Loader from "../../../components/Loader";
import { GET_USERS_ROOMS } from "../../../apollo/queries/RoomQueries";
import CircleIcon from "../../../components/CircleIcon";

interface Props {
  contacts: SingleRoom[];
  onContactPress: (id: string) => void;
}
const ContactList: React.FC<Props> = ({ onContactPress, contacts }) => {
  return (
    <View style={styles.ContactList}>
      <View>
        <View style={styles.ContactList__Header}>
          <Text style={styles.ContactList__Header__Text}>
            Chat with your friends
          </Text>
        </View>

        <View style={styles.ContactList__List}>
          {!contacts ? (
            <Loader backgroundColor="#5b61b9" color="#ffffff" />
          ) : (
            <>
              {contacts.map((c: SingleRoom) => (
                <CircleIcon
                  key={c.id}
                  style={iconStyles.CircleIcon}
                  onPress={() => onContactPress(c.id)}
                  icon={c.roomPic}
                />
              ))}
            </>
          )}
        </View>
      </View>
    </View>
  );
};

const iconStyles = {
  CircleIcon: {
    marginRight: "1rem",
  },
};

const styles = StyleSheet.create({
  ContactList: {
    backgroundColor: "#5b61b9",
    height: "240px",
  },
  ContactList__Header: {
    paddingTop: "40px",
    paddingLeft: "25px",
    marginBottom: "1rem",
    maxWidth: "150px",
  },
  ContactList__Header__Text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  ContactList__List: {
    height: "100px",
    paddingTop: "25px",
    paddingBottom: "25px",
    paddingLeft: "25px",
    paddingRight: "25px",
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
  },
});

export default ContactList;
