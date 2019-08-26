import React, { PureComponent } from "react";
import { Image } from "react-native-elements";

export default class LoadIcon extends PureComponent {
  render() {
    return (
      <Image
        style={{ height: 30, width: 30, margin: 0 }}
        source={require("../../img/icons/load-cart.png")}
        resizeMode={"contain"}
      />
    );
  }
}
