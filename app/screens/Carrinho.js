import React, { PureComponent } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import CarrinhoItem from "../components/CarrinhoItem";
import { addToCart, removeFromCart } from "../redux/cart/actions";
import {
  calculateItemTotal,
  calculateTotalComIpi,
  calculateTotalNoIpi,
  calculateTotalIpi
} from "../redux/cart/reducer";
import { integerToReal } from "../config/formatUtils";

class Carrinho extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onPlus = id => {
    this.props.dispatch(addToCart(id));
  };
  onMinus = id => {
    this.props.dispatch(removeFromCart(id));
  };
  render() {
    const { cart, products, totalComIpi, subTotal, totalIpi } = this.props;
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "lightgray",
            marginVertical: 15
          }}
        >
          <Text style={{ flex: 7, textAlign: "center", borderRightWidth: 1 }}>
            Produtos
          </Text>
          <Text style={{ flex: 2, textAlign: "center" }}> SubTotal </Text>
        </View>
        <FlatList
          data={Object.keys(cart)}
          renderItem={({ item, index }) => (
            <CarrinhoItem
              item={cart[item]}
              index={index}
              onPlus={() => this.onPlus(item)}
              onMinus={() => this.onMinus(item)}
              total={calculateItemTotal(cart, products, item)}
            />
          )}
          keyExtractor={item => item.toString()}
        />
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "lightgray",
            marginVertical: 15
          }}
        >
          <Text style={{ flex: 7, textAlign: "center", borderRightWidth: 1 }}>
            Informações
          </Text>
          <Text style={{ flex: 2, textAlign: "center" }}> Total </Text>
        </View>
        <Text>
          Total:{integerToReal(totalComIpi)}, subTotal:{integerToReal(subTotal)}
          ,Ipi:{integerToReal(totalIpi)}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { cart } = state.cart;
  const { products } = state.products;
  const totalComIpi = calculateTotalComIpi(cart, products);
  const subTotal = calculateTotalNoIpi(cart, products);
  const totalIpi = calculateTotalIpi(cart, products);
  return { cart, products, totalComIpi, subTotal, totalIpi };
};

export default connect(mapStateToProps)(Carrinho);
