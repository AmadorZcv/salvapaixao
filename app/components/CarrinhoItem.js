import React, { PureComponent } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert
} from "react-native";
import { normalize } from "react-native-elements";
import Swipeout from "react-native-swipeout";
import CarrinhoImage from "./CarrinhoImage";
import CarrinhoText from "./CarrinhoText";
import { integerToReal } from "../config/formatUtils";
import { Color } from "../styles";
import Counter from "./Counter";
import ModalQuantidade from "./ModalQuantidade";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
    const { item, index, total, onRemove, preco } = this.props;
    const backgroundColor = index % 2 === 0 ? Color.lightBackground : "white";

    return (
      <Swipeout
        autoClose={true}
        buttonWidth={wp(13.61)}
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
                  fontSize: normalize(13),
                  width: wp(13.61),
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
          }}
        >
          <TouchableOpacity
            style={{
              width: wp(72),
              flexDirection: "row",
              paddingVertical: hp(1.25),
              alignItems: "center",
              borderRightWidth: StyleSheet.hairlineWidth,
              borderColor: Color.divbarColor
            }}
            onPress={this.props.onNavigate}
          >
            <CarrinhoImage id={item.id} />
            <CarrinhoText id={item.id} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: wp(28), paddingVertical: hp(1.25), alignItems: "center" }}
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
          preco={preco}
          precoFinal={integerToReal(total)}
          isVisible={this.state.modal}
          onCloseModal={this.closeModal}
        />
      </Swipeout>
    );
  }
}
