import React from "react";

import { Image, StyleSheet, View } from "react-native";

const TabIcon = props => {
  const imgDashboard = require("../../assets/img-dashboard.png");
  const imgAdd = require("../../assets/img-add.png");

  if (props.name === "Home")
    return (
      <View style={styles.container}>
        <Image source={imgDashboard} style={styles.img} />
      </View>
    );
  if (props.name === "New")
    return (
      <View style={styles.container}>
        <Image source={imgAdd} style={styles.img} />
      </View>
    );
  else return null;
};

export default TabIcon;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  img: {
    aspectRatio: 1,
    height: 10
  }
});
