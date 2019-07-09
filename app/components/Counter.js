import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Icon } from "react-native-elements";
import { contadorText } from "../styles/Text";

export default class Counter extends PureComponent {
  render() {
    const { total, onMinus, onPlus } = this.props;

    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: 5,
          justifyContent: "center"
        }}
      >
        <TouchableOpacity onPress={onMinus}>
          <Icon name={"minus"} type={"feather"} />
        </TouchableOpacity>
        <Text style={contadorText}> {total} </Text>
        <TouchableOpacity onPress={onPlus}>
          <Icon name={"plus"} type={"feather"} />
        </TouchableOpacity>
      </View>
    );
  }
}
