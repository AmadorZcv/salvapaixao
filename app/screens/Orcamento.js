import React, { PureComponent } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import moment from "moment";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import LabelWithTextBelow from "../components/LabelWithTextBelow";
import LabelWithTextRight from "../components/LabelWithTextRight";
import { Color } from "../styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { generateFromId, generateNoId } from "../redux/orcamentos/actions";

import { setCart, cartFromProdutos } from "../redux/cart/actions";

import { integerToReal } from "../config/formatUtils";
import { selectProducts } from "../redux/products/selectors";

class Orcamento extends PureComponent {
  componentDidMount() {
    this.props.navigation.setParams({
      loadPress: this.loadPress
    });
  }
  loadPress = () => {
    const { navigation } = this.props;
    const item = navigation.getParam("item", "NO-ID");
    const { produtos } = item;
    const cart = cartFromProdutos(produtos);

    this.props.dispatch(setCart(cart));
    this.props.navigation.popToTop();
    this.props.navigation.navigate("Home");
  };
  exportToPdf = () => {
    const { navigation } = this.props;
    const item = navigation.getParam("item", "NO-ID");
    if (item.id) {
      this.props.dispatch(generateFromId(item.id));
    } else {
      this.props.dispatch(generateNoId(item));
    }
  };
  calculateTotalComIpi = () => {
    const { navigation } = this.props;
    const item = navigation.getParam("item", "NO-ID");
    const { produtos } = item;
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.total;
    return produtos.reduce(reducer, 0);
  };
  calculateTotalNoIpi = () => {
    const { navigation } = this.props;
    const item = navigation.getParam("item", "NO-ID");
    const { produtos } = item;
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.preco;
    return produtos.reduce(reducer, 0);
  };
  render() {
    const { navigation } = this.props;
    const item = navigation.getParam("item", "NO-ID");
    const criacao = item.criacao;
    const validade = item.validade;
    const totalComIpi = this.calculateTotalComIpi();
    const subTotal = this.calculateTotalNoIpi();
    return (
      <ScrollView
        style={{
          paddingHorizontal: wp(7.5),
          backgroundColor: Color.background
        }}
      >
        <Text
          style={{
            textAlign: "right",
            fontSize: wp(4.5),
            fontWeight: "bold",
            paddingTop: hp(2)
          }}
        >
          {item.title}
        </Text>
        <View style={{ marginHorizontal: wp(7.5) }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: wp(4.5),
              paddingTop: hp(3.4),
              paddingBottom: hp(3),
              color: Color.primaryText,
              backgroundColor: Color.background
            }}
          >
            Informações da proposta
          </Text>
          <LabelWithTextRight label={"Data de criação"} text={criacao} />
          <LabelWithTextRight label={"Data de validade"} text={validade} />
          <LabelWithTextRight
            label={"Condição de pagamento"}
            text={`${item.condicao} dias`}
          />
          <LabelWithTextRight
            label={"Parcelas"}
            text={`${item.parcela} vez(es)`}
          />
          <LabelWithTextRight
            label={"Subtotal"}
            text={`R$ ${integerToReal(subTotal)}`}
          />
          <LabelWithTextRight
            label={"Total"}
            text={`R$ ${integerToReal(totalComIpi)}`}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: wp(4.5),
              paddingTop: hp(3.4),
              paddingBottom: hp(3),
              color: Color.primaryText,
              backgroundColor: Color.background
            }}
          >
            Empresa e contato
          </Text>
          <LabelWithTextBelow label={"Nome da conta"} text={item.nome} />
          <LabelWithTextBelow label={"CPF/CNPJ"} text={item.cpf} />
          <LabelWithTextBelow label={"Ramo/Atividade"} text={item.ramo} />
          <LabelWithTextBelow label={"UF"} text={item.uf} />
          <LabelWithTextBelow label={"Cidade"} text={item.cidade} />
          <LabelWithTextBelow
            label={"Nome Completo"}
            text={item.nomeCompleto}
          />
          <LabelWithTextBelow label={"Telefone"} text={item.telefone} />
          <LabelWithTextBelow label={"E-mail"} text={item.email} />
          <ActivityIndicator
            animating={this.props.salvando}
            size={"large"}
            color={"blue"}
          />
          <Button
            containerStyle={{
              marginTop: hp(4.5),
              marginHorizontal: hp(5)
            }}
            title={"Informações da Venda"}
            onPress={() => navigation.navigate("InformacaoOrcamento", { item })}
          />

          <Button
            containerStyle={{
              marginBottom: hp(2.5),
              marginTop: hp(1.5),
              marginHorizontal: hp(5)
            }}
            onPress={() => this.exportToPdf()}
            title={"Exportar para PDF"}
            loading={this.props.salvando}
          />
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  const { salvando } = state.orcamentos;
  const products = selectProducts(state);
  return { salvando, products };
};
export default connect(mapStateToProps)(Orcamento);
