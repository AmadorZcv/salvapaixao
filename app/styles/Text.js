import Color from "./Color";

const helvetica = "Helvetica";
const base = { fontFamily: helvetica };
const header = {
  ...base,
  color: Color.white,
  fontSize: 34,
  textAlign: "center",
  color: Color.header
};

const normal = {
  ...base,
  fontSize: 24
};
//Base dos textos primários
const primaryBig = {
  fontSize: 16,
  color: Color.primaryText
};

//Label dos produtos ex: Papel + Bolha
export const productLabel = {
  ...primaryBig,
  paddingLeft: 10,
  height: 31,
  textAlignVertical: "center"
};
//Style valor final
export const textValueFinal = {
  ...primaryBig,
  textAlign: "center"
};
//Style contador
export const contadorText = {
  ...primaryBig,
  color: Color.secondaryText,
  textAlign: "center",
  marginBottom: 5
};
//Style do preço ex: R$ 86,00
export const textPreco = {
  fontSize: 15,
  color: Color.secondaryText,
  textAlign: "center",
  fontWeight: "100",
  marginBottom: 5
};

//Style custo total
export const textCusto = {
  fontSize: 12,
  textAlign: "center",
  color: Color.primaryText
};
//Base dos textos pequenos
const primarySmall = {
  color: Color.primaryText,
  textAlign: "center",

  fontSize: 10
};
//Style do valor das labels ex: 25m²
export const textValue = {
  ...primarySmall,
  color: Color.secondaryText,
  paddingTop: 3
};
//Styles das Labels da tela de produto ex: Altura(metros)
export const textInfo = {
  ...primarySmall,
  fontWeight: "600"
};
const TextStyle = { header, normal };

export default TextStyle;
