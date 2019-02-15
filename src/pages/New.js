import React from "react";
import { Button, SafeAreaView, StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import { addActivity } from "../actions";

import ActivityTitle from "../components/ActivityTitle";

const New = props => (
  <SafeAreaView style={styles.container}>
    <ActivityTitle />
    <Button
      title="Add Activity"
      onPress={() => props.dispatchAddActivity("Nova atividade")}
    />
  </SafeAreaView>
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
