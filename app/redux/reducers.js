import { combineReducers } from "redux";
import cart from "./cart/reducer";
import products from "./products/reducer";
import orcamentos from "./orcamentos/reducer";

export default combineReducers({
  cart,
  products,
  orcamentos
});
