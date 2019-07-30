import React, { PureComponent } from "react";
import { View, TouchableOpacity, SectionList } from "react-native";
import { connect } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import { Text, normalize } from "react-native-elements";
import OrcamentoItem from "../components/OrcamentoItem";
import { Color } from "../styles";
import { calculateTotalComIpi } from "../redux/cart/reducer";

class Orcamentos extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onOrcamentoPress = item => {
    const { navigation } = this.props;
    navigation.navigate("Orcamento", { item });
  };
  render() {
    const { orcamentos, products } = this.props;
    const { onOrcamentoPress } = this;
    return (
      <View style={{ backgroundColor: Color.background }}>
        <SectionList
          renderItem={({ item, index, section }) => (
            <OrcamentoItem
              item={item}
              index={index}
              onPress={() => onOrcamentoPress(item)}
              valor={calculateTotalComIpi(item.cart, products)}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text
              style={{
                fontWeight: "bold",
                fontSize: normalize(23),
                paddingLeft: 38,
                color: Color.primaryText,
                backgroundColor: Color.background
              }}
            >
              {title}
            </Text>
          )}
          sections={orcamentos}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  const { orcamentos } = state.orcamentos;
  const { products } = state.products;
  return { orcamentos, products };
};
export default connect(mapStateToProps)(Orcamentos);
