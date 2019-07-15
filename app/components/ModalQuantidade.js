import React, { PureComponent } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { Overlay, Image } from "react-native-elements";
import { textValueFinal, contadorText } from "../styles/Text";

export default class ModalQuantidade extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      isVisible: false
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    return nextProps.isVisible === prevState.isVisible
      ? {}
      : { text: nextProps.total.toString(), isVisible: nextProps.isVisible };
  }

  onChangeText = text => {
    const { onChange } = this.props;
    const cleanText = text.replace(/[^\d.-]/g, "");
    this.setState({ text: cleanText });
    if (cleanText !== "") {
      //Se for uma string de numeros e não vazia
      if (cleanText.match(/^\d+$/)) {
        onChange(cleanText);
      }
    }
  };
  onBackdropPress = () => {
    const { onCloseModal, onChange } = this.props;
    console.log("My text is", this.state.text);
    onChange(this.state.text);
    onCloseModal();
  };

  render() {
    const {
      total,
      onMinus,
      onPlus,
      precoFinal,

      isVisible
    } = this.props;
    return (
      <Overlay
        isVisible={isVisible}
        onBackdropPress={this.onBackdropPress}
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

            <TextInput
              style={{ ...contadorText, fontSize: 28, flex: 1 }}
              autoFocus={true}
              keyboardType={"numeric"}
              onChangeText={this.onChangeText}
              value={this.state.text}
            />

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
