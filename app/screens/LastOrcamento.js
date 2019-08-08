import React, { PureComponent } from "react";
import { View, Text, ScrollView } from "react-native";
import moment from "moment";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import LabelWithTextBelow from "../components/LabelWithTextBelow";
import LabelWithTextRight from "../components/LabelWithTextRight";
import { Color } from "../styles";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class LastOrcamento extends PureComponent {
  render() {
    const { lastOrcamento } = this.props;
    if (lastOrcamento === null) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Voce não tem orçamentos salvos</Text>
        </View>
      );
    }
    const item = lastOrcamento;
    const { detalhes } = item;
    const criacao = moment(detalhes.criacao).format("DD/MM/YYYY");
    const validade = moment(detalhes.validade).format("DD/MM/YYYY");
    const id = `#${moment(detalhes.criacao).format("YYYYMMDD")}00101501`;
    return (
      <ScrollView
        style={{ paddingHorizontal: hp(2.77), backgroundColor: Color.background }}
      >
        <Text style={{ textAlign: "right", fontSize: wp(4.5), fontWeight: "bold", paddingTop: hp(2) }}>
          {id}
        </Text>
        <View style={{ marginHorizontal: 30 }}>
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
            title={"Exportar para PDF"}
          />
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  const { lastOrcamento } = state.orcamentos;
  console.log("here?");
  return { lastOrcamento };
};
export default connect(mapStateToProps)(LastOrcamento);
