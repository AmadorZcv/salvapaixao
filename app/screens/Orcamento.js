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

class Orcamento extends PureComponent {
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
    console.log("Is salvando", this.props.salvando);
    const { navigation } = this.props;
    const item = navigation.getParam("item", "NO-ID");
    const { detalhes } = item;
    const criacao = moment(detalhes.criacao).format("DD/MM/YYYY");
    const validade = moment(detalhes.validade).format("DD/MM/YYYY");
    const id = `#${moment(detalhes.validade).format("YYYYMMDD")}00101501`;
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
          {id}
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
            text={`${detalhes.condicao} dias em ${detalhes.parcela} vez(es)`}
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
  return { salvando };
};
export default connect(mapStateToProps)(Orcamento);
