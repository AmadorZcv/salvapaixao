import React, { PureComponent } from "react";
import { View, ActivityIndicator } from "react-native";

import { connect } from "react-redux";

class LastOrcamento extends PureComponent {
  findOrcamento() {
    let lastOrcamento = {};
    this.props.orcamentos.find(dia => {
      let found = false;
      dia.data.forEach(orcamento => {
        if (orcamento.id === this.props.lastId) {
          lastOrcamento = orcamento;
        }
      });
      return found;
    });
    return lastOrcamento;
  }
  componentDidMount() {
    const item = this.findOrcamento();
    const { navigation } = this.props;
    navigation.navigate("Orcamento", { item });
  }
  render() {
    return (
      <View>
        <ActivityIndicator animating={true} size={"large"} />
      </View>
    );
  }
}
const mapStateToProps = state => {
  const { lastId, orcamentos } = state.orcamentos;
  return { lastId, orcamentos };
};
export default connect(mapStateToProps)(LastOrcamento);
