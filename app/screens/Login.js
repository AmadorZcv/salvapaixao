import React, { PureComponent } from "react";
import {
  View,
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import { Input, Button, Image, Text, normalize } from "react-native-elements";
import VersionNumber from "react-native-version-number";
import { connect } from "react-redux";
import { Color } from "../styles";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
      Alert.alert(
        "Atenção",
        "Usuário e/ou senha incorretos. Tente novamente.",
        [
          {
            text: "Fechar",
            style: "cancel"
          }
        ],
        { cancelable: false }
      );
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
          style={{ width: wp("55.55%") }}
          resizeMode={"contain"}
        />
        <View
          style={{
            height: hp(34),
            width: wp(70),
            alignItems: "center",
          }}
        >
          <View style={{ backgroundColor: "#449296", height: hp("13.90%") }}>
            <Text
              style={{
                paddingVertical: hp("3,125%"),
                paddingHorizontal: wp("10%"),
                textAlign: "center",
                color: "white",
                fontSize: wp(6),
              }}
            >Seja bem-vindo ao Salva Compra!
            </Text>
          </View>
          <View
            style={{
              width: wp(70),
              backgroundColor: "#88C1C3",
              paddingHorizontal: wp(10),
              paddingVertical: hp("3,125%")
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
                height: hp("6%"),
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
                height: hp("6%"),
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

        <ImageBackground
          source={require("../img/logo/fundo-login-salvabras.png")}
          style={{
            width: wp(100),
            height: hp("36.25%"),
            alignItems: "center",
            marginTop: hp("5.625%"),
          }}
        >
          <Button
            title={"Entrar"}
            containerStyle={{
              width: wp(35),
              height: hp(6),
            }}
            titleStyle={{ fontSize: normalize(16) }}
            onPress={this.onLogin}
            buttonStyle={{ backgroundColor: "#247378", borderRadius: 5 }}
            activeOpacity={1}
          />
          <View style={{
              marginTop: hp("22%"),
              alignItems: "center",
              paddingBottom: hp(10),
              bottom: hp(0.5)
            }}>
            <Text style={{ color: "white", fontSize: wp(3.5) }}>
              Salva Compra
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: wp(3.5),
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
