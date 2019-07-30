import React, { PureComponent } from "react";
import { View, Text } from "react-native";

export default class LabelWithTextRight extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { label, text } = this.props;
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Text style={{ textAlign: "left" }}>{label} </Text>
        <Text style={{ textAlign: "right" }}>{text}</Text>
      </View>
    );
  }
}
