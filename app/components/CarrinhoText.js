import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import { Color } from "../styles";
import { productName, productAmount } from "../config/nameUtils";
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default class CarrinhoText extends PureComponent {
  render() {
    const { id } = this.props;
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1
        }}
      >
        <Text
          style={{
            fontSize: wp(4.5),
            color: Color.primaryText
          }}
        >
          {productName(id)}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: wp(2.77),
            color: Color.secondaryText
          }}
        >
          {productAmount(id)}
        </Text>
      </View>
    );
  }
}
