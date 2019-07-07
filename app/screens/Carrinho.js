import React, { PureComponent } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
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
          <Text style={{ ...styles.leftContainer, textAlign: "center" }}>
            Informações
          </Text>
          <Text style={{ ...styles.rightContainer, textAlign: "center" }}>
            Total
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            backgroundColor: "lightgray"
          }}
        >
          <View style={styles.leftContainer}>
            <Text style={styles.informaçõesText}>SubTotal</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.informaçõesValue}>
              R$ {integerToReal(subTotal)}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row"
          }}
        >
          <View style={styles.leftContainer}>
            <Text style={styles.informaçõesText}>IPI</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.informaçõesValue}>
              R$ {integerToReal(totalIpi)}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "lightgray"
          }}
        >
          <View style={styles.leftContainer}>
            <Text style={styles.informaçõesText}>Total</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.informaçõesValue}>
              R$ {integerToReal(totalComIpi)}
            </Text>
          </View>
        </View>
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

const styles = StyleSheet.create({
  informaçõesText: {
    textAlign: "left",
    fontSize: 20,
    paddingLeft: 10
  },
  informaçõesValue: {
    textAlign: "left",
    fontSize: 20,
    paddingLeft: 3
  },
  leftContainer: {
    flex: 7,

    borderRightWidth: StyleSheet.hairlineWidth
  },
  rightContainer: {
    flex: 2
  }
});
