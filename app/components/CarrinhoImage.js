import React, { PureComponent } from "react";
import { View, Text, Image } from "react-native";

export default class CarrinhoImage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { id } = this.props;
    switch (id) {
      case "10000":
        return (
          <Image
            source={require("../img/cart/spt-small.png")}
            style={{ marginLeft: 8 }}
          />
        );

      case "10001":
        return (
          <Image
            source={require("../img/cart/spt-small.png")}
            style={{ marginLeft: 8 }}
          />
        );
      case "10100":
        return (
          <Image
            source={require("../img/cart/spt-small.png")}
            style={{ marginLeft: 8 }}
          />
        );
      default:
        return null;
    }
  }
}
