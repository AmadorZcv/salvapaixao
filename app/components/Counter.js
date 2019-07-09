import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Image } from "react-native-elements";
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
          <Image
            source={require("../img/icons/minus.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <Text style={contadorText}> {total} </Text>
        <TouchableOpacity onPress={onPlus}>
          <Image
            source={require("../img/icons/plus.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
