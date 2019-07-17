import React, { PureComponent } from "react";
import { View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import { Text } from "react-native-elements";

class Orcamentos extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.orcamentos}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("Orcamento", {
                  orcamento: item
                })
              }
            >
              <Text>{item.detalhes.nome}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  const { orcamentos } = state.orcamentos;
  return { orcamentos };
};
export default connect(mapStateToProps)(Orcamentos);
