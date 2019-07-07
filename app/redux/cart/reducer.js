import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions";
import update from "immutability-helper";
const initialState = {
  cart: {}
};

export default (state = initialState, action) => {
  const id = action.payload;
  const isInCart = state.cart[id] !== undefined;
  switch (action.type) {
    case ADD_TO_CART:
      if (isInCart) {
        const qtd = state.cart[id].qtd + 1;
        return update(state, {
          cart: { [id]: { $set: { id: id, qtd: qtd } } }
        });
      } else {
        return update(state, { cart: { [id]: { $set: { id: id, qtd: 1 } } } });
      }
    case REMOVE_FROM_CART:
      if (isInCart) {
        const qtd = state.cart[id].qtd - 1;
        if (qtd <= 0) {
          return update(state, {
            cart: { $unset: [id] }
          });
        } else {
          return update(state, {
            cart: { [id]: { $set: { id: id, qtd: qtd } } }
          });
        }
      }
    default:
      return state;
  }
};

export const calculateItemTotal = (cart, products, id) => {
  return products[id].total * cart[id].qtd;
};
