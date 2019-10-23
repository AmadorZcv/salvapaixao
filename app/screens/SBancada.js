import React, { PureComponent } from "react";
import { Text, Image, ScrollView, Dimensions } from "react-native";
import { connect } from "react-redux";
import { addToCart, removeFromCart, setQtdCart } from "../redux/cart/actions";
import SalvaPinturaItem from "../components/SalvaPinturaItem";
import { productLabel } from "../styles/Text";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { calculateIpic } from "../config/mathUtils";
class SBancada extends PureComponent {
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
          source={require("../img/product-screen/s-bancada-top.png")}
          style={{ width, height: hp(26.6875) }}
        />
        <Text style={productLabel}>Adesivo para Proteção</Text>
        <SalvaPinturaItem
          index={0}
          altura={products["17000"].altura}
          cobertura={products["17000"].cobertura}
          preco={products["17000"].preco}
          ipi={products["17000"].ipi}
          ipiR={calculateIpic(products["17000"].preco, products["17000"].ipi)}
          comprimento={products["17000"].comprimento}
          onPlus={() => this.onPlus("17000")}
          onMinus={() => this.onMinus("17000")}
          onChange={qtd => this.onChange(qtd, "17000")}
          total={cart["17000"]}
        />
        <SalvaPinturaItem
          index={1}
          altura={products["17001"].altura}
          cobertura={products["17001"].cobertura}
          preco={products["17001"].preco}
          ipi={products["17001"].ipi}
          ipiR={calculateIpic(products["17001"].preco, products["17001"].ipi)}
          comprimento={products["17001"].comprimento}
          onPlus={() => this.onPlus("17001")}
          onMinus={() => this.onMinus("17001")}
          onChange={qtd => this.onChange(qtd, "17001")}
          total={cart["17001"]}
        />
        <SalvaPinturaItem
          index={2}
          altura={products["17002"].altura}
          cobertura={products["17002"].cobertura}
          preco={products["17002"].preco}
          ipi={products["17002"].ipi}
          ipiR={calculateIpic(products["17002"].preco, products["17002"].ipi)}
          comprimento={products["17002"].comprimento}
          onPlus={() => this.onPlus("17002")}
          onMinus={() => this.onMinus("17002")}
          onChange={qtd => this.onChange(qtd, "17002")}
          total={cart["17002"]}
        />
        <SalvaPinturaItem
          index={3}
          altura={products["17003"].altura}
          cobertura={products["17003"].cobertura}
          preco={products["17003"].preco}
          ipi={products["17003"].ipi}
          ipiR={calculateIpic(products["17003"].preco, products["17003"].ipi)}
          comprimento={products["17003"].comprimento}
          onPlus={() => this.onPlus("17003")}
          onMinus={() => this.onMinus("17003")}
          onChange={qtd => this.onChange(qtd, "17003")}
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
