import React from "react";

import { Image, StyleSheet, TouchableOpacity } from "react-native";

const NewButton = props => {
  const imgAdd = require("../../assets/img-add.png");
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate("New")}
      style={styles.container}
    >
      <Image source={imgAdd} style={styles.img} />
    </TouchableOpacity>
  );
};

export default NewButton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  img: {
    aspectRatio: 1,
    height: "50%"
  }
});
