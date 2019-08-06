import React, { PureComponent } from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import moment from "moment";
import { Color } from "../styles";
import OrcamentoDetalheItem from "../components/OrcamentoDetalheItem";
import { connect } from "react-redux";
import {
  calculateTotalComIpi,
  calculateTotalNoIpi,
  calculateItemTotal
} from "../redux/cart/reducer";
import LabelWithTextRight from "../components/LabelWithTextRight";
import { integerToReal } from "../config/formatUtils";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

class InformacaoOrcamento extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation, products } = this.props;
    const item = navigation.getParam("item", "NO-ID");
    const { cart } = item;
    const { detalhes } = item;
    const totalComIpi = calculateTotalComIpi(cart, products);
    const subTotal = calculateTotalNoIpi(cart, products);

    const id = `#${moment(detalhes.validade).format("YYYYMMDD")}00101501`;
    return (
      <ScrollView style={{ backgroundColor: Color.background, flex: 1 }}>
        <View>
        <Text style={{ textAlign: "right", fontSize: wp(4.5), fontWeight: "bold", paddingTop: hp(2), paddingBottom: hp(3.4), paddingRight: hp(4.2) }}>{id}</Text>
          <FlatList
            data={Object.keys(cart)}
            renderItem={({ item, index }) => (
              <OrcamentoDetalheItem
                item={cart[item]}
                index={index}
                valor={calculateItemTotal(cart, products, item)}
                ipi={products[item].ipi}
                valorNoIpi={products[item].preco}
              />
            )}
          />
          <View style={{ paddingHorizontal: wp(12), paddingVertical: hp(4.84) }}>
            <LabelWithTextRight
              label={"Subtotal"}
              text={integerToReal(subTotal)}
            />
            <LabelWithTextRight
              label={"Desconto"}
              text={'0,00%'}
            />
            <LabelWithTextRight
              label={"Total"}
              text={integerToReal(totalComIpi)}
            /></View>
        </View>
        <Button
          containerStyle={{
            marginBottom: hp(2.5),
            marginTop: hp(1.5),
            marginHorizontal: hp(13.33)
          }}
          title={"Exportar para PDF"} />
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  const { products } = state.products;

  return { products };
};

export default connect(mapStateToProps)(InformacaoOrcamento);
