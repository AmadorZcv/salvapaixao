import React, { PureComponent } from "react";
import { Text, Image, ScrollView, Dimensions } from "react-native";
import SalvaPisoItem from "../components/SalvaPisoItem";
import { connect } from "react-redux";
import { addToCart, removeFromCart, setQtdCart } from "../redux/cart/actions";
import { productLabel } from "../styles/Text";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
class SPEspeciais extends PureComponent {
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
          source={require("../img/product-screen/sp-madeira-top.png")}
          style={{ width, height: hp(26.6875) }}
        />
        <Text style={productLabel}>Papel + Bolha + TNT</Text>
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
          onChange={qtd => this.onChange(qtd, "11000")}
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
