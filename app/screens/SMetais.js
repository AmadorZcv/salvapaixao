import React, { PureComponent } from "react";
import { Text, Image, ScrollView, Dimensions } from "react-native";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cart/actions";
import { Color } from "../styles";
import SalvaPinturaItem from "../components/SalvaPinturaItem";
import SalvaPisoItem from "../components/SalvaPisoItem";
import { productLabel } from "../styles/Text";
class SMetais extends PureComponent {
  onPlus = id => {
    this.props.dispatch(addToCart(id));
  };
  onMinus = id => {
    this.props.dispatch(removeFromCart(id));
  };
  render() {
    const { products, cart } = this.props;
    const { width } = Dimensions.get;
    return (
      <ScrollView style={{ flex: 1 }}>
        <Image
          source={require("../img/product-screen/s-metais-top.png")}
          style={{ width, height: 190 }}
        />
        <Text style={productLabel}>Filme para Envolvimento</Text>
        <SalvaPisoItem
          index={0}
          largura={products["16000"].largura}
          cobertura={products["16000"].cobertura}
          preco={products["16000"].preco}
          ipi={products["16000"].ipi}
          ipiR={products["16000"].ipic}
          comprimento={products["16000"].comprimento}
          onPlus={() => this.onPlus("16000")}
          onMinus={() => this.onMinus("16000")}
          total={cart["16000"]}
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
export default connect(mapStateToProps)(SMetais);
