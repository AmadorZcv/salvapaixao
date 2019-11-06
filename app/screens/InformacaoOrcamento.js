import React, { PureComponent } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  ActivityIndicator
} from "react-native";
import { Button } from "react-native-elements";
import { Color } from "../styles";
import OrcamentoDetalheItem from "../components/OrcamentoDetalheItem";
import { connect } from "react-redux";
import LabelWithTextRight from "../components/LabelWithTextRight";
import { integerToReal } from "../config/formatUtils";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { generateFromId, generateNoId } from "../redux/orcamentos/actions";
import { setCart } from "../redux/cart/actions";
import { selectProducts } from "../redux/products/selectors";

class InformacaoOrcamento extends PureComponent {
  componentDidMount() {
    this.props.navigation.setParams({
      loadPress: this.loadPress
    });
  }
  loadPress = () => {
    const { navigation } = this.props;
    const item = navigation.getParam("item", "NO-ID");
    const { produtos } = item;
    const cart = cartFromProdutos(produtos);
    this.props.dispatch(setCart(cart));
    this.props.navigation.popToTop();
    this.props.navigation.navigate("Home");
  };
  exportToPdf = () => {
    const { navigation } = this.props;
    const item = navigation.getParam("item", "NO-ID");
    if (item.id) {
      this.props.dispatch(generateFromId(item.id));
    } else {
      this.props.dispatch(generateNoId(item));
    }
  };
  calculateTotalComIpi = () => {
    const { navigation } = this.props;
    const item = navigation.getParam("item", "NO-ID");
    const { produtos } = item;
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.total;
    return produtos.reduce(reducer, 0);
  };
  calculateTotalNoIpi = () => {
    const { navigation } = this.props;
    const item = navigation.getParam("item", "NO-ID");
    const { produtos } = item;
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.preco;
    return produtos.reduce(reducer, 0);
  };
  render() {
    const { navigation } = this.props;
    const item = navigation.getParam("item", "NO-ID");
    const { produtos } = item;
    const totalComIpi = this.calculateTotalComIpi();
    const subTotal = this.calculateTotalNoIpi();

    const id = `#${item.title}`;
    return (
      <ScrollView style={{ backgroundColor: Color.background, flex: 1 }}>
        <ActivityIndicator animating={this.props.salvando} />
        <View>
          <Text
            style={{
              textAlign: "right",
              fontSize: wp(4.5),
              fontWeight: "bold",
              paddingTop: hp(2),
              paddingBottom: hp(3.4),
              paddingRight: hp(4.2)
            }}
          >
            {id}
          </Text>
          <FlatList
            data={produtos}
            renderItem={({ item, index }) => (
              <OrcamentoDetalheItem
                item={item}
                index={index}
                ipi={item.ipi}
                valorNoIpi={item.preco}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          <View
            style={{ paddingHorizontal: wp(12), paddingVertical: hp(4.84) }}
          >
            <LabelWithTextRight
              label={"Subtotal"}
              text={integerToReal(subTotal)}
            />
            <LabelWithTextRight label={"Desconto"} text={"0,00%"} />
            <LabelWithTextRight
              label={"Total"}
              text={integerToReal(totalComIpi)}
            />
          </View>
        </View>
        <ActivityIndicator animating={this.props.salvando} />
        <Button
          containerStyle={{
            marginBottom: hp(2.5),
            marginTop: hp(1.5),
            marginHorizontal: hp(13.33)
          }}
          title={"Exportar para PDF"}
          onPress={() => this.exportToPdf()}
          loading={this.props.salvando}
        />
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  const products = selectProducts(state);
  const { salvando } = state.orcamentos;

  return { products, salvando };
};

export default connect(mapStateToProps)(InformacaoOrcamento);
