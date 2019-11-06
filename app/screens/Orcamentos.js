import React, { PureComponent } from "react";
import { ScrollView, View, FlatList } from "react-native";
import { connect } from "react-redux";
import { Text, normalize } from "react-native-elements";
import OrcamentoItem from "../components/OrcamentoItem";
import { Color } from "../styles";

import { selectProducts } from "../redux/products/selectors";

import { getOrcamentos } from "../redux/orcamentos/actions";

class Orcamentos extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onOrcamentoPress = item => {
    const { navigation } = this.props;
    navigation.navigate("Orcamento", { item });
  };
  componentDidMount() {
    this.props.dispatch(getOrcamentos());
  }
  render() {
    const { orcamentos } = this.props;
    const { onOrcamentoPress } = this;
    return (
      <ScrollView style={{ backgroundColor: Color.background }}>
        <FlatList
          data={Object.keys(orcamentos)}
          renderItem={({ item }) => (
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: normalize(23),
                  paddingLeft: 38,
                  color: Color.primaryText,
                  backgroundColor: Color.background
                }}
              >
                {item}
              </Text>
              <FlatList
                data={Object.keys(orcamentos[item])}
                renderItem={nestedItem => {
                  const orcamento = orcamentos[item][nestedItem.item];
                  const index = nestedItem.index;

                  return (
                    <OrcamentoItem
                      item={orcamento}
                      index={index}
                      onPress={() => onOrcamentoPress(orcamento)}
                    />
                  );
                }}
                keyExtractor={item => item}
              />
            </View>
          )}
          keyExtractor={item => item}
        />
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  const { orcamentos } = state.orcamentos;
  const products = selectProducts(state);
  return { orcamentos, products };
};
export default connect(mapStateToProps)(Orcamentos);
