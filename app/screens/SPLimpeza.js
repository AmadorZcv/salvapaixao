import React, { PureComponent } from "react";
import { Text, Image, ScrollView, Dimensions } from "react-native";

import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cart/actions";
import { Color } from "../styles";
import SalvaPinturaItem from "../components/SalvaPinturaItem";
import SalvaLimpezaItem from "../components/SalvaLimpezaItem";
import { productLabel } from "../styles/Text";

class SPLimpeza extends PureComponent {
  onPlus = id => {
    this.props.dispatch(addToCart(id));
  };
  onMinus = id => {
    this.props.dispatch(removeFromCart(id));
  };
  render() {
    const { products, cart } = this.props;
    const { width } = Dimensions.get;
    return (
      <ScrollView style={{ flex: 1 }}>
        <Image
          source={require("../img/product-screen/sp-limpeza-top.png")}
          style={{ width, height: 190 }}
        />
        <Text style={productLabel}>Limpeza Pesada Pós Obra (Porcelanato)</Text>
        <SalvaLimpezaItem
          index={0}
          unidade={products["13000"].usidade}
          diluicao={products["13000"].diluicao}
          preco={products["13000"].preco}
          ipi={products["13000"].ipi}
          ipiR={products["13000"].ipic}
          rendimento={products["13000"].rendimento}
          onPlus={() => this.onPlus("13000")}
          onMinus={() => this.onMinus("13000")}
          total={cart["13000"]}
        />
        <Text style={productLabel}>
          Limpeza Diária (Cerâmica {"&"} Porcelanato)
        </Text>
        <SalvaLimpezaItem
          index={1}
          unidade={products["13100"].usidade}
          diluicao={products["13100"].diluicao}
          preco={products["13100"].preco}
          ipi={products["13100"].ipi}
          ipiR={products["13100"].ipic}
          rendimento={products["13100"].rendimento}
          onPlus={() => this.onPlus("13100")}
          onMinus={() => this.onMinus("13100")}
          total={cart["13100"]}
        />
        <Text style={productLabel}>Limpeza Predas</Text>
        <SalvaLimpezaItem
          index={2}
          unidade={products["13200"].usidade}
          diluicao={products["13200"].diluicao}
          preco={products["13200"].preco}
          ipi={products["13200"].ipi}
          ipiR={products["13200"].ipic}
          rendimento={products["13200"].rendimento}
          onPlus={() => this.onPlus("13200")}
          onMinus={() => this.onMinus("13200")}
          total={cart["13200"]}
        />
        <Text style={productLabel}>Limpeza Pesada Pós Obra (Porcelanato)</Text>
        <SalvaLimpezaItem
          index={3}
          unidade={products["13300"].usidade}
          diluicao={products["13300"].diluicao}
          preco={products["13300"].preco}
          ipi={products["13300"].ipi}
          ipiR={products["13300"].ipic}
          rendimento={products["13300"].rendimento}
          onPlus={() => this.onPlus("13300")}
          onMinus={() => this.onMinus("13300")}
          total={cart["13300"]}
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
export default connect(mapStateToProps)(SPLimpeza);
