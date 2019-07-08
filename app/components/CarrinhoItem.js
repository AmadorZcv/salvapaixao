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
  onLongPressPlus = () => {
    for (let index = 0; index <= 10; index++) {
      this.props.onPlus()

    }
  }
  onLongPressMinus = () => {
    for (let index = 0; index <= 10; index++) {
      this.props.onMinus()

    }
  }
  render() {
    const { item, index, total } = this.props;
    const backgroundColor = index % 2 === 0 ? Color.lightBackground : "white";
    return (
      <View
        style={{
          backgroundColor,
          flexDirection: "row",
          height: 49
        }}
      >
        <View
          style={{
            width: 259,
            flexDirection: "row",
            paddingVertical: 8,
            alignItems: "center",
            paddingLeft: 0,
            borderRightWidth: StyleSheet.hairlineWidth,
            borderColor: Color.divbarColor
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

              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <TouchableOpacity onPress={this.props.onMinus} onLongPress={this.onLongPressMinus}>
              <Icon name={"minus"} type={"feather"} />
            </TouchableOpacity>
            <Text> {item.qtd} </Text>
            <TouchableOpacity onPress={this.props.onPlus} onLongPress={this.onLongPressPlus}>
              <Icon name={"plus"} type={"feather"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
