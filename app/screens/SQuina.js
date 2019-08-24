import React, { PureComponent } from "react";
import { Text, Image, ScrollView, Dimensions } from "react-native";
import { connect } from "react-redux";
import { addToCart, removeFromCart, setQtdCart } from "../redux/cart/actions";
import { productLabel, productSublabel } from "../styles/Text";
import SalvaQuinaItem from "../components/SalvaQuinaItem";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
class SQuina extends PureComponent {
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
          source={require("../img/product-screen/s-quina-top.png")}
          style={{ width, height: hp(26.6875) }}
        />
        <Text style={productLabel}>Proteção para Quinas e Batentes</Text>
        <Text style={{ ...productSublabel}}
        >Pacote c/ 6 unidades
        </Text>
        <SalvaQuinaItem
          index={0}
          altura={products["15000"].largura}
          comprimento={products["15000"].comprimento}
          preco={products["15000"].preco}
          ipi={products["15000"].ipi}
          ipiR={products["15000"].ipic}
          onPlus={() => this.onPlus("15000")}
          onMinus={() => this.onMinus("15000")}
          onChange={qtd => this.onChange(qtd, "15000")}
          total={cart["15000"]}
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
export default connect(mapStateToProps)(SQuina);
