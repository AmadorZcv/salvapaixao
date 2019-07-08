import React, { PureComponent } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import CarrinhoImage from "./CarrinhoImage";
import CarrinhoText from "./CarrinhoText";
import { integerToReal } from "../config/formatUtils";
import { Color } from "../styles";

export default class CarrinhoItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item, index, total } = this.props;
    const backgroundColor = index % 2 === 0 ? Color.lightBackground : "white";
    return (
      <View
        style={{
          backgroundColor,
          flexDirection: "row",
          paddingRight: 11
        }}
      >
        <View
          style={{
            width: 259,
            flexDirection: "row",
            paddingVertical: 8,
            alignItems: "center",
            borderColor: Color.divbarColor,
            borderLeftWidth: StyleSheet.hairlineWidth
          }}
        >
          <CarrinhoImage id={item.id} />
          <CarrinhoText id={item.id} />
        </View>
        <View style={{ width: 101, paddingVertical: 8, alignItems: "center" }}>
          <Text>R$ {integerToReal(total)}</Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <TouchableOpacity onPress={this.props.onMinus}>
              <Icon name={"minus"} type={"feather"} />
            </TouchableOpacity>
            <Text> {item.qtd} </Text>
            <TouchableOpacity onPress={this.props.onPlus}>
              <Icon name={"plus"} type={"feather"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
