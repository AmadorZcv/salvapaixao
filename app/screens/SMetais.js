import React, { PureComponent } from "react";
import { Text, Image, ScrollView, Dimensions } from "react-native";
import { connect } from "react-redux";
import { addToCart, removeFromCart, setQtdCart } from "../redux/cart/actions";
import SalvaPisoItem from "../components/SalvaPisoItem";
import { productLabel, productSublabel } from "../styles/Text";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { calculateIpic } from "../config/mathUtils";
import { selectProducts } from "../redux/products/selectors";
class SMetais extends PureComponent {
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
          source={require("../img/product-screen/s-metais-top.png")}
          style={{ width, height: hp(26.6875) }}
        />
        <Text style={productLabel}>Filme para Envolvimento</Text>
        <Text style={{ ...productSublabel }}>Caixa c/ 6 unidades</Text>
        <SalvaPisoItem
          index={0}
          largura={products["16000"].largura}
          cobertura={products["16000"].cobertura}
          preco={products["16000"].preco}
          ipi={products["16000"].ipi}
          ipiR={calculateIpic(products["16000"].preco, products["16000"].ipi)}
          comprimento={products["16000"].comprimento}
          onPlus={() => this.onPlus("16000")}
          onMinus={() => this.onMinus("16000")}
          onChange={qtd => this.onChange(qtd, "16000")}
          total={cart["16000"]}
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
export default connect(mapStateToProps)(SMetais);
