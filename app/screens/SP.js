import React, { PureComponent } from "react";
import { Text, Image, ScrollView, Dimensions } from "react-native";
import SalvaPisoItem from "../components/SalvaPisoItem";
import { connect } from "react-redux";
import { addToCart, removeFromCart, setQtdCart } from "../redux/cart/actions";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { productLabel } from "../styles/Text";

class SP extends PureComponent {
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
      <ScrollView style={{ flex: 1, backgroundColor: "#FAFAFA"}} >
        <Image
          source={require("../img/product-screen/sp-tradicional-top.png")}
          style={{ width, height: hp(26.6875) }}
        />
        <Text style={productLabel}>Papel + Bolha</Text>
        <SalvaPisoItem
          index={0}
          largura={products["10000"].largura}
          cobertura={products["10000"].cobertura}
          preco={products["10000"].preco}
          ipi={products["10000"].ipi}
          ipiR={products["10000"].ipic}
          comprimento={products["10000"].comprimento}
          onPlus={() => this.onPlus("10000")}
          onMinus={() => this.onMinus("10000")}
          onChange={qtd => this.onChange(qtd, "10000")}
          total={cart["10000"]}
        />
        <SalvaPisoItem
          index={1}
          largura={products["10001"].largura}
          cobertura={products["10001"].cobertura}
          preco={products["10001"].preco}
          ipi={products["10001"].ipi}
          ipiR={products["10001"].ipic}
          comprimento={products["10001"].comprimento}
          onPlus={() => this.onPlus("10001")}
          onMinus={() => this.onMinus("10001")}
          onChange={qtd => this.onChange(qtd, "10001")}
          total={cart["10001"]}
        />

        <Text style={productLabel}>Papel + Bolha + Fita Adesiva</Text>
        <SalvaPisoItem
          index={2}
          largura={products["10100"].largura}
          cobertura={products["10100"].cobertura}
          preco={products["10100"].preco}
          ipi={products["10100"].ipi}
          ipiR={products["10100"].ipic}
          comprimento={products["10100"].comprimento}
          onPlus={() => this.onPlus("10100")}
          onMinus={() => this.onMinus("10100")}
          onChange={qtd => this.onChange(qtd, "10100")}
          total={cart["10100"]}
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
export default connect(mapStateToProps)(SP);
