import React, { PureComponent } from "react";
import { Text, Image, ScrollView, Dimensions } from "react-native";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cart/actions";
import { Color } from "../styles";
import SalvaPinturaItem from "../components/SalvaPinturaItem";
import { productLabel } from "../styles/Text";
class SPintura extends PureComponent {
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
          source={require("../img/product-screen/s-pintura-top.png")}
          style={{ width, height: 190 }}
        />
        <Text style={productLabel}>Proteção Pintura</Text>
        <SalvaPinturaItem
          index={0}
          altura={products["14000"].altura}
          cobertura={products["14000"].cobertura}
          preco={products["14000"].preco}
          ipi={products["14000"].ipi}
          ipiR={products["14000"].ipic}
          comprimento={products["14000"].comprimento}
          onPlus={() => this.onPlus("14000")}
          onMinus={() => this.onMinus("14000")}
          total={cart["14000"]}
        />
        <SalvaPinturaItem
          index={1}
          altura={products["14001"].altura}
          cobertura={products["14001"].cobertura}
          preco={products["14001"].preco}
          ipi={products["14001"].ipi}
          ipiR={products["14001"].ipic}
          comprimento={products["14001"].comprimento}
          onPlus={() => this.onPlus("14001")}
          onMinus={() => this.onMinus("14001")}
          total={cart["14001"]}
        />
        <SalvaPinturaItem
          index={2}
          altura={products["14002"].altura}
          cobertura={products["14002"].cobertura}
          preco={products["14002"].preco}
          ipi={products["14002"].ipi}
          ipiR={products["14002"].ipic}
          comprimento={products["14002"].comprimento}
          onPlus={() => this.onPlus("14002")}
          onMinus={() => this.onMinus("14002")}
          total={cart["14002"]}
        />
        <SalvaPinturaItem
          index={3}
          altura={products["14003"].altura}
          cobertura={products["14003"].cobertura}
          preco={products["14003"].preco}
          ipi={products["14003"].ipi}
          ipiR={products["14003"].ipic}
          comprimento={products["14003"].comprimento}
          onPlus={() => this.onPlus("14003")}
          onMinus={() => this.onMinus("14003")}
          total={cart["14003"]}
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
export default connect(mapStateToProps)(SPintura);
