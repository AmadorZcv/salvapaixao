import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { integerToReal } from "../config/formatUtils";

import { textInfo, textValue } from "../styles/Text";
import PrecoCustoCounter from "./PrecoCustoCounter";
import { itemContainer, columnContainer } from "../styles/Containers";
import ModalQuantidade from "./ModalQuantidade";

export default class SalvaPinturaItem extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    };
  }
  openModal = () => {
    this.setState({ modal: true });
  };
  closeModal = () => {
    this.setState({ modal: false });
  };
  render() {
    const {
      index,
      altura,
      comprimento,
      cobertura,
      preco,
      ipi,
      ipiR,
      total
    } = this.props;
    const trueTotal = total !== undefined ? total.qtd : 0;
    const precoTotal = preco + ipiR;
    const precoFinal = precoTotal * trueTotal;
    const formatPrecoFinal = precoFinal > 0 ? integerToReal(precoFinal) : "0";
    const backgroundColor = index % 2 === 0 ? "white" : "lightgray";
    return (
      <TouchableOpacity
        style={{ ...itemContainer, backgroundColor }}
        onPress={this.openModal}
      >
        <View style={columnContainer}>
          <View>
            <Text style={textInfo}>Altura</Text>
            <Text style={textInfo}>(Metros)</Text>
            <Text style={textValue}>{altura}</Text>
            <Text style={textInfo}>Preço</Text>
            <Text style={textInfo}>(ICMS)</Text>
            <Text style={textValue}>R$ {integerToReal(preco)}</Text>
          </View>

          <View>
            <Text style={textInfo}>Comprimento</Text>
            <Text style={textInfo}>(Metros)</Text>
            <Text style={textValue}>{comprimento}</Text>
            <Text style={textInfo}>IPI</Text>
            <Text style={textInfo}>(%)</Text>
            <Text style={textValue}>{ipi}</Text>
          </View>

          <View>
            <Text style={textInfo}>Cobertura</Text>
            <Text style={textInfo}>(Metros²)</Text>
            <Text style={textValue}>{cobertura}</Text>
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
        <ModalQuantidade
          isVisible={this.state.modal}
          onCloseModal={this.closeModal}
          precoFinal={formatPrecoFinal}
          total={trueTotal}
          onMinus={onMinus}
          onPlus={onPlus}
          onChange={onChange}
        />
      </TouchableOpacity>
    );
  }
}
