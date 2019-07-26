import React, { PureComponent } from "react";
import { View, ImageBackground } from "react-native";
import { Image, Text } from "react-native-elements";
import { connect } from "react-redux";

import { Color } from "../../styles";

// ISSO É UM ANTIPADRÃO, NÃO UTILIZAR CONSTANTEMENTE
//Evitar conectar components diretamente no redux que serão reutilizados em outros locais
class CarrinhoIcon extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { cart } = this.props;
    if (Object.keys(cart).length > 0) {
      return (
        <ImageBackground
          style={{
            height: 22,
            width: 22,
            margin: 5
          }}
          source={require("../../img/icons/shopping-cart.png")}
          resizeMode={"contain"}
        >
          <View
            style={{
              backgroundColor: "#FE3A3A",
              position: "absolute",
              right: 10,
              bottom: 0,
              borderRadius: 7.5,
              minHeight: 15,
              minWidth: 15,
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                color: Color.white,
                fontSize: 10,
                textAlign: "center",
                textAlignVertical: "center"
              }}
            >
              {Object.keys(cart).length}
            </Text>
          </View>
        </ImageBackground>
      );
    }
    return (
      <Image
        style={{
          height: 22,
          width: 22,
          margin: 5
        }}
        source={require("../../img/icons/shopping-cart.png")}
        resizeMode={"contain"}
      />
    );
  }
}
const mapStateToProps = state => {
  const { cart } = state.cart;

  return { cart };
};
export default connect(
  mapStateToProps,
  null
)(CarrinhoIcon);
