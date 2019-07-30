import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import moment from "moment";
import { Button } from "react-native-elements";
import { setCart } from "../redux/cart/actions";
import { connect } from "react-redux";
import LabelWithTextBelow from "../components/LabelWithTextBelow";
import LabelWithTextRight from "../components/LabelWithTextRight";
import { Color } from "../styles";

class Orcamento extends PureComponent {
  render() {
    const { navigation } = this.props;
    const item = navigation.getParam("item", "NO-ID");
    const { detalhes } = item;
    const criacao = moment(detalhes.criacao).format("DD/MM/YYYY");
    const validade = moment(detalhes.validade).format("DD/MM/YYYY");
    const id = `#${moment(detalhes.validade).format("YYYYMMDD")}00101501`;
    return (
      <View
        style={{ paddingHorizontal: 10, backgroundColor: Color.background }}
      >
        <Text style={{ textAlign: "right" }}>{id}</Text>
        <View style={{ marginHorizontal: 30 }}>
          <Text> Informações da proposta </Text>
          <LabelWithTextRight label={"Data de criação"} text={criacao} />
          <LabelWithTextRight label={"Data de validade"} text={validade} />
          <LabelWithTextRight
            label={"Condição de pagamento"}
            text={`${detalhes.condicao} dias`}
          />
          <Text>Empresa e contato</Text>
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
            title={"Informações da Venda"}
            onPress={() => navigation.navigate("InformacaoOrcamento", { item })}
          />
          <Button title={"Exportar para PDF"} />
        </View>
      </View>
    );
  }
}
export default connect()(Orcamento);
