import React from "react";

import { Button, StyleSheet, Text, View } from "react-native";

import TabIconHome from "../components/TabIconHome";

export default class Home extends React.Component {
  static navigationOptions = {
    title: "GoTrain"
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Ir para detalhes"
          onPress={() => this.props.navigation.navigate("Details")}
        />
        <Text>Home!</Text>
        <TabIconHome />
        <Text>Home!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFECB3",
    alignItems: "center",
    justifyContent: "center"
  }
});
