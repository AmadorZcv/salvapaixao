import React, { PureComponent } from "react";
import { View } from "react-native";
import TopicWithTextBelow from "./TopicWithTextBelow";
import TopicWithTextRight from "./TopicWithTextRight";
import { productName, productAmount } from "../config/nameUtils";
import { integerToReal } from "../config/formatUtils";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class OrcamentoDetalheItem extends PureComponent {
  render() {
    const { item, index, valor, valorNoIpi, ipi } = this.props;
    const backgroundColor = index % 2 === 0 ? "#FAFAFA" : "#D6D6D6";
    return (
      <View style={{ paddingHorizontal: wp(5.55), backgroundColor }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TopicWithTextBelow
              topic={productName(item.produto_id.toString())}
              text={productAmount(item.id)}
            />
            <TopicWithTextRight
              topic={"Valor sem IPI"}
              text={`R$ ${integerToReal(valorNoIpi)}`}
            />
            <TopicWithTextRight topic={"IPI"} text={ipi} />
          </View>
          <View
            style={{
              flex: 1,
              paddingTop: hp(1.5),
              paddingRight: wp(5),
              paddingLeft: wp(10)
            }}
          >
            <TopicWithTextRight topic={"Quantidade"} text={item.qtd} />
            <TopicWithTextRight
              topic={"Valor de venda"}
              text={`R$ ${integerToReal(item.total * item.qtd)}`}
            />
            <TopicWithTextRight
              topic={"Valor com desconto"}
              text={`R$ ${integerToReal(item.total * item.qtd)}`}
            />
          </View>
        </View>
      </View>
    );
  }
}
