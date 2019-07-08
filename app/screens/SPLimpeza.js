import React, { PureComponent } from "react";
import { Text, Image, ScrollView, Dimensions } from "react-native";

import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cart/actions";
import { Color } from "../styles";
import SalvaPinturaItem from "../components/SalvaPinturaItem";
import SalvaLimpezaItem from "../components/SalvaLimpezaItem";

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
        <Text
          style={{
            fontSize: 16,
            color: Color.primaryText,
            paddingLeft: 10,
            fontFamily: "Roboto-Black"
          }}
        >
          Limpeza Pesada Pós Obra (Porcelanato)
        </Text>
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
        <Text
          style={{
            fontSize: 16,
            color: Color.primaryText,
            paddingLeft: 10,
            fontFamily: "Roboto-Black",
            backgroundColor: Color.darkBackground
          }}
        >
          Limpeza Pesada Pós Obra (Porcelanato)
        </Text>
        <SalvaLimpezaItem
          index={1}
          unidade={products["13000"].usidade}
          diluicao={products["13000"].diluicao}
          preco={products["13000"].preco}
          ipi={products["13000"].ipi}
          ipiR={products["13000"].ipic}
          rendimento={products["13000"].rendimento}
          onPlus={() => this.onPlus("13000")}
          onMinus={() => this.onMinus("13000")}
          total={cart["13000"]}
        /><Text
          style={{
            fontSize: 16,
            color: Color.primaryText,
            paddingLeft: 10,
            fontFamily: "Roboto-Black"
          }}
        >
          Limpeza Pesada Pós Obra (Porcelanato)
      </Text>
        <SalvaLimpezaItem
          index={2}
          unidade={products["13000"].usidade}
          diluicao={products["13000"].diluicao}
          preco={products["13000"].preco}
          ipi={products["13000"].ipi}
          ipiR={products["13000"].ipic}
          rendimento={products["13000"].rendimento}
          onPlus={() => this.onPlus("13000")}
          onMinus={() => this.onMinus("13000")}
          total={cart["13000"]}
        /><Text
          style={{
            fontSize: 16,
            color: Color.primaryText,
            paddingLeft: 10,
            fontFamily: "Roboto-Black",
            backgroundColor: Color.darkBackground
          }}
        >
          Limpeza Pesada Pós Obra (Porcelanato)
    </Text>
        <SalvaLimpezaItem
          index={3}
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
