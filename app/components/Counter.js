import React, { PureComponent } from "react";
import { View, Text } from "react-native";

import { contadorText } from "../styles/Text";

export default class Counter extends PureComponent {
  render() {
    const { total, onMinus, onPlus, precoFinal, onChange } = this.props;

    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: 5,
          justifyContent: "center"
        }}
      >
        <View>
          <Text style={contadorText}> {total} </Text>
        </View>
      </View>
    );
  }
}
