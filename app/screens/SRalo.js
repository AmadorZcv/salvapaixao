import React, { PureComponent } from "react";
import { Text, Image, ScrollView, Dimensions } from "react-native";
import SalvaPisoItem from "../components/SalvaPisoItem";
import { connect } from "react-redux";
import { addToCart, removeFromCart, setQtdCart } from "../redux/cart/actions";
import { productLabel } from "../styles/Text";
import SalvaRaloItem from "../components/SalvaRaloItem";
class SRalo extends PureComponent {
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
      <ScrollView style={{ flex: 1 }}>
        <Image
          source={require("../img/product-screen/s-ralo-top.png")}
          style={{ width, height: 190 }}
        />
        <Text style={productLabel}>Tampão para Ralos</Text>
        <SalvaRaloItem
          index={0}
          largura={products["18000"].largura}
          preco={products["18000"].preco}
          ipi={products["18000"].ipi}
          ipiR={products["18000"].ipic}
          onPlus={() => this.onPlus("18000")}
          onMinus={() => this.onMinus("18000")}
          onChange={qtd => this.onChange(qtd, "18000")}
          total={cart["18000"]}
        />
        <SalvaRaloItem
          index={1}
          largura={products["18001"].largura}
          preco={products["18001"].preco}
          ipi={products["18001"].ipi}
          ipiR={products["18001"].ipic}
          onPlus={() => this.onPlus("18001")}
          onMinus={() => this.onMinus("18001")}
          onChange={qtd => this.onChange(qtd, "18001")}
          total={cart["18001"]}
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
export default connect(mapStateToProps)(SRalo);
