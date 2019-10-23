import React, { PureComponent } from "react";
import { Text, Image, ScrollView, Dimensions } from "react-native";
import { connect } from "react-redux";
import { addToCart, removeFromCart, setQtdCart } from "../redux/cart/actions";
import SalvaPinturaItem from "../components/SalvaPinturaItem";
import { productLabel } from "../styles/Text";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { calculateIpic } from "../config/mathUtils";
class SPintura extends PureComponent {
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
          source={require("../img/product-screen/s-pintura-top.png")}
          style={{ width, height: hp(26.6875) }}
        />
        <Text style={productLabel}>Proteção Pintura</Text>
        <SalvaPinturaItem
          index={0}
          altura={products["14000"].altura}
          cobertura={products["14000"].cobertura}
          preco={products["14000"].preco}
          ipi={products["14000"].ipi}
          ipiR={calculateIpic(products["14000"].preco, products["14000"].ipi)}
          comprimento={products["14000"].comprimento}
          onPlus={() => this.onPlus("14000")}
          onMinus={() => this.onMinus("14000")}
          onChange={qtd => this.onChange(qtd, "14000")}
          total={cart["14000"]}
        />
        <SalvaPinturaItem
          index={1}
          altura={products["14001"].altura}
          cobertura={products["14001"].cobertura}
          preco={products["14001"].preco}
          ipi={products["14001"].ipi}
          ipiR={calculateIpic(products["14001"].preco, products["14001"].ipi)}
          comprimento={products["14001"].comprimento}
          onPlus={() => this.onPlus("14001")}
          onMinus={() => this.onMinus("14001")}
          onChange={qtd => this.onChange(qtd, "14001")}
          total={cart["14001"]}
        />
        <SalvaPinturaItem
          index={2}
          altura={products["14002"].altura}
          cobertura={products["14002"].cobertura}
          preco={products["14002"].preco}
          ipi={products["14002"].ipi}
          ipiR={calculateIpic(products["14002"].preco, products["14002"].ipi)}
          comprimento={products["14002"].comprimento}
          onPlus={() => this.onPlus("14002")}
          onMinus={() => this.onMinus("14002")}
          onChange={qtd => this.onChange(qtd, "14002")}
          total={cart["14002"]}
        />
        <SalvaPinturaItem
          index={3}
          altura={products["14003"].altura}
          cobertura={products["14003"].cobertura}
          preco={products["14003"].preco}
          ipi={products["14003"].ipi}
          ipiR={calculateIpic(products["14003"].preco, products["14003"].ipi)}
          comprimento={products["14003"].comprimento}
          onPlus={() => this.onPlus("14003")}
          onMinus={() => this.onMinus("14003")}
          onChange={qtd => this.onChange(qtd, "14003")}
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
