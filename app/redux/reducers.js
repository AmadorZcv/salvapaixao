import { combineReducers } from "redux";
import cart from "./cart/reducer";
import data from "./products/data";
console.log("Data é", data);

export default combineReducers({
  cart
});
