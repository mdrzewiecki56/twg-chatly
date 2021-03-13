import React from "react";
import { ActivityIndicator, View } from "react-native";

interface Props {
  backgroundColor: string;
  color: string;
}

const Loader: React.FC<Props> = ({ backgroundColor, color }) => (
  <View style={{ backgroundColor, flex: 1 }}>
    <ActivityIndicator size="large" color={color} />
  </View>
);

export default Loader;
