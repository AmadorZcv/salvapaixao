import React, { PureComponent } from "react";
import { Image } from "react-native";

export default class CarrinhoImage extends PureComponent {
  render() {
    const { id } = this.props;
    const style = { marginLeft: 8, width: 80, height: 80 };
    switch (id) {
      case "10000":
        return (
          <Image source={require("../img/cart/spt-small.png")} style={style} />
        );

      case "10001":
        return (
          <Image source={require("../img/cart/spt-small.png")} style={style} />
        );
      case "10100":
        return (
          <Image source={require("../img/cart/spt-small.png")} style={style} />
        );
      case "11000":
        return (
          <Image
            source={require("../img/cart/spm-small.png")}
            style={style}
            resizeMode={"contain"}
          />
        );
      default:
        return null;
    }
  }
}
