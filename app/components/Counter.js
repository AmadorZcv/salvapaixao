import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Image, Overlay } from "react-native-elements";
import { contadorText, textValueFinal } from "../styles/Text";
import ModalQuantidade from "./ModalQuantidade";

export default class Counter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    };
  }
  openModal = () => {
    this.setState({ modal: true });
  };
  closeModal = () => {
    this.setState({ modal: false });
  };
  render() {
    const { total, onMinus, onPlus, precoFinal, onChange } = this.props;

    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: 5,
          justifyContent: "center"
        }}
      >
        <TouchableOpacity onPress={onMinus}>
          <Image
            source={require("../img/icons/minus.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.openModal}>
          <Text style={contadorText}> {total} </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPlus}>
          <Image
            source={require("../img/icons/plus.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <ModalQuantidade
          isVisible={this.state.modal}
          onCloseModal={this.closeModal}
          precoFinal={precoFinal}
          total={total}
          onMinus={onMinus}
          onPlus={onPlus}
          onChange={onChange}
        />
      </View>
    );
  }
}
