import React, { PureComponent } from "react";
import { View, Text } from "react-native";
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
