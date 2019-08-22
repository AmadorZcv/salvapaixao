import { combineReducers } from "redux";
import cart from "./cart/reducer";
import products from "./products/reducer";
import orcamentos from "./orcamentos/reducer";
import auth from "./auth/reducer";
export default combineReducers({
  cart,
  products,
  orcamentos,
  auth
});
