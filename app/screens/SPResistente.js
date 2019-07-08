import React, { PureComponent } from "react";
import { Text, Image, ScrollView, Dimensions } from "react-native";
import SalvaPisoItem from "../components/SalvaPisoItem";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cart/actions";
class SPResistente extends PureComponent {
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
          source={require("../img/product-screen/sp-resistente-top.png")}
          style={{ width, height: 190 }}
        />
        <Text
          style={{
            fontSize: 20,
            color: "black",
            fontWeight: "400",
            paddingLeft: 10
          }}
        >
          Papel + Manta Expandida
        </Text>
        <SalvaPisoItem
          index={0}
          largura={products["12000"].largura}
          cobertura={products["12000"].cobertura}
          preco={products["12000"].preco}
          ipi={products["12000"].ipi}
          ipiR={products["12000"].ipic}
          comprimento={products["12000"].comprimento}
          onPlus={() => this.onPlus("12000")}
          onMinus={() => this.onMinus("12000")}
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
