import React, { PureComponent } from "react";
import {
  View,
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView
} from "react-native";
import { Input, Button, Image, Text, normalize } from "react-native-elements";
import VersionNumber from "react-native-version-number";
import { connect } from "react-redux";
import { Color } from "../styles";

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      senha: ""
    };
  }
  onLogin = () => {
    console.log("here maybe?");

    const { login, senha } = this.state;
    if (login === "dev" && senha === "2019salvacompra") {
      this.props.dispatch({ type: "SET_LOGGED", payload: true });
    } else {
      alert("Credencias incorretas");
    }
  };
  render() {
    const { width } = Dimensions.get("window");
    return (
      <KeyboardAvoidingView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white"
        }}
      >
        <Image
          source={require("../img/logo/login-ntp-logo.png")}
          style={{ width: 250, height: 100, marginVertical: 15 }}
          resizeMode={"contain"}
        />
        <View
          style={{
            height: 200,
            width: 250,
            alignItems: "center",
            marginTop: 10
          }}
        >
          <View style={{ backgroundColor: "#449296", width: 252 }}>
            <Text
              style={{
                textAlign: "center",
                textAlignVertical: "center",
                color: "white",
                fontSize: normalize(21),
                marginHorizontal: 40,
                marginVertical: 20
              }}
            >
              Seja bem-vindo ao Salva Compra!
            </Text>
          </View>
          <View
            style={{
              width: 252,
              backgroundColor: "#88C1C3",
              paddingHorizontal: 37,
              paddingTop: 20,
              marginBottom: 20
            }}
          >
            <Input
              placeholder={"Usuario"}
              onChangeText={text => this.setState({ login: text })}
              autoCapitalize={"none"}
              containerStyle={{
                backgroundColor: Color.background,
                borderRadius: 10,
                borderBottomWidth: 0,
                height: "30%",
                marginBottom: 10,
                justifyContent: "center"
              }}
              inputStyle={{
                fontSize: normalize(17),
                textAlignVertical: "center"
              }}
              inputContainerStyle={{
                borderBottomWidth: 0,
                paddingBottom: 0
              }}
              underlineColorAndroid={"transparent"}
            />
            <Input
              placeholder={"Senha"}
              onChangeText={text => this.setState({ senha: text })}
              secureTextEntry
              containerStyle={{
                backgroundColor: Color.background,
                borderRadius: 10,
                borderBottomWidth: 0,
                height: "30%",
                marginBottom: 5,
                justifyContent: "center"
              }}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              inputStyle={{
                fontSize: normalize(17),
                textAlignVertical: "center"
              }}
              underlineColorAndroid={"transparent"}
            />
            <Text
              style={{
                textAlign: "center",
                fontSize: normalize(11),
                color: "white"
              }}
            >
              Esqueceu a senha?
            </Text>
          </View>
        </View>
        <Button
          title={"Entrar"}
          containerStyle={{
            width: "40%",
            height: "50%",
            flex: 1,
            marginTop: 46,
          }}
          titleStyle={{ fontSize: normalize(16) }}
          onPress={this.onLogin}
          buttonStyle={{ backgroundColor: "#247378", borderRadius: 5 }}
          activeOpacity={1}
        />
        <Image
          source={require("../img/logo/salvabras-logo.png")}
          style={{
            width: 220,
            height: 47.5,
            flex: 0,
          }}
          resizeMode={"contain"}
        />
        <ImageBackground
          source={require("../img/logo/menu-bg.png")}
          style={{ width: width, height: 117.75, alignItems: "center", marginTop: 30 }}
          resizeMode={"contain"}
        >
          <View style={{ marginBottom: 5, position: "absolute", bottom: 0 }}>
            <Text style={{ color: "white", fontSize: normalize(13) }}>
              Salva Compra
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: normalize(13),
                textAlign: "center"
              }}
            >
              Versão {VersionNumber.appVersion}
            </Text>
          </View>
        </ImageBackground>
        <View />
      </KeyboardAvoidingView>
    );
  }
}
export default connect(
  null,
  null
)(Login);
