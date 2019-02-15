import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

const ActivityList = ({ activities }) => (
  <View>
    {activities.map(activity => (
      <Text key={activity.id}>{activity.text}</Text>
    ))}
  </View>
);

const mapStateToProps = state => {
  const { activities } = state;
  return { activities };
};

export default connect(mapStateToProps)(ActivityList);
