import React, { PureComponent } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert
} from "react-native";
import { Icon } from "react-native-elements";
import Swipeout from "react-native-swipeout";
import CarrinhoImage from "./CarrinhoImage";
import CarrinhoText from "./CarrinhoText";
import { integerToReal } from "../config/formatUtils";
import { Color } from "../styles";
import Counter from "./Counter";
import ModalQuantidade from "./ModalQuantidade";

export default class CarrinhoItem extends PureComponent {
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
    const { item, index, total, onRemove } = this.props;
    const backgroundColor = index % 2 === 0 ? Color.lightBackground : "white";

    return (
      <Swipeout
        autoClose={true}
        buttonWidth={49}
        left={[
          {
            text: "Excluir",
            backgroundColor: "red",
            underlayColor: "rgba(0, 0, 0, 1, 0.6)",
            onPress: () => {
              Alert.alert(
                "Excluir",
                "Você tem certeza que deseja excluir?",
                [
                  {
                    text: "Cancelar",
                    onPress: () => console.log("Cancelar Pressionado"),
                    style: "cancel"
                  },
                  { text: "Excluir", onPress: () => onRemove() }
                ],
                { cancelable: false }
              );
            },
            component: (
              <Text
                style={{
                  color: "rgba(255,255,255,0.87)",
                  backgroundColor: "#FE3A3A",
                  fontSize: 13,
                  width: 49,
                  textAlign: "center",
                  textAlignVertical: "center",
                  alignSelf: "center",
                  flex: 1
                }}
              >
                Excluir
              </Text>
            )
          }
        ]}
      >
        <View
          style={{
            backgroundColor,
            flexDirection: "row",
            paddingVertical: 5
          }}
        >
          <TouchableOpacity
            style={{
              width: 259,
              flexDirection: "row",
              paddingVertical: 8,
              alignItems: "center",
              paddingLeft: 0,
              borderRightWidth: StyleSheet.hairlineWidth,
              borderColor: Color.divbarColor
            }}
            onPress={this.props.onNavigate}
          >
            <CarrinhoImage id={item.id} />
            <CarrinhoText id={item.id} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: 101, paddingVertical: 8, alignItems: "center" }}
            onPress={this.openModal}
          >
            <Text>R$ {integerToReal(total)}</Text>
            <Counter total={item.qtd} />
          </TouchableOpacity>
        </View>
        <ModalQuantidade
          total={item.qtd}
          onPlus={this.props.onPlus}
          onMinus={this.props.onMinus}
          onChange={this.props.onChange}
          precoFinal={integerToReal(total)}
          isVisible={this.state.modal}
          onCloseModal={this.closeModal}
        />
      </Swipeout>
    );
  }
}
