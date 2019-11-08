import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import moment from "moment";
import { normalize } from "react-native-elements";
import { Color } from "../styles";
import { integerToReal } from "../config/formatUtils";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class OrcamentoItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  calculateTotal = () => {
    const { item } = this.props;
    const { produtos } = item;
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.total;
    return produtos.reduce(reducer, 0);
  };
  render() {
    const { item } = this.props;
    const id = item.id ? item.id : "offline";
    const { nome, validade, nome_completo, cidade, uf } = item;
    const { index, onPress } = this.props;
    const backgroundColor = index % 2 === 0 ? "#FAFAFA" : "#D6D6D6";
    return (
      <TouchableOpacity
        style={{
          paddingTop: hp(1.56),
          paddingLeft: wp(11),
          paddingRight: wp(7.5),
          paddingBottom: hp(2.5),
          backgroundColor
        }}
        onPress={onPress}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: normalize(16),
              color: Color.primaryText
            }}
          >
            Orçamento #{id}
          </Text>
          <Text style={{ fontSize: normalize(14), color: Color.primaryText }}>
            Até {moment(validade, "DD/MM/YYYY").format("DD/MM/YYYY")}
          </Text>
        </View>
        <Text
          style={{
            paddingBottom: hp(0.5),
            fontSize: normalize(12),
            color: Color.secondaryText
          }}
        >
          {item.title}
        </Text>
        <Text style={{ fontSize: normalize(13), color: Color.secondaryText }}>
          {nome}
        </Text>
        <Text style={{ fontSize: normalize(13), color: Color.secondaryText }}>
          {nome_completo}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: normalize(13), color: Color.secondaryText }}>
            {cidade}/{uf}
          </Text>
          <Text style={{ fontSize: normalize(14), color: Color.primaryText }}>
            R$ {integerToReal(this.calculateTotal())}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
