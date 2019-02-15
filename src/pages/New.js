import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import { addActivity } from "../actions";

const New = props => (
  <View style={styles.container}>
    <Button
      title="Add Activity"
      onPress={() => props.dispatchAddActivity("Nova atividade")}
    />
  </View>
);

export default connect(
  null,
  {
    dispatchAddActivity: addActivity
  }
)(New);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FFECB3",
    flex: 1,
    justifyContent: "center"
  }
});
