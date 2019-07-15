import React, { PureComponent } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import CarrinhoItem from "../components/CarrinhoItem";
import {
  addToCart,
  removeFromCart,
  setQtdCart,
  removeItem
} from "../redux/cart/actions";
import {
  calculateItemTotal,
  calculateTotalComIpi,
  calculateTotalNoIpi,
  calculateTotalIpi
} from "../redux/cart/reducer";
import { integerToReal } from "../config/formatUtils";
import { Color } from "../styles";
import { primaryBig } from "../styles/Text";
import { navigateFromId } from "../config/navigateUtils";

class Carrinho extends PureComponent {
  onPlus = id => {
    this.props.dispatch(addToCart(id));
  };
  onMinus = id => {
    this.props.dispatch(removeFromCart(id));
  };
  onRemove = id => {
    this.props.dispatch(removeItem(id));
  };
  onChange = (qtd, id) => {
    this.props.dispatch(setQtdCart(qtd, id));
  };
  onNavigate = id => {
    this.props.navigation.navigate(navigateFromId(id));
  };
  render() {
    const { cart, products, totalComIpi, subTotal, totalIpi } = this.props;
    return (
      <View style={{ paddingBottom: 18 }}>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: Color.darkBackground,
              marginTop: 21,
              height: 30,
              marginBottom: 16
            }}
          >
            <Text
              style={{
                ...primaryBig,
                textAlign: "center",
                textAlignVertical: "center",
                width: 259,
                borderRightWidth: StyleSheet.hairlineWidth,
                borderColor: Color.divbarColor
              }}
            >
              Produtos
            </Text>
            <Text
              style={{
                ...primaryBig,
                textAlign: "center",
                textAlignVertical: "center",
                width: 101
              }}
            >
              SubTotal
            </Text>
          </View>
          <FlatList
            data={Object.keys(cart)}
            renderItem={({ item, index }) => (
              <CarrinhoItem
                item={cart[item]}
                index={index}
                onPlus={() => this.onPlus(item)}
                onMinus={() => this.onMinus(item)}
                onRemove={() => this.onRemove(item)}
                onChange={qtd => this.onChange(qtd, item)}
                total={calculateItemTotal(cart, products, item)}
                onNavigate={() => this.onNavigate(item)}
              />
            )}
            keyExtractor={item => item.toString()}
          />
          <View
            style={{
              flexDirection: "row",
              backgroundColor: Color.darkBackground,
              marginTop: 21,
              height: 30,
              marginBottom: 16
            }}
          >
            <Text
              style={{
                ...styles.leftContainer,
                ...primaryBig,
                textAlign: "center",
                textAlignVertical: "center"
              }}
            >
              Informações
            </Text>
            <Text
              style={{
                ...styles.rightContainer,
                ...primaryBig,
                textAlign: "center",
                textAlignVertical: "center"
              }}
            >
              Total
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              backgroundColor: Color.darkBackground
            }}
          >
            <View style={styles.leftContainer}>
              <Text style={styles.informaçõesText}>Subtotal sem IPI</Text>
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
              <Text style={styles.informaçõesText}>Valor do IPI</Text>
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
              backgroundColor: Color.darkBackground
            }}
          >
            <View style={styles.leftContainer}>
              <Text style={styles.informaçõesText}>Valor Total com IPI</Text>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.informaçõesValue}>
                R$ {integerToReal(totalComIpi)}
              </Text>
            </View>
          </View>
        </ScrollView>
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
    textAlignVertical: "center",
    fontSize: 17,
    height: 30,
    paddingLeft: 34,
    color: Color.primaryText
  },
  informaçõesValue: {
    textAlign: "left",
    textAlignVertical: "center",
    fontSize: 17,
    paddingLeft: 3.5,
    height: 30,
    color: Color.primaryText
  },
  leftContainer: {
    width: 259,

    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: Color.divbarColor
  },
  rightContainer: {
    width: 101
  }
});
