import React, { PureComponent } from "react";
import { Image } from "react-native";

export default class CarrinhoImage extends PureComponent {
  render() {
    const { id } = this.props;
    const style = { marginLeft: 15, width: 70, height: 37.5 };
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
      case "15000":
        return (
          <Image
            source={require("../img/cart/sq-small.png")}
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
        return (
          <Image
            source={require("../img/cart/sban-small.png")}
            style={style}
            resizeMode={"contain"}
          />
        );
      case "18000":
      case "18001":
        return (
          <Image
            source={require("../img/cart/sr-small.png")}
            style={style}
            resizeMode={"contain"}
          />
        );
      case "13000":
      case "13100":
      case "13200":
      case "13300":
        return (
          <Image
            source={require("../img/cart/spl-small.png")}
            style={style}
            resizeMode={"contain"}
          />
        );
      case "19000":
      case "19001":
      case "19100":
      case "19101":
      case "19102":
      case "19103":
      case "19104":
      case "19105":
      case "19200":
      case "19201":
      case "19300":
        return (
          <Image
            source={require("../img/cart/smb-small.png")}
            style={style}
            resizeMode={"contain"}
          />
        );
      default:
        return null;
    }
  }
}
