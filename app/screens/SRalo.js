import React, { PureComponent } from "react";
import { Text, Image, ScrollView, Dimensions } from "react-native";
import { connect } from "react-redux";
import { addToCart, removeFromCart, setQtdCart } from "../redux/cart/actions";
import { productLabel, productSublabel } from "../styles/Text";
import SalvaRaloItem from "../components/SalvaRaloItem";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { calculateIpic } from "../config/mathUtils";
import { selectProducts } from "../redux/products/selectors";
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
      <ScrollView style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
        <Image
          source={require("../img/product-screen/s-ralo-top.png")}
          style={{ width, height: hp(26.6875) }}
        />
        <Text style={productLabel}>Tampão para Ralos</Text>
        <Text style={{ ...productSublabel }}>Caixa c/ 6 unidades</Text>
        <SalvaRaloItem
          index={0}
          largura={products["18000"].largura}
          preco={products["18000"].preco}
          ipi={products["18000"].ipi}
          ipiR={calculateIpic(products["18000"].preco, products["18000"].ipi)}
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
          ipiR={calculateIpic(products["18001"].preco, products["18001"].ipi)}
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
  const products = selectProducts(state);
  const { cart } = state.cart;
  return { products, cart };
};
export default connect(mapStateToProps)(SRalo);
