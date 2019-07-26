import React, { PureComponent } from "react";
import { View, Dimensions, ImageBackground } from "react-native";
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
    const { login, senha } = this.state;
    if (login === "dev" && senha === "2019salvacompra") {
      this.props.dispatch({ type: "SET_LOGGED", payload: true });
    }
  };
  render() {
    const { width } = Dimensions.get("window");
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white"
        }}
      >
        <Image
          source={require("../img/logo/login-ntp-logo.png")}
          style={{ width: 250, height: 100, marginVertical: 5 }}
          resizeMode={"contain"}
        />
        <View
          style={{
            height: "35%",
            width: 250,
            alignItems: "center",
            marginTop: 15
          }}
        >
          <View style={{ backgroundColor: "#449296", width: 250 }}>
            <Text
              style={{
                textAlign: "center",
                textAlignVertical: "center",
                color: "white",
                fontSize: normalize(21),
                marginHorizontal: 40,
                marginTop: 20,
                marginBottom: 19
              }}
            >
              Seja bem vindo ao Salva Compra!
            </Text>
          </View>
          <View
            style={{
              width: 250,
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
                height: "25%",
                marginBottom: 20,
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
                height: "25%",
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
          <Button
            title={"Entrar"}
            containerStyle={{
              width: "55%"
            }}
            titleStyle={{ fontSize: normalize(13) }}
            onPress={this.onLogin}
            buttonStyle={{ backgroundColor: "#247378", borderRadius: 5 }}
          />
        </View>

        <View style={{ flex: 1 }} />
        <ImageBackground
          source={require("../img/logo/login-bg.png")}
          style={{ width: width, height: 200, alignItems: "center" }}
          resizeMode={"stretch"}
        >
          <Image
            source={require("../img/logo/salvabras-logo.png")}
            style={{
              width: 250,
              height: 100,
              flex: 1
            }}
            resizeMode={"contain"}
          />
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
      </View>
    );
  }
}
export default connect(
  null,
  null
)(Login);
