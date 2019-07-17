import React, { PureComponent } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Image } from "react-native-elements";
import Color from "../styles/Color";

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
      <ScrollView >
        <View style={styles.container}>
          <View style={{ ...styles.cardLine, marginTop: 5 }}>
            <TouchableOpacity style={styles.card} onPress={onSalvaPiso}>
              <Image
                style={styles.imageStyle}
                source={require("../img/index/spt-logo.png")}
                resizeMode={"stretch"}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={onSalvaPisoEspeciais}>
              <Image
                style={styles.imageStyle}
                source={require("../img/index/spm-logo.png")}
                resizeMode={"stretch"}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.cardLine}>
            <TouchableOpacity style={styles.card} onPress={onSalvaPisoResistente}>
              <Image
                style={styles.imageStyle}
                source={require("../img/index/spr-logo.png")}
                resizeMode={"stretch"}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={onSalvaPisoLimpeza}>
              <Image
                style={styles.imageStyle}
                source={require("../img/index/spl-logo.png")}
                resizeMode={"stretch"}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.cardLine}>
            <TouchableOpacity style={styles.card} onPress={onSalvaPintura}>
              <Image
                style={styles.imageStyle}
                source={require("../img/index/spin-logo.png")}
                resizeMode={"stretch"}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={onSalvaQuina}>
              <Image
                style={styles.imageStyle}
                source={require("../img/index/sq-logo.png")}
                resizeMode={"center"}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.cardLine}>
            <TouchableOpacity style={styles.card} onPress={onSalvaMetais}>
              <Image
                style={styles.imageStyle}
                source={require("../img/index/sm-logo.png")}
                resizeMode={"stretch"}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={onSalvaBancada}>
              <Image
                style={styles.imageStyle}
                source={require("../img/index/sb-logo.png")}
                resizeMode={"stretch"}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.cardLine}>
            <TouchableOpacity style={styles.card} onPress={onSalvaRalo}>
              <Image
                style={styles.imageStyle}
                source={require("../img/index/sr-logo.png")}
                resizeMode={"stretch"}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={onMateriais}>
              <Image
                style={styles.imageStyle}
                source={require("../img/index/smb-logo.png")}
                resizeMode={"stretch"}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.logoView}>
          <Image
                style={styles.logoStyle}
                source={require("../img/logo/fabricado-salvabras.png")}
                resizeMode={"contain"}
              /></View>
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    paddingBottom: 24
  },
  cardLine: {
    flexDirection: "row",
    justifyContent: "center"
  },
  card: {
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e6e7e9",
    borderRadius: 5
  },
  imageStyle: {
    width: 156,
    height: 101,
    borderRadius: 5
  },
  logoView: {
    paddingTop: 15,
  },
  logoStyle: {
    height: 59,
  }
});
