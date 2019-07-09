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
//Label dos produtos ex: Papel + Bolha
export const productLabel = {
  fontSize: 16,
  color: Color.primaryText,
  paddingLeft: 10,

  height: 31,
  textAlignVertical: "center"
};

const TextStyle = { header, normal };

export default TextStyle;
