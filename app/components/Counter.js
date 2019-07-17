import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Image, Overlay } from "react-native-elements";
import { contadorText, textValueFinal } from "../styles/Text";
import ModalQuantidade from "./ModalQuantidade";

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
