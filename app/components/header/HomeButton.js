import React, { PureComponent } from "react";
import HomeIcon from "./HomeIcon";
import HeaderButton from "./HeaderButton";

export default class HomeButton extends PureComponent {
  render() {
    return (
      <HeaderButton onPress={this.props.onPress}>
        <HomeIcon />
      </HeaderButton>
    );
  }
}
