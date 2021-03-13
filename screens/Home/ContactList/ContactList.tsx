import React from "react";
import { Text } from "react-native";
import { useQuery } from "@apollo/client";
import Loader from "../../../components/Loader";
import { GET_USERS } from "../../../apollo/queries/UserQueries";

const ContactList = () => {
  const { data: users, loading } = useQuery(GET_USERS);

  if (loading) return <Loader backgroundColor="#5b61b9" color="#ffffff" />;
  return <Text>Contact List</Text>;
};

export default ContactList;
