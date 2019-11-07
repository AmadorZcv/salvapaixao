import React, { Component } from "react";
import { connect } from "react-redux";

import { Alert, ActivityIndicator, View } from "react-native";
import { StyleSheet, Text, TouchableOpacity, Linking } from "react-native";

import QRCodeScanner from "react-native-qrcode-scanner";
import { CheckBox, Button } from "react-native-elements";
import { setIsConsumidor } from "../redux/products/actions";
import { Color } from "../styles";
import Api from "../config/api";

class Config extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orcamento: {},
      fetching: false
    };
  }

  onSuccess = e => {
    const { navigation } = this.props;
    this.setState({ fetching: true });
    orcamentoId = e.data;
    Api.get(`/api/orcamento/${orcamentoId}`)
      .then(response => {
        navigation.navigate("Orcamento", { item: response.data.orcamento });
        this.setState({ fetching: false });
      })
      .catch(error => {
        this.setState({ fetching: false });
        Alert.alert("Erro ao se comunicar com o servidor");
      });
    this.scanner.reactivate();
  };
  renderLoading = () => {
    if (this.state.fetching) {
      return <ActivityIndicator animating={this.state.fetching} />;
    }
    return null;
  };
  render() {
    const { nome, cargo, filialId, funcionarioId, isConsumidor } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {this.renderLoading()}
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 30
            }}
          >
            <View>
              <Text style={{ color: Color.primaryText }}>{nome}</Text>
              <Text style={{ color: Color.secondaryText }}>{cargo}</Text>
              <Text style={{ color: Color.secondaryText }}>
                {filialId}
                {funcionarioId}
              </Text>
            </View>
            <Button
              title={"Sair da conta"}
              onPress={() =>
                this.props.dispatch({ type: "SET_IS_LOGGED", payload: false })
              }
            />
          </View>
          <CheckBox
            checked={isConsumidor}
            title="Preço Consumidor"
            onPress={() =>
              this.props.dispatch(setIsConsumidor(!this.props.isConsumidor))
            }
            containerStyle={{
              borderWidth: 0,
              backgroundColor: "#fff",
              paddingBottom: 0
            }}
          />
          <Text
            style={{ color: Color.primaryText, flex: 1, textAlign: "center" }}
          >
            Centralize o QR na camera para acessar os orçamentos
          </Text>
        </View>
        <QRCodeScanner
          containerStyle={{ flex: 1 }}
          onRead={this.onSuccess}
          ref={node => {
            this.scanner = node;
          }}
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  const { nome, cargo, filialId, funcionarioId } = state.auth;
  const { isConsumidor } = state.products;
  return {
    nome,
    cargo,
    filialId,
    funcionarioId,
    isConsumidor
  };
};
export default connect(mapStateToProps)(Config);
const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: "#777"
  },
  textBold: {
    fontWeight: "500",
    color: "#000"
  }
});
