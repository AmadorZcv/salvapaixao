import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { setCart } from "../redux/cart/actions";
import { connect } from "react-redux";

class Orcamento extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      orcamento: null
    };
  }
  componentDidMount() {
    const { navigation } = this.props;
    const orcamento = navigation.getParam("orcamento", "NO-ID");
    this.setState({ orcamento });
  }
  render() {
    return (
      <View>
        <Text> Orçamento </Text>
        <Button
          title={"Carregar no carrinho"}
          onPress={() =>
            this.props.dispatch(setCart(this.state.orcamento.cart))
          }
        />
      </View>
    );
  }
}
export default connect()(Orcamento);
