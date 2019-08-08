import React, { PureComponent } from "react";
import { Icon } from "react-native-elements";
import { Color } from "../../styles";

export default class MenuIcon extends PureComponent {
  render() {
    return (
      <Icon
        name={"menu"}
        type={"material-community"}
        color={Color.headerIcons}
        size={24}
        containerStyle={{ paddingLeft: 16 }}
      />
    );
  }
}
