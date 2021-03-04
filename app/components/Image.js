import React from "react";
import { ImageComponent, View } from "react-native";

function Image({
  name,
  size = 40,
  backgroundColor = "#000",
  imageColor = "#fff",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageComponent name={name} color={imageColor} size={size * 0.5} />
    </View>
  );
}

export default Image;
