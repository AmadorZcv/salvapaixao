import React, { PureComponent } from "react";
import { View, Text, FlatList } from "react-native";
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
      <View style={{ backgroundColor: Color.background, flex: 1 }}>
        <View>
          <Text style={{ textAlign: "right", paddingRight: 10 }}>{id}</Text>
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

          <LabelWithTextRight
            label={"Subtotal"}
            text={integerToReal(subTotal)}
          />
          <LabelWithTextRight
            label={"Total"}
            text={integerToReal(totalComIpi)}
          />
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  const { products } = state.products;

  return { products };
};

export default connect(mapStateToProps)(InformacaoOrcamento);
