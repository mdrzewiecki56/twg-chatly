import React from "react";
import { Image, StyleSheet } from "react-native";

interface Props {
  style: {};
  icon: string;
}

const CircleIcon: React.FC<Props> = ({ style, icon }) => {
  console.log({ height: "50px", width: "50px", borderRadius: 50, ...style });
  return (
    <Image
      style={{
        height: "50px",
        width: "50px",
        borderRadius: 50,
        ...style,
      }}
      source={{
        uri: icon,
      }}
    />
  );
};

export default CircleIcon;
