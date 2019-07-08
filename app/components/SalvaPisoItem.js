import React, { PureComponent } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { integerToReal } from "../config/formatUtils";
import { Icon } from "react-native-elements";
import { Color } from "../styles";

export default class SalvaPisoItem extends PureComponent {
  render() {
    const {
      index,
      largura,
      comprimento,
      cobertura,
      preco,
      ipi,
      ipiR,
      total
    } = this.props;
    const trueTotal = total !== undefined ? total.qtd : 0;
    const precoTotal = preco + ipiR;
    const precoFinal = precoTotal * trueTotal;
    const formatPrecoFinal = precoFinal > 0 ? integerToReal(precoFinal) : "0";
    const backgroundColor = index % 2 === 0 ? "white" : "lightgray";
    return (
      <View
        style={{
          flexDirection: "row",
          backgroundColor,
          flex: 1,
          paddingLeft: 7
        }}
      >
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

        <View style={{ flex: 1 }}>
          <Text style={styles.textPreco}>R$ {integerToReal(precoTotal)}</Text>
          <Text style={styles.textCusto}>Custo Total:</Text>
          <Text style={styles.textValueFinal}>R$ {formatPrecoFinal}</Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
              justifyContent: "space-around"
            }}
          >
            <TouchableOpacity onPress={this.props.onMinus}>
              <Icon name={"minus"} type={"feather"} />
            </TouchableOpacity>
            <Text style={styles.contadorText}> {trueTotal} </Text>
            <TouchableOpacity onPress={this.props.onPlus}>
              <Icon name={"plus"} type={"feather"} />
            </TouchableOpacity>
          </View>
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
    color: Color.secondaryText,
    textAlign: "center",
    paddingTop: 3,
    fontSize: 10
  },
  textInfo: {
    textAlign: "center",
    color: Color.primaryText,
    fontWeight: "600",
    fontSize: 10
  },
  textPreco: {
    fontSize: 15,
    color: Color.secondaryText,
    textAlign: "center",
    fontWeight: "100",
    marginBottom: 5
  },
  textCusto: { fontSize: 12, textAlign: "center", color: Color.primaryText },
  textValueFinal: {
    fontSize: 16,
    textAlign: "center",
    color: Color.primaryText
  },
  contadorText: {
    fontSize: 16,
    color: Color.secondaryText,
    textAlign: "center",
    marginBottom: 5
  }
});
