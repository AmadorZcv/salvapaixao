import React, { PureComponent } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  Picker
} from "react-native";
import DatePicker from "react-native-datepicker";
import TextInputMask from "react-native-text-input-mask";
import moment from "moment";
import { TextInputMask as TextInputMaskCpf } from "react-native-masked-text";
import { connect } from "react-redux";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import { Button, CheckBox } from "react-native-elements";
import {
  add_orcamento,
  isSavingOrcamento,
  generatePDF,
  decrease_id
} from "../redux/orcamentos/actions";
import { requestDownloadPermission } from "../config/fileSystem";
import { cleanCart } from "../redux/cart/actions";

class SalvarOrcamento extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      criacao: moment(),
      validade: moment().add(1, "day"),
      condicao: "",
      parcela: "1",
      nome: "",
      cpf: "",
      ramo: "",
      nomeCompleto: "",
      telefone: "",
      email: "",
      uf: "",
      cidade: "",
      pdf: false
    };
  }
  CheckTextInput = () => {
    if (this.state.condicao != "") {
      if (this.state.nome != "") {
        if (this.state.cpf.length == 14 || this.state.cpf.length == 18) {
          if (this.state.ramo != "") {
            if (this.state.nomeCompleto != "") {
              console.log(this.state.telefone.length);
              if (
                this.state.telefone.length == 14 ||
                this.state.telefone.length == 15
              ) {
                if (this.state.email != "") {
                  console.log(this.state.uf.length);
                  if (this.state.uf.length == 2) {
                    if (this.state.cidade != "") {
                      this.salvarOrcamento();
                    } else {
                      this.cidade.focus();
                      this.myScroll.scrollTo({ x: 0, y: 650, animated: true });
                    }
                  } else {
                    this.uf.focus();
                    this.myScroll.scrollTo({ x: 0, y: 650, animated: true });
                  }
                } else {
                  this.email.focus();
                  this.myScroll.scrollTo({ x: 0, y: 500, animated: true });
                }
              } else {
                this.telefone.focus();
                this.myScroll.scrollTo({ x: 0, y: 400, animated: true });
              }
            } else {
              this.nomeCompleto.focus();
              this.myScroll.scrollTo({ x: 0, y: 350, animated: true });
            }
          } else {
            this.ramo.focus();
            this.myScroll.scrollTo({ x: 0, y: 250, animated: true });
          }
        } else {
          this.cpf.getElement().focus();
          this.myScroll.scrollTo({ x: 0, y: 200, animated: true });
        }
      } else {
        this.nome.focus();
        this.myScroll.scrollTo({ x: 0, y: 150, animated: true });
      }
    } else {
      this.condicao.focus();
      this.myScroll.scrollTo({ x: 0, y: 0, animated: true });
    }
  };
  salvarOrcamento = () => {
    const { dispatch, cart } = this.props;
    const {
      cidade,
      condicao,
      parcela,
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
    if (this.state.pdf) {
      dispatch(
        generatePDF({
          cart,
          detalhes: {
            cidade,
            condicao,
            parcela,
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
    } else {
      dispatch(
        add_orcamento({
          cart,
          detalhes: {
            cidade,
            condicao,
            parcela,
            cpf,
            criacao,
            email,
            nome,
            nomeCompleto,
            ramo,
            telefone,
            uf,
            validade
          },
          id: this.props.lastId - 1
        })
      );
      dispatch(decrease_id());
    }
    this.props.dispatch(cleanCart());
    this.props.navigation.popToTop();
  };
  render() {
    return (
      <ScrollView
        ref={ref => (this.myScroll = ref)}
        style={styles.container}
        keyboardShouldPersistTaps={"always"}
      >
        <Text
          style={{
            marginTop: 30,
            paddingBottom: 17,
            color: "rgba(0,0,0,0.87)",
            fontSize: 16
          }}
        >
          Informações da proposta
        </Text>
        <View style={styles.dateContainer}>
          <Text style={styles.dateLabel}>Data de criação</Text>
          <DatePicker
            style={{ flex: 1 }}
            date={this.state.criacao}
            mode="date"
            placeholder="Data de criação"
            format="DD-MM-YYYY"
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0,
                borderRadius: 10
              },
              dateInput: {
                marginLeft: 36
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={date => {
              this.setState({ criacao: moment(date, "DD-MM-YYYY") });
            }}
          />
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateLabel}>Data de validade</Text>
          <DatePicker
            style={{ flex: 1 }}
            date={this.state.validade}
            mode="date"
            placeholder="Data de Validade"
            format="DD-MM-YYYY"
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0,
                borderRadius: 10
              },
              dateInput: {
                marginLeft: 36
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={date => {
              this.setState({ validade: moment(date, "DD-MM-YYYY") });
            }}
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
            refInput={ref => {
              this.condicao = ref;
            }}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              this.nome.focus();
              this.myScroll.scrollTo({ x: 0, y: 150, animated: true });
            }}
            returnKeyType={"next"}
          />
        </View>
        <View style={styles.pickerContainer}>
          <Text style={styles.dateLabel}>Parcelas</Text>
          <Picker
            selectedValue={this.state.parcela}
            style={styles.pickerStyle}
            onValueChange={(formatted, extracted) =>
              this.setState({ parcela: formatted })
            }
          >
            <Picker.Item label="À VISTA" value="1" />
            <Picker.Item label="2X" value="2" />
            <Picker.Item label="3X" value="3" />
            <Picker.Item label="4X" value="4" />
            <Picker.Item label="5X" value="5" />
            <Picker.Item label="6X" value="6" />
            <Picker.Item label="7X" value="7" />
            <Picker.Item label="8X" value="8" />
            <Picker.Item label="9X" value="9" />
            <Picker.Item label="10X" value="10" />
            <Picker.Item label="11X" value="11" />
            <Picker.Item label="12X" value="12" />
          </Picker>
        </View>
        <Text
          style={{
            marginTop: hp(3.125),
            marginBottom: hp(1.1),
            color: "rgba(0,0,0,0.87)",
            fontSize: wp(4.5)
          }}
        >
          Empresa e Contato
        </Text>
        <Text style={styles.labelStyle}>Nome da conta</Text>
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
          refInput={ref => {
            this.nome = ref;
          }}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            this.cpf.getElement().focus();
            this.myScroll.scrollTo({ x: 0, y: 200, animated: true });
          }}
          returnKeyType={"next"}
        />
        <Text style={styles.labelStyle}>CNPJ/CPF</Text>

        <TextInputMaskCpf
          type={"custom"}
          style={styles.inputStyle}
          placeholder={"xx.xxx.xxx/xxxx-xx ou xxx.xxx.xxx-xx"}
          value={this.state.cpf}
          onChangeText={text => {
            this.setState({
              cpf: text
            });
          }}
          ref={(ref) => this.cpf = ref}
          onSubmitEditing={() => {
            this.ramo.focus();
            this.myScroll.scrollTo({ x: 0, y: 250, animated: true });
          }}
          options={
            this.state.cpf.length > 14
              ? {
                  mask: "99.999.999/9999-99"
                }
              : {
                  mask: "999.999.999-9999"
                }
          }
          maxLength={19}
          returnKeyType={"next"}
          keyboardType="numeric"
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
          refInput={ref => {
            this.ramo = ref;
          }}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            this.nomeCompleto.focus();
            this.myScroll.scrollTo({ x: 0, y: 350, animated: true });
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
          refInput={ref => {
            this.nomeCompleto = ref;
          }}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            this.telefone.focus();
            this.myScroll.scrollTo({ x: 0, y: 400, animated: true });
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
              telefone: formatted
            });
          }}
          refInput={ref => {
            this.telefone = ref;
          }}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            this.email.focus();
            this.myScroll.scrollTo({ x: 0, y: 500, animated: true });
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
          refInput={ref => {
            this.email = ref;
          }}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            this.uf.focus();
            this.myScroll.scrollTo({ x: 0, y: 650, animated: true });
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
              refInput={ref => {
                this.uf = ref;
              }}
              blurOnSubmit={false}
              onSubmitEditing={() => {
                this.cidade.focus();
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
              refInput={ref => {
                this.cidade = ref;
              }}
              blurOnSubmit={true}
              returnKeyType={"done"}
            />
          </View>
        </View>
        <CheckBox
          title={"Exportar orçamento para PDF"}
          containerStyle={{ marginTop: hp(3.125), backgroundColor: "#fafafa" }}
          checked={this.state.pdf}
          onPress={() => this.setState({ pdf: !this.state.pdf })}
        />
        <Button
          title={"Salvar Orçamento"}
          containerStyle={{
            marginBottom: hp(2.5),
            marginTop: hp(1.5),
            marginHorizontal: hp(5)
          }}
          onPress={this.CheckTextInput}
        />
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  const { cart } = state.cart;
  const { lastId } = state.orcamentos;
  return { cart, lastId };
};
export default connect(mapStateToProps)(SalvarOrcamento);
const styles = StyleSheet.create({
  container: { paddingHorizontal: wp(8.33) },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: hp(0.78)
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: hp(0.78)
  },
  dateLabel: {
    width: wp(41.66),
    fontSize: wp(4)
  },
  dateInputStyle: {
    borderWidth: StyleSheet.hairlineWidth,
    flex: 1,
    borderRadius: 10,
    height: hp(4.68),
    paddingVertical: 0,
    textAlign: "center"
  },
  pickerStyle: {
    height: hp(4.68),
    width: wp(41.66),
    backgroundColor: "#fafafa"
  },
  inputStyle: {
    marginTop: hp(0.78),
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    height: hp(4.68),
    paddingVertical: 0,
    width: "100%"
  },
  labelStyle: {
    marginTop: hp(1.56),
    marginBottom: hp(0.625),
    fontSize: wp(4)
  },
  ufContainer: {
    marginVertical: hp(1.56),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: wp(1.38),
    width: "100%"
  }
});
