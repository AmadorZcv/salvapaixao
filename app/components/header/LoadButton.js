import React, { PureComponent } from "react";
import LoadIcon from "./LoadIcon";
import HeaderButton from "./HeaderButton";

export default class HomeButton extends PureComponent {
  render() {
    return (
      <HeaderButton onPress={this.props.onPress}>
        <LoadIcon />
      </HeaderButton>
    );
  }
}
