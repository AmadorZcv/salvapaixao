import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class LabelWithTextBelow extends PureComponent {
  render() {
    const { label, text } = this.props;
    return (
      <View>
        <Text style={{color: "rgba(0,0,0,0.87)", fontSize: wp(4)}}>{label} </Text>
        <Text style={{color: "rgba(0,0,0,0.54)", fontSize: wp(3.5), paddingBottom: hp(1.5)}}>{text}</Text>
      </View>
    );
  }
}
