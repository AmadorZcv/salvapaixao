import React, { PureComponent } from "react";
import { TouchableOpacity } from "react-native";
import MenuIcon from "./MenuIcon";

export default class MenuButton extends PureComponent {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <MenuIcon />
      </TouchableOpacity>
    );
  }
}
