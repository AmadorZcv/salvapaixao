import React, { PureComponent } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import CarrinhoItem from "../components/CarrinhoItem";
import {
  addToCart,
  removeFromCart,
  setQtdCart,
  removeItem,
  cleanCart
} from "../redux/cart/actions";
import {
  calculateItemTotal,
  calculateTotalComIpi,
  calculateTotalNoIpi,
  calculateTotalIpi
} from "../redux/cart/reducer";
import { integerToReal, fontSizeAdjust } from "../config/formatUtils";
import { Color } from "../styles";
import { primaryBig } from "../styles/Text";
import { navigateFromId } from "../config/navigateUtils";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import { Button } from "react-native-elements";
import { selectProducts } from "../redux/products/selectors";

class Carrinho extends PureComponent {
  onClean = () => {
    const { cart } = this.props;
    if (Object.keys(cart).length > 0) {
      Alert.alert(
        "Excluir",
        "Você tem certeza que deseja excluir todos os itens?",
        [
          {
            text: "Cancelar",
            onPress: () => {},
            style: "cancel"
          },
          { text: "Excluir", onPress: () => this.props.dispatch(cleanCart()) }
        ],
        { cancelable: false }
      );
    }
  };
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
      <View>
        <ScrollView>
          <View
            style={{
              marginTop: hp(1.5625),
              alignItems: "flex-end",
              marginBottom: hp(0.78125)
            }}
          >
            <TouchableOpacity
              style={{ paddingRight: hp(1.38) }}
              onPress={this.onClean}
            >
              <Text style={{ color: Color.secondaryText, fontSize: wp(3.5) }}>
                Limpar Carrinho
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: Color.darkBackground,

              height: hp(4.6875),
              marginBottom: hp(2.5)
            }}
          >
            <Text
              style={{
                ...primaryBig,
                textAlign: "center",
                textAlignVertical: "center",
                width: wp(72),
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
                width: wp(28)
              }}
            >
              Subtotal
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
                preco={products[item].total}
              />
            )}
            keyExtractor={item => item.toString()}
          />
          <View
            style={{
              marginTop: hp(2.34375),
              alignItems: "flex-end",
              marginBottom: hp(0.78125)
            }}
          >
            <TouchableOpacity
              style={{ paddingRight: wp(1.38) }}
              onPress={this.onClean}
            >
              <Text style={{ color: Color.secondaryText, fontSize: wp(3.5) }}>
                Limpar Carrinho
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: Color.darkBackground,

              height: hp(4.6875),
              marginBottom: wp(2.5)
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
              <Text
                style={{
                  fontSize: fontSizeAdjust(totalComIpi),
                  textAlign: "left",
                  textAlignVertical: "center",
                  paddingLeft: wp(1),
                  height: hp(4.6875),
                  color: Color.primaryText
                }}
              >
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
              <Text
                style={{
                  fontSize: fontSizeAdjust(totalComIpi),
                  textAlign: "left",
                  textAlignVertical: "center",
                  paddingLeft: wp(1),
                  height: hp(4.6875),
                  color: Color.primaryText
                }}
              >
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
              <Text
                style={{
                  fontSize: fontSizeAdjust(totalComIpi),
                  textAlign: "left",
                  textAlignVertical: "center",
                  paddingLeft: wp(1),
                  height: hp(4.6875),
                  color: Color.primaryText
                }}
              >
                R$ {integerToReal(totalComIpi)}
              </Text>
            </View>
          </View>
          <Button
            color="#fafafa"
            title={"Salvar orçamento"}
            onPress={() => this.props.navigation.navigate("SalvarOrcamento")}
            containerStyle={{
              marginBottom: hp(2.5),
              marginTop: hp(1.5),
              marginHorizontal: hp(11)
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { cart } = state.cart;
  const products = selectProducts(state);
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
    fontSize: wp(4.5),
    height: 30,
    paddingLeft: 34,
    color: Color.primaryText
  },
  //não utilizada
  informaçõesValue: {
    textAlign: "left",
    textAlignVertical: "center",
    paddingLeft: 3.5,
    height: 30,
    color: Color.primaryText
  },
  leftContainer: {
    width: wp(72),
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: Color.divbarColor
  },
  rightContainer: {
    width: wp(28)
  }
});
