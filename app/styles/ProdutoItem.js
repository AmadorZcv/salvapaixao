import Color from "./Color";

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
    fontSize: 20,
    color: Color.primaryText,
    textAlign: "center",
    fontWeight: "100",
    marginBottom: 5
  },
  textCusto: { fontSize: 18, textAlign: "center", color: Color.secondaryText },
  textValueFinal: {
    fontSize: 20,
    textAlign: "center",
    color: Color.primaryText
  }
};
export default ProdutoItem;
