import React, { PureComponent } from "react";
import { Text, Image, ScrollView, Dimensions } from "react-native";
import SalvaPisoItem from "../components/SalvaPisoItem";
import { connect } from "react-redux";
import { addToCart, removeFromCart, setQtdCart } from "../redux/cart/actions";
import { productLabel, productSublabel } from "../styles/Text";
import { FlatList } from "react-native-gesture-handler";
import SalvaPinturaItem from "../components/SalvaPinturaItem";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
class Materiais extends PureComponent {
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
    const papeloes = ["19000", "19001"];
    const lonas = ["19100", "19101", "19102", "19103", "19104", "19105"];
    const crepes = ["19200", "19201"];
    const crepePremium = ["19300"];
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
        <Image
          source={require("../img/product-screen/m-basicos-top.png")}
          style={{ width, height: hp(26.6875) }}
        />
        <Text style={productLabel}>Papelão Ondulado</Text>
        <FlatList
          data={papeloes}
          keyExtractor={item => item}
          renderItem={({ item, index }) => (
            <SalvaPisoItem
              index={index}
              largura={products[item].largura}
              cobertura={products[item].cobertura}
              preco={products[item].preco}
              ipi={products[item].ipi}
              ipiR={products[item].ipic}
              comprimento={products[item].comprimento}
              onPlus={() => this.onPlus(item)}
              onMinus={() => this.onMinus(item)}
              onChange={qtd => this.onChange(qtd, item)}
              total={cart[item]}
            />
          )}
        />
        <Text style={productLabel}>Lona Plástica Preta</Text>
        <FlatList
          data={lonas}
          keyExtractor={item => item}
          renderItem={({ item, index }) => (
            <SalvaPisoItem
              index={index}
              largura={products[item].largura}
              cobertura={products[item].cobertura}
              preco={products[item].preco}
              ipi={products[item].ipi}
              ipiR={products[item].ipic}
              comprimento={products[item].comprimento}
              onPlus={() => this.onPlus(item)}
              onMinus={() => this.onMinus(item)}
              onChange={qtd => this.onChange(qtd, item)}
              total={cart[item]}
            />
          )}
        />
        <Text style={productLabel}>Fita Crepe</Text>
        <Text style={{ ...productSublabel }}>Caixa c/ 4 unidades</Text>
        <FlatList
          data={crepes}
          keyExtractor={item => item}
          renderItem={({ item, index }) => (
            <SalvaPinturaItem
              index={index}
              altura={products[item].altura}
              cobertura={products[item].cobertura}
              preco={products[item].preco}
              ipi={products[item].ipi}
              ipiR={products[item].ipic}
              comprimento={products[item].comprimento}
              onPlus={() => this.onPlus(item)}
              onMinus={() => this.onMinus(item)}
              onChange={qtd => this.onChange(qtd, item)}
              total={cart[item]}
            />
          )}
        />
        <Text style={productLabel}>Fita Crepe Premium</Text>
        <Text style={{ ...productSublabel }}>Caixa c/ 2 unidades</Text>
        <FlatList
          data={crepePremium}
          keyExtractor={item => item}
          renderItem={({ item, index }) => (
            <SalvaPinturaItem
              index={index}
              altura={products[item].altura}
              cobertura={products[item].cobertura}
              preco={products[item].preco}
              ipi={products[item].ipi}
              ipiR={products[item].ipic}
              comprimento={products[item].comprimento}
              onPlus={() => this.onPlus(item)}
              onMinus={() => this.onMinus(item)}
              onChange={qtd => this.onChange(qtd, item)}
              total={cart[item]}
            />
          )}
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
export default connect(mapStateToProps)(Materiais);
