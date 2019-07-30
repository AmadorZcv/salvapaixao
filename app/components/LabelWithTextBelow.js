import React, { PureComponent } from "react";
import { View, Text } from "react-native";

export default class LabelWithTextBelow extends PureComponent {
  render() {
    const { label, text } = this.props;
    return (
      <View>
        <Text>{label} </Text>
        <Text>{text}</Text>
      </View>
    );
  }
}
