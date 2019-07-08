import React, { PureComponent } from "react";
import { Text, Image, ScrollView, Dimensions } from "react-native";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cart/actions";
import { Color } from "../styles";
import SalvaPinturaItem from "../components/SalvaPinturaItem";
class SBancada extends PureComponent {
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
          source={require("../img/product-screen/s-bancada-top.png")}
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
          Adesivo para Proteção
        </Text>
        <SalvaPinturaItem
          index={0}
          altura={products["17000"].altura}
          cobertura={products["17000"].cobertura}
          preco={products["17000"].preco}
          ipi={products["17000"].ipi}
          ipiR={products["17000"].ipic}
          comprimento={products["17000"].comprimento}
          onPlus={() => this.onPlus("17000")}
          onMinus={() => this.onMinus("17000")}
          total={cart["17000"]}
        />
        <SalvaPinturaItem
          index={1}
          altura={products["17001"].altura}
          cobertura={products["17001"].cobertura}
          preco={products["17001"].preco}
          ipi={products["17001"].ipi}
          ipiR={products["17001"].ipic}
          comprimento={products["17001"].comprimento}
          onPlus={() => this.onPlus("17001")}
          onMinus={() => this.onMinus("17001")}
          total={cart["17001"]}
        />
        <SalvaPinturaItem
          index={2}
          altura={products["17002"].altura}
          cobertura={products["17002"].cobertura}
          preco={products["17002"].preco}
          ipi={products["17002"].ipi}
          ipiR={products["17002"].ipic}
          comprimento={products["17002"].comprimento}
          onPlus={() => this.onPlus("17002")}
          onMinus={() => this.onMinus("17002")}
          total={cart["17002"]}
        />
        <SalvaPinturaItem
          index={3}
          altura={products["17003"].altura}
          cobertura={products["17003"].cobertura}
          preco={products["17003"].preco}
          ipi={products["17003"].ipi}
          ipiR={products["17003"].ipic}
          comprimento={products["17003"].comprimento}
          onPlus={() => this.onPlus("17003")}
          onMinus={() => this.onMinus("17003")}
          total={cart["17003"]}
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
export default connect(mapStateToProps)(SBancada);
