import React, { PureComponent } from "react";
import { View, Text, StyleSheet, ScrollView, Alert, Picker } from "react-native";
import TextInputMask from "react-native-text-input-mask";
import moment from "moment";
import { connect } from "react-redux";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Button, CheckBox } from "react-native-elements";
import { add_orcamento } from "../redux/orcamentos/actions";
import { requestDownloadPermission } from "../config/fileSystem";

class SalvarOrcamento extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      criacao: moment(),
      validade: moment().add(1, "day"),
      condicao: "",
      parcela: "À VISTA",
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
    if (this.state.condicao != '') {
      if (this.state.nome != '') {
        if (this.state.cpf.length == 14 || this.state.cpf.length == 18) {
          if (this.state.ramo != '') {
            if (this.state.nomeCompleto != '') {
              console.log(this.state.telefone.length)
              if (this.state.telefone.length == 10 || this.state.telefone.length ==11) {
                if (this.state.email != '') {
                  console.log(this.state.uf.length)
                  if (this.state.uf.length == 2) {
                    if (this.state.cidade != '') {
                      this.salvarOrcamento()
                    } else {
                      this.cidade.focus()
                      this.myScroll.scrollTo({x: 0, y: 650, animated: true})
                    }
                  } else {
                    this.uf.focus()
                    this.myScroll.scrollTo({x: 0, y: 650, animated: true})
                  }
                } else {
                  this.email.focus()
                  this.myScroll.scrollTo({x: 0, y: 500, animated: true})
                }
              } else {
                this.telefone.focus()
                this.myScroll.scrollTo({x: 0, y: 400, animated: true})
              }
            } else {
              this.nomeCompleto.focus()
              this.myScroll.scrollTo({x: 0, y: 350, animated: true})
            }
          } else {
            this.ramo.focus()
            this.myScroll.scrollTo({x: 0, y: 250, animated: true})
          }
        } else {
          this.cpf.focus()
          this.myScroll.scrollTo({x: 0, y: 200, animated: true})
        }
      } else {
        this.nome.focus()
        this.myScroll.scrollTo({x: 0, y: 150, animated: true})
      }
    } else {
      this.condicao.focus()
      this.myScroll.scrollTo({x: 0, y: 0, animated: true})
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
      console.log("cART É", cart);
      const chaves = Object.keys(cart);
      const carrinho = chaves.map(element => {
        const item = cart[element];
        return { id: item.id.toString(), qtd: item.qtd };
      });

      requestDownloadPermission({
        criacao: criacao.format("DD/MM/YYYY"),
        validade: validade.format("DD/MM/YYYY"),
        condicao: condicao,
        parcela,
        telefone,
        cidade,
        nome,
        nome_completo: nomeCompleto,
        uf,
        cpf,
        email,
        ramo,
        carrinho
      });
    }
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
        }
      })
    );
    Alert.alert("Orçamento salvo com sucesso");
    this.props.navigation.popToTop();
  };
  render() {
    return (
      <ScrollView ref={(ref) => this.myScroll = ref} style={styles.container}>
        <Text
          style={{
            marginTop: 30,
            paddingBottom: 17,
            color: "rgba(0,0,0,0.87)",
            fontSize: 16
          }}
        >
          Informações da proposta{" "}
        </Text>
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
            refInput={ref => {
              this.criacao = ref;
            }}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              this.validade.focus();
            }}
            returnKeyType={"next"}
          />
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateLabel}>Data de validade</Text>
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
            refInput={ref => {
              this.validade = ref;
            }}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              this.condicao.focus();
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
            refInput={ref => {
              this.condicao = ref;
            }}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              this.nome.focus();
              this.myScroll.scrollTo({x: 0, y: 150, animated: true})
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
            }>
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
          Empresa e Contato{" "}
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
            this.cpf.focus();
            this.myScroll.scrollTo({x: 0, y: 200, animated: true})
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
          refInput={ref => {
            this.cpf = ref;
          }}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            this.ramo.focus();
            this.myScroll.scrollTo({x: 0, y: 250, animated: true})
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
          refInput={ref => {
            this.ramo = ref;
          }}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            this.nomeCompleto.focus();
            this.myScroll.scrollTo({x: 0, y: 350, animated: true})
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
            this.myScroll.scrollTo({x: 0, y: 400, animated: true})
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
          refInput={ref => {
            this.telefone = ref;
          }}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            this.email.focus();
            this.myScroll.scrollTo({x: 0, y: 500, animated: true})
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
            this.myScroll.scrollTo({x: 0, y: 650, animated: true})
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
  return { cart };
};
export default connect(mapStateToProps)(SalvarOrcamento);
const styles = StyleSheet.create({
  container: { paddingHorizontal: wp(8.33) },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: hp(.78)
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: hp(.78)
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
    backgroundColor: "#fafafa",
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
