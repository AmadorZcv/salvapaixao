import React, { PureComponent } from "react";
import { View, Text } from "react-native";

export default class Config extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> Área em desenvolvimento </Text>
      </View>
    );
  }
}
