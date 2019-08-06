import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class TopicWithTextBelow extends PureComponent {
  render() {
    const { topic, text } = this.props;
    return (
      <View style={{alignItems: "flex-start"}}>
        <Text style={{color: "rgba(0,0,0,0.87)", fontSize: wp(4), fontWeight: "bold" }}> {topic} </Text>
        <Text style={{color: "rgba(0,0,0,0.54)", fontSize: wp(3), paddingBottom: hp(3.3)}}>{text}</Text>
      </View>
    );
  }
}
