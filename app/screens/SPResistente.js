import React, { PureComponent } from "react";
import { Text, Image, ScrollView, Dimensions } from "react-native";
import SalvaPisoItem from "../components/SalvaPisoItem";
import { connect } from "react-redux";
import { addToCart, removeFromCart, setQtdCart } from "../redux/cart/actions";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { productLabel } from "../styles/Text";
import { calculateIpic } from "../config/mathUtils";
class SPResistente extends PureComponent {
  onPlus = id => {
    this.props.dispatch(addToCart(id));
  };
  onMinus = id => {
    this.props.dispatch(removeFromCart(id));
  };
  onChange = (qtd, id) => {
    this.props.dispatch(setQtdCart(qtd, id));
  };
  render() {
    const { products, cart } = this.props;
    const { width } = Dimensions.get;
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
        <Image
          source={require("../img/product-screen/sp-resistente-top.png")}
          style={{ width, height: hp(26.6875) }}
        />
        <Text style={productLabel}>Papel + Manta Expandida</Text>
        <SalvaPisoItem
          index={0}
          largura={products["12000"].largura}
          cobertura={products["12000"].cobertura}
          preco={products["12000"].preco}
          ipi={products["12000"].ipi}
          ipiR={calculateIpic(products["12000"].preco, products["12000"].ipi)}
          comprimento={products["12000"].comprimento}
          onPlus={() => this.onPlus("12000")}
          onMinus={() => this.onMinus("12000")}
          onChange={qtd => this.onChange(qtd, "12000")}
          total={cart["12000"]}
        />
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  const { products } = state.products;
  const { cart } = state.cart;
  return { products, cart };
};
export default connect(mapStateToProps)(SPResistente);
