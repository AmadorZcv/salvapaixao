import React, { PureComponent } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import TextInputMask from "react-native-text-input-mask";
import moment from "moment";
import { connect } from "react-redux";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Button, CheckBox } from "react-native-elements";
import { add_orcamento } from "../redux/orcamentos/actions";

class SalvarOrcamento extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      criacao: moment(),
      validade: moment().add(1, 'day'),
      condicao: "",
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
    Alert.alert("Orçamento salvo com sucesso");
    this.props.navigation.popToTop();
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={{ marginTop: 30, paddingBottom: 17, color: 'rgba(0,0,0,0.87)', fontSize: 16 }}>Informações da proposta </Text>
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
            refInput={ref => { this.criacao = ref }}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              this.validade.focus()
            }}
            returnKeyType={"next"}
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
            refInput={ref => { this.validade = ref }}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              this.condicao.focus()
            }}
            returnKeyType={"next"}
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
            mask={"[990]"}
            placeholder={"em dias"}
            style={styles.dateInputStyle}
            refInput={ref => { this.condicao = ref }}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              this.nome.focus()
            }}
            returnKeyType={"next"}
          />
        </View>
        <Text style={{ marginTop: 20, marginBottom: 7, color: 'rgba(0,0,0,0.87)', fontSize: 16 }}>Empresa e Contato </Text>
        <Text style={styles.labelStyle}>Nome da Conta</Text>
        <TextInputMask
          autoCapitalize="characters"
          keyboardType="default"
          style={styles.inputStyle}
          placeholder={"Digite o nome da empresa"}
          onChangeText={(formatted, extracted) => {
            this.setState({
              nome: formatted
            });
          }}
          refInput={ref => { this.nome = ref }}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            this.cpf.focus()
          }}
          returnKeyType={"next"}
        />
        <Text style={styles.labelStyle}>CNPJ/CPF</Text>
        <TextInputMask
          keyboardType="numeric"
          mask={"[00].[000].[000]/[0000]-[00]"}
          //mask={"[000].[000].[000]-[00]"}
          placeholder={"xx.xxx.xxx/xxxx-xx ou xxx.xxx.xxx-xx"}
          style={styles.inputStyle}
          onChangeText={(formatted, extracted) => {
            this.setState({
              cpf: formatted
            });
          }}
          refInput={ref => { this.cpf = ref }}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            this.ramo.focus()
          }}
          returnKeyType={"next"}
        />
        <Text style={styles.labelStyle}>Ramo/Atividade</Text>
        <TextInputMask
          autoCapitalize="words"
          keyboardType="default"
          style={styles.inputStyle}
          placeholder={"Digite a que se aplica a empresa"}
          onChangeText={(formatted, extracted) => {
            this.setState({
              ramo: formatted
            });
          }}
          refInput={ref => { this.ramo = ref }}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            this.nomeCompleto.focus()
          }}
          returnKeyType={"next"}
        />
        <Text style={styles.labelStyle}>Nome completo</Text>
        <TextInputMask
          autoCapitalize="characters"
          keyboardType="default"
          style={styles.inputStyle}
          placeholder={"Digite o nome da pessoa"}
          onChangeText={(formatted, extracted) => {
            this.setState({
              nomeCompleto: formatted
            });
          }}
          refInput={ref => { this.nomeCompleto = ref }}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            this.telefone.focus()
          }}
          returnKeyType={"next"}
        />
        <Text style={styles.labelStyle}>Telefone</Text>
        <TextInputMask
          style={styles.inputStyle}
          keyboardType="phone-pad"
          mask={"([00]) [99990]-[0000]"}
          //mask={"([00]) [0000]-[0000]"}
          placeholder={"Digite o telefone"}
          onChangeText={(formatted, extracted) => {
            this.setState({
              telefone: extracted
            });
          }}
          refInput={ref => { this.telefone = ref }}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            this.email.focus()
          }}
          returnKeyType={"next"}
        />
        <Text style={styles.labelStyle}>E-mail</Text>
        <TextInputMask
          keyboardType="email-address"
          style={styles.inputStyle}
          placeholder={"Digite o email para contato"}
          onChangeText={(formatted, extracted) => {
            this.setState({
              email: formatted
            });
          }}
          refInput={ref => { this.email = ref }}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            this.uf.focus()
          }}
          returnKeyType={"next"}
        />
        <View style={styles.ufContainer}>
          <View>
            <Text>UF</Text>
            <TextInputMask
              autoCapitalize="characters"
              keyboardType="default"
              style={{ ...styles.inputStyle, width: "90%" }}
              placeholder={"Digite o estado             "}
              mask={"[AA]"}
              onChangeText={(formatted, extracted) => {
                this.setState({
                  uf: formatted
                });
              }}
              refInput={ref => { this.uf = ref }}
              blurOnSubmit={false}
              onSubmitEditing={() => {
                this.cidade.focus()
              }}
              returnKeyType={"next"}
            />
          </View>
          <View>
            <Text>Cidade</Text>
            <TextInputMask
              autoCapitalize="characters"
              keyboardType="default"
              style={{ ...styles.inputStyle, width: "100%" }}
              placeholder={"Digite a cidade             "}
              onChangeText={(formatted, extracted) => {
                this.setState({
                  cidade: formatted
                });
              }}
              refInput={ref => { this.cidade = ref }}
              blurOnSubmit={true}
              returnKeyType={"done"}
            />
          </View>
        </View>
        <CheckBox
          title={"Exportar orçamento para PDF"}
          containerStyle={{ marginTop: 20, backgroundColor: "#fafafa" }}
        />
        <Button
          title={"Salvar Orçamento"}
          containerStyle={{
            marginBottom: hp(2.5),
            marginTop: hp(1.5),
            marginHorizontal: hp(5)
          }}
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
    width: 150,
    fontSize: 14
  },
  dateInputStyle: {
    borderWidth: StyleSheet.hairlineWidth,
    flex: 1,
    borderRadius: 10,
    height: 30,
    paddingVertical: 0,
    textAlign: "center"
  },
  inputStyle: {
    marginTop: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    height: 30,
    paddingVertical: 0,
    width: "100%"
  },
  labelStyle: {
    marginTop: 10,
    marginBottom: 4,
    fontSize: 14
  },
  ufContainer: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 5,
    width: "100%"
  }
});
