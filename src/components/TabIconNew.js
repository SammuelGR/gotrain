import React from "react";

import { Image, StyleSheet, View } from "react-native";

const TabIconNew = props => {
  const imgAddSelected = require("../../assets/add-selected.png");
  const imgAdd = require("../../assets/add.png");

  if (props.selected) {
    return <Image source={imgAddSelected} style={styles.img} />;
  }
  return <Image source={imgAdd} style={styles.img} />;
};

export default TabIconNew;

const styles = StyleSheet.create({
  img: {
    height: 20,
    width: 20
  }
});
