import React from "react";
import { Image, Pressable } from "react-native";

interface Props {
  style?: {};
  onPress?: () => void;
  icon: string;
}

const CircleIcon: React.FC<Props> = ({ style, icon, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Image
        style={{
          height: "50px",
          width: "50px",
          borderRadius: 50,
          ...style,
        }}
        source={{ uri: icon ? icon : "https://via.placeholder.com/100" }}
      />
    </Pressable>
  );
};

export default CircleIcon;
