import React, { PureComponent } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { Overlay, Image, normalize } from "react-native-elements";
import { textValueFinal, contadorText } from "../styles/Text";

export default class ModalQuantidade extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      text: "0",
      isVisible: false
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    let text = nextProps.total.toString();
    if (prevState.text === "" && nextProps.total.toString() === "0") {
      text = "";
    }
    return nextProps.isVisible === prevState.isVisible
      ? { text }
      : { text, isVisible: nextProps.isVisible };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.isVisible !== this.state.isVisible && this.state.isVisible) {
      setTimeout(() => {
      }, 1);
    }
  }
  onChangeText = text => {
    const { onChange } = this.props;
    const cleanText = text.replace(/[^\d-]/g, "");
    this.setState({ text: cleanText }, () => {
      onChange(cleanText);
    });
  };
  onBackdropPress = () => {
    const { onCloseModal, onChange } = this.props;
    onChange(this.state.text);
    onCloseModal();
  };

  render() {
    const { onMinus, onPlus, precoFinal, isVisible } = this.props;
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
          <Text style={{ ...textValueFinal, fontSize: normalize(26) }}>
            R$ {precoFinal}
          </Text>
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
              style={{ ...contadorText, fontSize: normalize(28), flex: 1 }}
              ref={ref => (this.ref = ref)}
              keyboardType={"numeric"}
              onChangeText={this.onChangeText}
              value={this.state.text}
              maxLength={3}
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
