import React, { PureComponent } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Image } from "react-native-elements";

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onSalvaPiso = () => {
    this.props.navigation.navigate("SalvaPiso");
  };
  onSalvaPisoEspeciais = () => {
    this.props.navigation.navigate("SalvaPisoEspeciais");
  };
  onSalvaPisoResistente = () => {
    this.props.navigation.navigate("SalvaPisoResistente");
  };
  onSalvaPisoLimpeza = () => {
    this.props.navigation.navigate("SalvaPisoLimpeza");
  };
  onSalvaPintura = () => {
    this.props.navigation.navigate("SalvaPisoPintura");
  };
  onSalvaQuina = () => {
    this.props.navigation.navigate("SalvaQuina");
  };
  onSalvaMetais = () => {
    this.props.navigation.navigate("SalvaMetais");
  };
  onSalvaBancada = () => {
    this.props.navigation.navigate("SalvaBancada");
  };
  onSalvaRalo = () => {
    this.props.navigation.navigate("SalvaRalo");
  };
  onMateriais = () => {
    this.props.navigation.navigate("Materiais");
  };
  render() {
    const {
      onMateriais,
      onSalvaBancada,
      onSalvaMetais,
      onSalvaPintura,
      onSalvaPiso,
      onSalvaPisoEspeciais,
      onSalvaPisoLimpeza,
      onSalvaPisoResistente,
      onSalvaQuina,
      onSalvaRalo
    } = this;
    return (
      <ScrollView style={styles.container}>
        <View style={{ ...styles.cardLine, marginTop: 5 }}>
          <TouchableOpacity style={styles.card} onPress={onSalvaPiso}>
            <Image source={require("../img/index/spt-logo.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={onSalvaPisoEspeciais}>
            <Image source={require("../img/index/spm-logo.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.cardLine}>
          <TouchableOpacity style={styles.card} onPress={onSalvaPisoResistente}>
            <Image source={require("../img/index/spr-logo.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={onSalvaPisoLimpeza}>
            <Image source={require("../img/index/spl-logo.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.cardLine}>
          <TouchableOpacity style={styles.card} onPress={onSalvaPintura}>
            <Image source={require("../img/index/spin-logo.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={onSalvaQuina}>
            <Image source={require("../img/index/sq-logo.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.cardLine}>
          <TouchableOpacity style={styles.card} onPress={onSalvaMetais}>
            <Image source={require("../img/index/sm-logo.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={onSalvaBancada}>
            <Image source={require("../img/index/sb-logo.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.cardLine}>
          <TouchableOpacity style={styles.card} onPress={onSalvaRalo}>
            <Image source={require("../img/index/sr-logo.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={onMateriais}>
            <Image
              source={require("../img/index/smb-logo.png")}
              resizeMode={"stretch"}
              style={{ width: 170 }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  cardLine: {
    flexDirection: "row",
    justifyContent: "center"
  },
  card: {
    margin: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e6e7e9"
  }
});
