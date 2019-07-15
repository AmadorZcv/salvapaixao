import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import { integerToReal } from "../config/formatUtils";

import { Color } from "../styles";
import PrecoCustoCounter from "./PrecoCustoCounter";
import { itemContainer, columnContainer } from "../styles/Containers";
import { textInfo, textValue } from "../styles/Text";
export default class SalvaLimpezaItem extends PureComponent {
  render() {
    const {
      index,
      unidade,
      diluicao,
      rendimento,
      preco,
      ipi,
      ipiR,
      total
    } = this.props;
    const trueTotal = total !== undefined ? total.qtd : 0;
    const precoTotal = preco + ipiR;
    const precoFinal = precoTotal * trueTotal;
    const formatPrecoFinal = precoFinal > 0 ? integerToReal(precoFinal) : "0";
    const backgroundColor = index % 2 === 0 ? "white" : Color.darkBackground;
    return (
      <View style={{ ...itemContainer, backgroundColor }}>
        <View style={columnContainer}>
          <View>
            <Text style={textInfo}>Unidade</Text>
            <Text style={textInfo}>(Litros)</Text>
            <Text style={textValue}>{unidade}</Text>
            <Text style={textInfo}>Preço</Text>
            <Text style={textInfo}>(ICMS)</Text>
            <Text style={textValue}>R$ {integerToReal(preco)}</Text>
          </View>

          <View>
            <Text style={textInfo}>Diluição</Text>
            <Text style={textInfo}> </Text>
            <Text style={textValue}>{diluicao}</Text>
            <Text style={textInfo}>IPI</Text>
            <Text style={textInfo}>(%)</Text>
            <Text style={textValue}>{ipi}</Text>
          </View>

          <View>
            <Text style={textInfo}>Rendimento</Text>
            <Text style={textInfo}>(Metros²)</Text>
            <Text style={textValue}>{rendimento}</Text>
            <Text style={textInfo}>IPI</Text>
            <Text style={textInfo}>(R$)</Text>
            <Text style={textValue}>R$ {integerToReal(ipiR)}</Text>
          </View>
        </View>
        <View style={{ flex: 1 }} />
        <PrecoCustoCounter
          onPlus={this.props.onPlus}
          onMinus={this.props.onMinus}
          onChange={this.props.onChange}
          total={trueTotal}
          precoTotal={precoTotal}
          precoFinal={formatPrecoFinal}
        />
      </View>
    );
  }
}
