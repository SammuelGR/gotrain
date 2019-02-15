import React from "react";

import { Image, StyleSheet, View } from "react-native";

const TabIcon = props => {
  const imgDashboardSelected = require("../../assets/dashboard-selected.png");
  const imgDashboard = require("../../assets/dashboard.png");

  if (props.selected) {
    return (
      <View style={styles.container}>
        <Image source={imgDashboardSelected} style={styles.img} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Image source={imgDashboard} style={styles.img} />
    </View>
  );
};

export default TabIcon;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  img: {
    height: 20,
    width: 20
  }
});
