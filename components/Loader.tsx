import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

interface Props {
  backgroundColor: string;
  color: string;
}

const Loader: React.FC<Props> = ({ backgroundColor, color }) => {
  const styles = StyleSheet.create({
    Loader: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor,
    },
  });
  return (
    <View style={styles.Loader}>
      <ActivityIndicator size="large" color={color} />
    </View>
  );
};

export default Loader;
