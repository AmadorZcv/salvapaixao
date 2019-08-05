import React, { PureComponent } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { Overlay, Image, normalize } from "react-native-elements";
import { textValueFinal, contadorText } from "../styles/Text";
import { integerToReal } from "../config/formatUtils";

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
    return nextProps.isVisible === prevState.isVisible
      ? {}
      : { isVisible: nextProps.isVisible, text };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.isVisible !== this.state.isVisible && this.state.isVisible) {
      setTimeout(() => {}, 1);
    }
  }
  onPlus = () => {
    const value = parseInt(this.state.text) + 1;
    const text = value.toString();
    this.setState({ text });
  };
  onMinus = () => {
    const value = parseInt(this.state.text) - 1;
    const text = value.toString();
    if (value > 0) {
      this.setState({ text });
    } else {
      this.setState({ text: "0" });
    }
  };
  onChangeText = text => {
    const { onChange } = this.props;
    const cleanText = text.replace(/[^\d-]/g, "");
    this.setState({ text: cleanText });
  };
  onBackdropPress = () => {
    const { onCloseModal, onChange } = this.props;
    onChange(this.state.text);
    onCloseModal();
  };

  render() {
    const { isVisible, preco } = this.props;
    const { onPlus, onMinus } = this;
    const qtdNumber = parseInt(this.state.text);
    const qtd = isNaN(qtdNumber) ? 0 : qtdNumber;
    const precoTotal = preco !== undefined ? preco * qtd : 0;

    return (
      <Overlay
        isVisible={isVisible}
        onBackdropPress={this.onBackdropPress}
        overlayStyle={{
          height: normalize(120),
          width: "60%",
          borderRadius: 5,
          backgroundColor: "#FAFAFA",
          padding: 20
        }}
      >
        <View>
          <Text style={{ ...textValueFinal, fontSize: normalize(24) }}>
            R$ {integerToReal(precoTotal)}
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
                style={{ width: normalize(35), height: normalize(35) }}
              />
            </TouchableOpacity>

            <TextInput
              style={{ ...contadorText, fontSize: normalize(26), flex: 1 }}
              ref={ref => (this.ref = ref)}
              keyboardType={"numeric"}
              onChangeText={this.onChangeText}
              value={this.state.text}
              maxLength={3}
              selectTextOnFocus
            />

            <TouchableOpacity onPress={onPlus}>
              <Image
                source={require("../img/icons/plus.png")}
                style={{ width: normalize(35), height: normalize(35) }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
    );
  }
}
