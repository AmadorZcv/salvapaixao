import React, { PureComponent } from "react";
import { Text, Image, ScrollView, Dimensions } from "react-native";
import SalvaPisoItem from "../components/SalvaPisoItem";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cart/actions";
import { Color } from "../styles";
class SPEspeciais extends PureComponent {
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
          source={require("../img/product-screen/sp-madeira-top.png")}
          style={{ width, height: 190 }}
        />
        <Text
          style={{
            fontSize: 16,
            color: Color.primaryText,
            paddingLeft: 10,
            fontFamily: "Roboto-Black"
          }}
        >
          Papel + Bolha + TNT
        </Text>
        <SalvaPisoItem
          index={0}
          largura={products["11000"].largura}
          cobertura={products["11000"].cobertura}
          preco={products["11000"].preco}
          ipi={products["11000"].ipi}
          ipiR={products["11000"].ipic}
          comprimento={products["11000"].comprimento}
          onPlus={() => this.onPlus("11000")}
          onMinus={() => this.onMinus("11000")}
          total={cart["11000"]}
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
export default connect(mapStateToProps)(SPEspeciais);
