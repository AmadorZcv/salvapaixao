import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import { integerToReal } from "../config/formatUtils";

export default class SalvaPisoItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      index,
      largura,
      comprimento,
      cobertura,
      preco,
      ipi,
      ipiR
    } = this.props;
    const backgroundColor = index % 2 === 0 ? "white" : "lightgray";
    return (
      <View style={{ flexDirection: "row", backgroundColor }}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.column}>
            <Text style={styles.textInfo}>Largura</Text>
            <Text style={styles.textInfo}>(Metros)</Text>
            <Text style={styles.textValue}>{largura}</Text>
            <Text style={styles.textInfo}>Preço</Text>
            <Text style={styles.textInfo}>(ICMS)</Text>
            <Text style={styles.textValue}>R$ {integerToReal(preco)}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.column}>
            <Text style={styles.textInfo}>Comprimento</Text>
            <Text style={styles.textInfo}>(Metros)</Text>
            <Text style={styles.textValue}>{comprimento}</Text>
            <Text style={styles.textInfo}>IPI</Text>
            <Text style={styles.textInfo}>(%)</Text>
            <Text style={styles.textValue}>{ipi}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.column}>
            <Text style={styles.textInfo}>Cobertura</Text>
            <Text style={styles.textInfo}>(Metros²)</Text>
            <Text style={styles.textValue}>{cobertura}</Text>
            <Text style={styles.textInfo}>IPI</Text>
            <Text style={styles.textInfo}>(R$)</Text>
            <Text style={styles.textValue}>R$ {integerToReal(ipiR)}</Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10
          }}
        >
          <Text style={styles.textPreco}>Preço:</Text>
          <Text style={styles.textPreco}>R$ {integerToReal(preco + ipiR)}</Text>
        </View>
        <View style={{}}>
          <Text style={styles.textPreco}>Total:</Text>
          <Text style={{ ...styles.textPreco }}>R$ 0,00</Text>
          <Text style={{ ...styles.textPreco, marginTop: 30 }}>- 0 +</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  column: {
    marginHorizontal: 5
  },
  textValue: {
    color: "gray",
    textAlign: "center",
    paddingTop: 3
  },
  textInfo: {
    fontWeight: "bold",
    color: "black",
    textAlign: "center"
  },
  textPreco: {
    fontSize: 20,
    color: "black",
    textAlign: "center"
  }
});
