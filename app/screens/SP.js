import React, { PureComponent } from "react";
import { Text, Image, ScrollView } from "react-native";
import SalvaPisoItem from "../components/SalvaPisoItem";
import { connect } from "react-redux";

class SP extends PureComponent {
  render() {
    const { products } = this.props;
    return (
      <ScrollView style={{ flex: 1 }}>
        <Image
          source={require("../img/product-screen/sp-tradicional-top.png")}
        />
        <Text style={{ fontSize: 20, color: "black" }}> Papel + Bolha </Text>
        <SalvaPisoItem
          index={0}
          largura={products["10000"].largura}
          cobertura={products["10000"].cobertura}
          preco={products["10000"].preco}
          ipi={products["10000"].ipi}
          ipiR={products["10000"].ipic}
          comprimento={products["10000"].comprimento}
        />
        <SalvaPisoItem
          index={1}
          largura={products["10001"].largura}
          cobertura={products["10001"].cobertura}
          preco={products["10001"].preco}
          ipi={products["10001"].ipi}
          ipiR={products["10001"].ipic}
          comprimento={products["10001"].comprimento}
        />

        <Text style={{ fontSize: 20, color: "black" }}>
          Papel + Bolha + Fita Adesiva
        </Text>
        <SalvaPisoItem
          index={2}
          largura={products["10100"].largura}
          cobertura={products["10100"].cobertura}
          preco={products["10100"].preco}
          ipi={products["10100"].ipi}
          ipiR={products["10100"].ipic}
          comprimento={products["10100"].comprimento}
        />
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  const { products } = state.products;

  return { products };
};
export default connect(mapStateToProps)(SP);
