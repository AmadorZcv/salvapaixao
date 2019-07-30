import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import LabelWithTextBelow from "./LabelWithTextBelow";
import { productName, productAmount } from "../config/nameUtils";
import { integerToReal } from "../config/formatUtils";

export default class OrcamentoDetalheItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item, index, valor, valorNoIpi, ipi } = this.props;
    const backgroundColor = index % 2 === 0 ? "white" : "lightgray";
    return (
      <View style={{ backgroundColor, paddingHorizontal: 10 }}>
        <Text> {productName(item.id)} </Text>
        <View style={{ paddingHorizontal: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <LabelWithTextBelow label={productAmount(item.id)} />
              <LabelWithTextBelow
                label={"Valor sem IPI"}
                text={`R$ ${integerToReal(valorNoIpi)}`}
              />
              <LabelWithTextBelow label={"IPI"} text={ipi} />
            </View>
            <View style={{ flex: 1 }}>
              <LabelWithTextBelow label={"Quantidade"} text={item.qtd} />
              <LabelWithTextBelow
                label={"Valor de venda"}
                text={`R$ ${integerToReal(valor)}`}
              />
              <LabelWithTextBelow
                label={"Valor com desconto"}
                text={`R$ ${integerToReal(valor)}`}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
