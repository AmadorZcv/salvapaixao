import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Icon, Image } from "react-native-elements";
import { contadorText } from "../styles/Text";

export default class Counter extends PureComponent {
  constructor() {
    super();
    this.timer = null;
  }

  addOne = () => {
    this.props.onPlus();
    this.timer = setTimeout(this.addOne, 300);
  };
  minusOne = () => {
    this.props.onMinus();
    this.timer = setTimeout(this.minusOne, 300);
  };

  stopTimer = () => {
    clearTimeout(this.timer);
  };
  render() {
    const { total, onMinus, onPlus } = this.props;

    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: 5,
          justifyContent: "center"
        }}
      >
        <TouchableOpacity
          //onPress={onMinus}
          onPressIn={this.minusOne}
          onPressOut={this.stopTimer}
        >
          <Image
            source={require("../img/icons/minus.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <Text style={contadorText}> {total} </Text>
        <TouchableOpacity
          //onPress={onPlus}
          onPressIn={this.addOne}
          onPressOut={this.stopTimer}
        >
          <Image
            source={require("../img/icons/plus.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
