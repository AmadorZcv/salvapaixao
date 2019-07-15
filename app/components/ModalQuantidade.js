import React, { PureComponent } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { Overlay, Image } from "react-native-elements";
import { textValueFinal, contadorText } from "../styles/Text";

export default class ModalQuantidade extends PureComponent {
  render() {
    const {
      total,
      onMinus,
      onPlus,
      precoFinal,
      onCloseModal,
      isVisible
    } = this.props;
    return (
      <Overlay
        isVisible={isVisible}
        onBackdropPress={onCloseModal}
        overlayStyle={{
          height: 118,
          width: 209,
          borderRadius: 5,
          backgroundColor: "#FAFAFA",
          padding: 20
        }}
      >
        <View>
          <Text style={{ ...textValueFinal, fontSize: 26 }}>{precoFinal}</Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <TouchableOpacity onPress={onMinus}>
              <Image
                source={require("../img/icons/minus.png")}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>

            <TextInput style={{ ...contadorText, fontSize: 28, flex: 1 }}>
              {total}
            </TextInput>

            <TouchableOpacity onPress={onPlus}>
              <Image
                source={require("../img/icons/plus.png")}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
    );
  }
}
