import React, { PureComponent } from "react";
import { Image } from "react-native";

export default class CarrinhoImage extends PureComponent {
  render() {
    const { id } = this.props;
    const style = { marginLeft: 8, width: 80, height: 80 };
    switch (id) {
      case "10000":
      case "10001":
      case "10100":
        return (
          <Image
            source={require("../img/cart/spt-small.png")}
            style={style}
            resizeMode={"contain"}
          />
        );
      case "11000":
        return (
          <Image
            source={require("../img/cart/spm-small.png")}
            style={style}
            resizeMode={"contain"}
          />
        );
      case "12000":
        return (
          <Image
            source={require("../img/cart/spr-small.png")}
            style={style}
            resizeMode={"contain"}
          />
        );
      case "14000":
      case "14001":
      case "14002":
      case "14003":
        return (
          <Image
            source={require("../img/cart/spin-small.png")}
            style={style}
            resizeMode={"contain"}
          />
        );
      case "16000":
        return (
          <Image
            source={require("../img/cart/sm-small.png")}
            style={style}
            resizeMode={"contain"}
          />
        );
      case "17000":
      case "17001":
      case "17002":
      case "17003":
        return <Image
          source={require("../img/cart/sban-small.png")}
          style={style}
          resizeMode={"contain"}
        />;
      default:
        return null;
    }
  }
}
