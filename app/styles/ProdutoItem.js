import Color from "./Color";
import { normalize } from "react-native-elements";

const ProdutoItem = {
  column: {
    marginHorizontal: 5
  },
  textValue: {
    color: Color.secondaryText,
    textAlign: "center",
    paddingTop: 3
  },
  textInfo: {
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    color: Color.primaryText,
    fontWeight: "600"
  },
  textPreco: {
    fontSize: normalize(20),
    color: Color.primaryText,
    textAlign: "center",
    fontWeight: "100",
    marginBottom: 5
  },
  textCusto: {
    fontSize: normalize(18),
    textAlign: "center",
    color: Color.secondaryText
  },
  textValueFinal: {
    fontSize: normalize(20),
    textAlign: "center",
    color: Color.primaryText
  }
};
export default ProdutoItem;
