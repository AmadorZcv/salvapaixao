import React, { PureComponent } from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";
import { connect } from "react-redux";

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
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Input
          placeholder={"Usuario"}
          onChangeText={text => this.setState({ login: text })}
          autoCapitalize={"none"}
        />
        <Input
          placeholder={"Senha"}
          onChangeText={text => this.setState({ senha: text })}
          secureTextEntry
        />
        <Button
          title={"Entrar"}
          containerStyle={{ marginTop: 10, width: "50%" }}
          onPress={this.onLogin}
        />
      </View>
    );
  }
}
export default connect(
  null,
  null
)(Login);
