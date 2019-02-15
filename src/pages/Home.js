import React from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import { addActivity } from "../actions";

import ActivityList from "../components/ActivityList";

class Home extends React.Component {
  static navigationOptions = {
    title: "GoTrain"
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityList />
      </View>
    );
  }
}

export default connect(
  null,
  {
    dispatchAddActivity: addActivity
  }
)(Home);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FFECB3",
    flex: 1,
    paddingTop: 10
  }
});
