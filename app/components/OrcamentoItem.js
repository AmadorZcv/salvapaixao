import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import moment from "moment";
import { normalize } from "react-native-elements";
import { Color } from "../styles";
export default class OrcamentoItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      nome,
      validade,
      nomeCompleto,
      cidade,
      uf
    } = this.props.item.detalhes;
    const { index, onPress } = this.props;
    const backgroundColor = index % 2 === 0 ? "white" : "lightgray";
    return (
      <TouchableOpacity
        style={{ paddingLeft: 38, paddingRight: 27, backgroundColor }}
        onPress={onPress}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: normalize(16), color: Color.primaryText }}>
            Orçamento #01
          </Text>
          <Text style={{ fontSize: normalize(14), color: Color.primaryText }}>
            Até {moment(validade).format("DD/MM/YYYY")}
          </Text>
        </View>
        <Text style={{ fontSize: normalize(12), color: Color.secondaryText }}>
          {`#${moment(validade).format("YYYYMMDD")}00101501`}
        </Text>
        <Text style={{ fontSize: normalize(13), color: Color.secondaryText }}>
          {nome}
        </Text>
        <Text style={{ fontSize: normalize(13), color: Color.secondaryText }}>
          {nomeCompleto}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: normalize(13), color: Color.secondaryText }}>
            {cidade}/{uf}
          </Text>
          <Text style={{ fontSize: normalize(14), color: Color.primaryText }}>
            17000
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
