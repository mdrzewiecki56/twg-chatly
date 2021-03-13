import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useQuery } from "@apollo/client";
import Loader from "../../../components/Loader";
import { GET_USERS } from "../../../apollo/queries/UserQueries";
import CircleIcon from "../../../components/CircleIcon";
const ContactList = () => {
  const { data: users, error, loading } = useQuery(GET_USERS);

  return (
    <View style={styles.ContactList}>
      <View>
        <Text style={styles.ContactList__Header}>Chat with your friends</Text>
        <View style={styles.ContactList__List}>
          {loading ? (
            <Loader backgroundColor="#5b61b9" color="#ffffff" />
          ) : (
            <>
              <CircleIcon
                icon={require("../../../resources/humanIcon.svg")}
                style={iconStyles.CircleIcon}
              />
              <CircleIcon
                icon={require("../../../resources/humanIcon.svg")}
                style={iconStyles.CircleIcon}
              />
              <CircleIcon
                icon={require("../../../resources/humanIcon.svg")}
                style={iconStyles.CircleIcon}
              />
              <CircleIcon
                icon={require("../../../resources/humanIcon.svg")}
                style={iconStyles.CircleIcon}
              />
              <CircleIcon
                icon={require("../../../resources/humanIcon.svg")}
                style={iconStyles.CircleIcon}
              />
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
    height: "210px",
  },
  ContactList__Header: {
    paddingTop: "40px",
    paddingLeft: "25px",
    marginBottom: "1rem",
    maxWidth: "150px",
    color: "#fff",
    fontSize: "120%",
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
