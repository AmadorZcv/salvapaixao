import React, { Component } from "react";
import { Alert, ActivityIndicator, View } from "react-native";
import { StyleSheet, Text, TouchableOpacity, Linking } from "react-native";

import QRCodeScanner from "react-native-qrcode-scanner";

export default class Config extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orcamento: {},
      fetching: false
    };
  }

  onSuccess = e => {
    const { navigation } = this.props;
    navigation.navigate("Orcamento", { item });
    this.setState({ fetching: true });
    Alert.alert("Funcionou", e.data);
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
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ActivityIndicator animating={this.state.fetching} />
        <QRCodeScanner
          onRead={this.onSuccess}
          topContent={
            <Text style={styles.centerText}>
              Go to{" "}
              <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
              your computer and scan the QR code.
            </Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
          }
        />
      </View>
    );
  }
}

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
  },
  buttonText: {
    fontSize: 21,
    color: "rgb(0,122,255)"
  },
  buttonTouchable: {
    padding: 16
  }
});
