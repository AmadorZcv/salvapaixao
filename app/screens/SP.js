import React, { PureComponent } from "react";
import { View, Text } from "react-native";

export default class SP extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> componentText </Text>
      </View>
    );
  }
}
