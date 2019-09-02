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
import {
  isSavingOrcamento,
  generateFromId,
  generateNoId
} from "../redux/orcamentos/actions";
import { requestDownloadPermission } from "../config/fileSystem";
import { setCart } from "../redux/cart/actions";
import {
  calculateTotalComIpi,
  calculateTotalNoIpi
} from "../redux/cart/reducer";
import { integerToReal } from "../config/formatUtils";

class Orcamento extends PureComponent {
  componentDidMount() {
    // console.log('Did Mount')
    this.props.navigation.setParams({
      loadPress: this.loadPress
    });
  }
  loadPress = () => {
    const { navigation } = this.props;
    const item = navigation.getParam("item", "NO-ID");
    this.props.dispatch(setCart(item.cart));
    this.props.navigation.popToTop();
    this.props.navigation.navigate("Home");
  };
  exportToPdf = () => {
    const { navigation, products } = this.props;
    const item = navigation.getParam("item", "NO-ID");
    if (item.id > 0) {
      this.props.dispatch(generateFromId(item.id));
    } else {
      this.props.dispatch(generateNoId(item));
    }
  };
  render() {
    const { navigation, products } = this.props;
    const item = navigation.getParam("item", "NO-ID");
    const { detalhes, cart } = item;
    const criacao = moment(detalhes.criacao).format("DD/MM/YYYY");
    const validade = moment(detalhes.validade).format("DD/MM/YYYY");
    const totalComIpi = calculateTotalComIpi(cart, products);
    const subTotal = calculateTotalNoIpi(cart, products);
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
            text={`${detalhes.condicao} dias`}
          />
          <LabelWithTextRight
            label={"Parcelas"}
            text={`${detalhes.parcela} vez(es)`}
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
          <LabelWithTextBelow label={"Nome da conta"} text={detalhes.nome} />
          <LabelWithTextBelow label={"CPF/CNPJ"} text={detalhes.cpf} />
          <LabelWithTextBelow label={"Ramo/Atividade"} text={detalhes.ramo} />
          <LabelWithTextBelow label={"UF"} text={detalhes.uf} />
          <LabelWithTextBelow label={"Cidade"} text={detalhes.cidade} />
          <LabelWithTextBelow
            label={"Nome Completo"}
            text={detalhes.nomeCompleto}
          />
          <LabelWithTextBelow label={"Telefone"} text={detalhes.telefone} />
          <LabelWithTextBelow label={"E-mail"} text={detalhes.email} />
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
  const { products } = state.products;
  return { salvando, products };
};
export default connect(mapStateToProps)(Orcamento);
