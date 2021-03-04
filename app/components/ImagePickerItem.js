import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

import Image from "./Image";
import Text from "./Text";

function ImagePickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          backgroundColor={item.backgroundColor}
          name={item.image}
          size={80}
        />
      </TouchableOpacity>
      <Text style={styles.label}>{item.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 15
  },
});

export default ImagePickerItem;
