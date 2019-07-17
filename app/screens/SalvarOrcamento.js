import React, { PureComponent } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import TextInputMask from "react-native-text-input-mask";
import moment from "moment";
import { Button, CheckBox } from "react-native-elements";

export default class SalvarOrcamento extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      criacao: moment(),
      validade: moment(),
      condicao: "30"
    };
  }

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
        />
        <Text style={styles.labelStyle}>CNPJ/CPF</Text>
        <TextInputMask
          keyboardType="default"
          style={styles.inputStyle}
          placeholder={"Digite o nome da empresa"}
        />
        <Text style={styles.labelStyle}>Ramo/Atividade</Text>
        <TextInputMask
          keyboardType="default"
          style={styles.inputStyle}
          placeholder={"Digite a que se aplica a empresa"}
        />
        <Text style={styles.labelStyle}>Nome completo</Text>
        <TextInputMask
          keyboardType="default"
          style={styles.inputStyle}
          placeholder={"Digite o nome da pessoa"}
        />
        <Text style={styles.labelStyle}>Telefone</Text>
        <TextInputMask
          keyboardType="default"
          style={styles.inputStyle}
          keyboardType="numeric"
          mask="([00]) [00000]-[0000]"
          placeholder={"Digite o telefone"}
        />
        <Text style={styles.labelStyle}>E-mail</Text>
        <TextInputMask
          keyboardType="default"
          style={styles.inputStyle}
          placeholder={"Digite o email para contato"}
        />
        <View style={styles.ufContainer}>
          <View>
            <Text>UF</Text>
            <TextInputMask
              keyboardType="default"
              style={{ ...styles.inputStyle, width: "90%" }}
              placeholder={"Digite o estado             "}
            />
          </View>
          <View>
            <Text>Cidade</Text>
            <TextInputMask
              keyboardType="default"
              style={{ ...styles.inputStyle, width: "100%" }}
              placeholder={"Digite a cidade             "}
            />
          </View>
        </View>
        <CheckBox
          title={"Salvar orçamento"}
          containerStyle={{ backgroundColor: "#fff" }}
        />
        <Button
          title={"Salvar Orçamento"}
          containerStyle={{ marginBottom: 30, marginTop: 10 }}
        />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: { paddingHorizontal: 30 },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center"
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
