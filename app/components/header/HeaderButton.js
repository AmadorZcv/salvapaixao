import React, { PureComponent } from "react";
import { TouchableOpacity } from "react-native";

export default class HeaderButton extends PureComponent {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{ paddingRight: 16 }}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}
