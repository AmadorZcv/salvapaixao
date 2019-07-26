import React, { PureComponent } from "react";

import HeaderButton from "./HeaderButton";
import CarrinhoIcon from "./CarrinhoIcon";

export default class CarrinhoButton extends PureComponent {
  render() {
    return (
      <HeaderButton onPress={this.props.onPress}>
        <CarrinhoIcon />
      </HeaderButton>
    );
  }
}
