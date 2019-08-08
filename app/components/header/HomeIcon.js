import React, { PureComponent } from "react";
import { Image } from "react-native-elements";

export default class HomeIcon extends PureComponent {
  render() {
    return (
      <Image
        style={{ height: 22, width: 22, margin: 5 }}
        source={require("../../img/icons/home.png")}
        resizeMode={"contain"}
      />
    );
  }
}
