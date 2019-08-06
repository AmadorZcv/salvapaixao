import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class TopicWithTextRight extends PureComponent {
  render() {
    const { topic, text } = this.props;
    return (
      <View>
        <Text style={{color: "rgba(0,0,0,0.87)", fontSize: wp(4), textAlign: "right"}}>{topic} </Text>
        <Text style={{color: "rgba(0,0,0,0.54)", fontSize: wp(3.5), paddingBottom: hp(1.5), textAlign: "right"}}>{text}</Text>
      </View>
    );
  }
}
