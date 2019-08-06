import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { contadorText } from "../styles/Text";

export default class Counter extends PureComponent {
  render() {
    const { total } = this.props;

    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: hp(0.78),
          justifyContent: "center"
        }}
      >
        <View>
          <Text style={contadorText}> {total} </Text>
        </View>
      </View>
    );
  }
}
