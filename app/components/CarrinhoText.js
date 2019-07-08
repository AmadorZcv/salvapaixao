import React, { PureComponent } from "react";
import { View, Text } from "react-native";

export default class CarrinhoText extends PureComponent {
  name() {
    const { id } = this.props;
    switch (id) {
      case "10000":
      case "10001":
      case "10100":
        return "Salva Piso Tradicional";
      case "11000":
        return "Salva Piso Madeira";
      case "12000":
        return "Salva Piso Extra Resistente";
      case "14000":
      case "14001":
      case "14002":
      case "14003":
        return "Salva Pintura";
    }
  }
  underName() {
    const { id } = this.props;
    switch (id) {
      case "10000":
        return "Papel + Bolha (1m)";
      case "10001":
        return "Papel + Bolha (0.5m)";
      case "10100":
        return "Papel + Bolha + Fita Adesiva (1m)";
      case "11000":
        return "Papel + Bolha + TNT (1m)";
      case "12000":
        return "Papel+Manta Expandida (1,2m)";
      case "14000":
        return "Proteção Pintura (0,45m)";
      case "14001":
        return "Proteção Pintura (0,9m)";
      case "14002":
        return "Proteção Pintura (1,5m)";
      case "14003":
        return "Proteção Pintura (2,4m)";
    }
  }

  render() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1
        }}
      >
        <Text style={{}}> {this.name()} </Text>
        <Text style={{}}> {this.underName()} </Text>
      </View>
    );
  }
}
