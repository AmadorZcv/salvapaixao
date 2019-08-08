import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import { Color } from "../styles";
import { normalize } from "react-native-elements";
import { productName, productAmount } from "../config/nameUtils";

export default class CarrinhoText extends PureComponent {
  render() {
    const { id } = this.props;
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1
        }}
      >
        <Text
          style={{
            fontSize: normalize(16),
            color: Color.primaryText
          }}
        >
          {productName(id)}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: normalize(10),
            color: Color.secondaryText
          }}
        >
          {productAmount(id)}
        </Text>
      </View>
    );
  }
}
