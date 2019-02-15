import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { connect } from "react-redux";

import { changeText } from "../actions";

class ActivityTitle extends React.Component {
  render() {
    return (
      <View>
        <Text>Título</Text>
        <TextInput
          onChange={text => this.props.changeText(text)}
          value={data.text}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { data } = state;
  return { data };
};

export default connect(
  mapStateToProps,
  {
    changeText
  }
)(ActivityTitle);
