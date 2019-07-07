import { ADD_TO_CART } from "./actions";
import update from "immutability-helper";
const initialState = {
  cart: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const id = action.payload;
      const isInCart = state.cart[id] !== undefined;
      if (isInCart) {
        const qtd = state.cart[id].qtd + 1;
        return update(state, {
          cart: { [id]: { $set: { id: id, qtd: qtd } } }
        });
      } else {
        return update(state, { cart: { [id]: { $set: { id: id, qtd: 1 } } } });
      }

    default:
      return state;
  }
};
