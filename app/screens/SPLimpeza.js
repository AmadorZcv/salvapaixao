import React, { PureComponent } from "react";
import { Text, Image, ScrollView, Dimensions } from "react-native";
import { connect } from "react-redux";
import { addToCart, removeFromCart, setQtdCart } from "../redux/cart/actions";
import { Color } from "../styles";
import SalvaLimpezaItem from "../components/SalvaLimpezaItem";
import { productLabel, productSublabel } from "../styles/Text";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { calculateIpic } from "../config/mathUtils";

class SPLimpeza extends PureComponent {
  onPlus = id => {
    this.props.dispatch(addToCart(id));
  };
  onMinus = id => {
    this.props.dispatch(removeFromCart(id));
  };
  onChange = (qtd, id) => {
    this.props.dispatch(setQtdCart(qtd, id));
  };
  render() {
    const { products, cart } = this.props;
    const { width } = Dimensions.get;
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
        <Image
          source={require("../img/product-screen/sp-limpeza-top.png")}
          style={{ width, height: hp(26.6875) }}
        />
        <Text style={productLabel}>Limpeza Pesada Pós Obra (Porcelanato)</Text>
        <Text style={{ ...productSublabel }}>Caixa c/ 6 unidades</Text>
        <SalvaLimpezaItem
          index={0}
          unidade={products["13000"].usidade}
          diluicao={products["13000"].diluicao}
          preco={products["13000"].preco}
          ipi={products["13000"].ipi}
          ipiR={calculateIpic(products["13000"].preco, products["13000"].ipi)}
          rendimento={products["13000"].rendimento}
          onPlus={() => this.onPlus("13000")}
          onMinus={() => this.onMinus("13000")}
          onChange={qtd => this.onChange(qtd, "13000")}
          total={cart["13000"]}
        />
        <Text
          style={{ ...productLabel, backgroundColor: Color.darkBackground }}
        >
          Limpeza Diária (Cerâmica {"&"} Porcelanato)
        </Text>
        <Text
          style={{ ...productSublabel, backgroundColor: Color.darkBackground }}
        >
          Caixa c/ 6 unidades
        </Text>
        <SalvaLimpezaItem
          index={1}
          unidade={products["13100"].usidade}
          diluicao={products["13100"].diluicao}
          preco={products["13100"].preco}
          ipi={products["13100"].ipi}
          ipiR={calculateIpic(products["13100"].preco, products["13100"].ipi)}
          rendimento={products["13100"].rendimento}
          onPlus={() => this.onPlus("13100")}
          onMinus={() => this.onMinus("13100")}
          onChange={qtd => this.onChange(qtd, "13100")}
          total={cart["13100"]}
        />
        <Text style={productLabel}>Limpeza Pedras</Text>
        <Text style={{ ...productSublabel }}>Caixa c/ 6 unidades</Text>
        <SalvaLimpezaItem
          index={2}
          unidade={products["13200"].usidade}
          diluicao={products["13200"].diluicao}
          preco={products["13200"].preco}
          ipi={products["13200"].ipi}
          ipiR={calculateIpic(products["13200"].preco, products["13200"].ipi)}
          rendimento={products["13200"].rendimento}
          onPlus={() => this.onPlus("13200")}
          onMinus={() => this.onMinus("13200")}
          onChange={qtd => this.onChange(qtd, "13200")}
          total={cart["13200"]}
        />
        <Text
          style={{ ...productLabel, backgroundColor: Color.darkBackground }}
        >
          Limpeza Pesada Pós Obra (Porcelanato)
        </Text>
        <Text
          style={{ ...productSublabel, backgroundColor: Color.darkBackground }}
        >
          Caixa c/ 12 unidades
        </Text>
        <SalvaLimpezaItem
          index={3}
          unidade={products["13300"].usidade}
          diluicao={products["13300"].diluicao}
          preco={products["13300"].preco}
          ipi={products["13300"].ipi}
          ipiR={calculateIpic(products["13300"].preco, products["13300"].ipi)}
          rendimento={products["13300"].rendimento}
          onPlus={() => this.onPlus("13300")}
          onMinus={() => this.onMinus("13300")}
          onChange={qtd => this.onChange(qtd, "13300")}
          total={cart["13300"]}
        />
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  const { products } = state.products;
  const { cart } = state.cart;
  return { products, cart };
};
export default connect(mapStateToProps)(SPLimpeza);
