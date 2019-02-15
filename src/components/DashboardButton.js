import React from "react";

import { Image, StyleSheet, View } from "react-native";

const DashboardButton = () => {
  const imgDashboard = require("../../assets/img-dashboard.png");
  return (
    <View style={styles.container}>
      <Image source={imgDashboard} style={styles.img} />
    </View>
  );
};

export default DashboardButton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  img: {
    aspectRatio: 1,
    height: 10
  }
});
