import React, { PureComponent } from "react";
import { TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";

class Sair extends PureComponent {
  render() {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.dispatch({ type: "SET_LOGGED", payload: false })
        }
      >
        <Text> Sair </Text>
      </TouchableOpacity>
    );
  }
}

export default connect(null)(Sair);
