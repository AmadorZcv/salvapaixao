import React, { PureComponent } from "react";
import { View, ImageBackground } from "react-native";
import { Image, Text } from "react-native-elements";
import { Color } from "../../styles";

export default class CarrinhoIcon extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
            99
          </Text>
        </View>
      </ImageBackground>
    );
  }
}
