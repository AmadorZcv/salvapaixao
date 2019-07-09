import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import Counter from "./Counter";
import { integerToReal } from "../config/formatUtils";
import { precoValueContainer } from "../styles/Containers";
import { textPreco, textCusto, textValueFinal } from "../styles/Text";

export default class PrecoCustoCounter extends PureComponent {
  render() {
    const { precoTotal, precoFinal, total, onMinus, onPlus } = this.props;
    return (
      <View style={precoValueContainer}>
        <Text style={textPreco}>R$ {integerToReal(precoTotal)}</Text>
        <Text style={textCusto}>Custo Total:</Text>
        <Text style={textValueFinal}>R$ {precoFinal}</Text>
        <Counter onPlus={onPlus} onMinus={onMinus} total={total} />
      </View>
    );
  }
}
