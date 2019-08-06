import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 
export default class LabelWithTextRight extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { label, text } = this.props;
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Text style={{ textAlign: "left" , color: "rgba(0,0,0,0.87)", fontSize: wp(4), paddingBottom: hp(1.5)}}>{label} </Text>
        <Text style={{ textAlign: "right", color: "rgba(0,0,0,0.54)", fontSize: wp(3.5), paddingBottom: hp(1.5)}}>{text}</Text>
      </View>
    );
  }
}
