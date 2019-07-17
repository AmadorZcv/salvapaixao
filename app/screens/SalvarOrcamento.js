import React, { PureComponent } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import TextInputMask from "react-native-text-input-mask";
import moment from "moment";
import { connect } from "react-redux";

import { Button, CheckBox } from "react-native-elements";
import { add_orcamento } from "../redux/orcamentos/actions";

class SalvarOrcamento extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      criacao: moment(),
      validade: moment(),
      condicao: "30",
      nome: "",
      cpf: "",
      ramo: "",
      nomeCompleto: "",
      telefone: "",
      email: "",
      uf: "",
      cidade: ""
    };
  }

  salvarOrcamento = () => {
    const { dispatch, cart } = this.props;
    const {
      cidade,
      condicao,
      cpf,
      criacao,
      email,
      nome,
      nomeCompleto,
      ramo,
      telefone,
      uf,
      validade
    } = this.state;
    console.log("Hello?", {
      cidade,
      condicao,
      cpf,
      criacao,
      email,
      nome,
      nomeCompleto,
      ramo,
      telefone,
      uf,
      validade
    });
    dispatch(
      add_orcamento({
        cart,
        detalhes: {
          cidade,
          condicao,
          cpf,
          criacao,
          email,
          nome,
          nomeCompleto,
          ramo,
          telefone,
          uf,
          validade
        }
      })
    );
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={{ marginTop: 30 }}>Informações da proposta </Text>
        <View style={styles.dateContainer}>
          <Text style={styles.dateLabel}>Data de criação</Text>
          <TextInputMask
            value={moment(this.state.criacao, "YYYY-MM-DD").format("DDMMYYYY")}
            onChangeText={(formatted, extracted) => {
              this.setState({
                criacao: moment(extracted, "DDMMYYYY", true)
              });
            }}
            autoFocus={true}
            keyboardType="numeric"
            mask={"[00]/[00]/[0000]"}
            style={styles.dateInputStyle}
            placeholder={`${this.state.criacao.format("DD/MM/YYYY")}`}
          />
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateLabel}>Data de Validade</Text>
          <TextInputMask
            value={moment(this.state.validade, "YYYY-MM-DD").format("DDMMYYYY")}
            onChangeText={(formatted, extracted) => {
              this.setState({
                validade: moment(extracted, "DDMMYYYY", true)
              });
            }}
            keyboardType="numeric"
            mask={"[00]/[00]/[0000]"}
            style={styles.dateInputStyle}
            placeholder={`${this.state.validade.format("DD/MM/YYYY")}`}
          />
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateLabel}>Condição de pagamento</Text>
          <TextInputMask
            value={this.state.condicao}
            onChangeText={(formatted, extracted) => {
              this.setState({
                condicao: extracted
              });
            }}
            keyboardType="numeric"
            mask={"[0000]"}
            style={styles.dateInputStyle}
          />
        </View>
        <Text>Empresa e Contato </Text>
        <Text style={styles.labelStyle}>Nome da Conta</Text>
        <TextInputMask
          keyboardType="default"
          style={styles.inputStyle}
          placeholder={"Digite o nome da empresa"}
          onChangeText={(formatted, extracted) => {
            this.setState({
              nome: formatted
            });
          }}
        />
        <Text style={styles.labelStyle}>CNPJ/CPF</Text>
        <TextInputMask
          keyboardType="default"
          style={styles.inputStyle}
          placeholder={"Digite o nome da empresa"}
          onChangeText={(formatted, extracted) => {
            this.setState({
              cpf: formatted
            });
          }}
        />
        <Text style={styles.labelStyle}>Ramo/Atividade</Text>
        <TextInputMask
          keyboardType="default"
          style={styles.inputStyle}
          placeholder={"Digite a que se aplica a empresa"}
          onChangeText={(formatted, extracted) => {
            this.setState({
              ramo: formatted
            });
          }}
        />
        <Text style={styles.labelStyle}>Nome completo</Text>
        <TextInputMask
          keyboardType="default"
          style={styles.inputStyle}
          placeholder={"Digite o nome da pessoa"}
          onChangeText={(formatted, extracted) => {
            this.setState({
              nomeCompleto: formatted
            });
          }}
        />
        <Text style={styles.labelStyle}>Telefone</Text>
        <TextInputMask
          keyboardType="default"
          style={styles.inputStyle}
          keyboardType="numeric"
          mask="([00]) [00000]-[0000]"
          placeholder={"Digite o telefone"}
          onChangeText={(formatted, extracted) => {
            this.setState({
              telefone: extracted
            });
          }}
        />
        <Text style={styles.labelStyle}>E-mail</Text>
        <TextInputMask
          keyboardType="default"
          style={styles.inputStyle}
          placeholder={"Digite o email para contato"}
          onChangeText={(formatted, extracted) => {
            this.setState({
              email: formatted
            });
          }}
        />
        <View style={styles.ufContainer}>
          <View>
            <Text>UF</Text>
            <TextInputMask
              keyboardType="default"
              style={{ ...styles.inputStyle, width: "90%" }}
              placeholder={"Digite o estado             "}
              onChangeText={(formatted, extracted) => {
                this.setState({
                  uf: formatted
                });
              }}
            />
          </View>
          <View>
            <Text>Cidade</Text>
            <TextInputMask
              keyboardType="default"
              style={{ ...styles.inputStyle, width: "100%" }}
              placeholder={"Digite a cidade             "}
              onChangeText={(formatted, extracted) => {
                this.setState({
                  cidade: formatted
                });
              }}
            />
          </View>
        </View>
        <CheckBox
          title={"Exportar orçamento para PDF"}
          containerStyle={{ backgroundColor: "#fff" }}
        />
        <Button
          title={"Salvar Orçamento"}
          containerStyle={{ marginBottom: 30, marginTop: 10 }}
          onPress={this.salvarOrcamento}
        />
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  const { cart } = state.cart;
  return { cart };
};
export default connect(mapStateToProps)(SalvarOrcamento);
const styles = StyleSheet.create({
  container: { paddingHorizontal: 30 },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5
  },
  dateLabel: {
    width: 150
  },
  dateInputStyle: {
    borderWidth: StyleSheet.hairlineWidth,
    flex: 1,
    borderRadius: 10,
    height: 30,
    paddingVertical: 0
  },
  inputStyle: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    height: 30,
    paddingVertical: 0,
    width: "100%"
  },
  labelStyle: {
    marginVertical: 5
  },
  ufContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 5,
    width: "100%"
  }
});
