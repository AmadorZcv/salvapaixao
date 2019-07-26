import React, { PureComponent } from "react";

import { Image } from "react-native-elements";

export default class CarrinhoIcon extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
