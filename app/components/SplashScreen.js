import React, { PureComponent } from "react";
import { View } from "react-native";
import { Image } from "react-native-elements";

export default class SplashScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Image
          source={require("../img/logo/ntp-logo.png")}
          resizeMode={"contain"}
        />
      </View>
    );
  }
}
