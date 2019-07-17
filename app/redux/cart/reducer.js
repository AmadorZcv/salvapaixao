import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_QTD,
  REMOVE_ITEM_CART,
  CLEAN_CART,
  SET_CART
} from "./actions";
import update from "immutability-helper";
const initialState = {
  cart: {}
};

const removeFromCart = (state, id) => {
  if (state.cart[id] !== undefined) {
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
  return state;
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
    case REMOVE_ITEM_CART:
      return update(state, {
        cart: { $unset: [id] }
      });
    case REMOVE_FROM_CART:
      return removeFromCart(state, id);
    case SET_QTD:
      const parsedNumber = parseInt(action.payload.qtd, 10);
      const idHere = action.payload.id;
      const qtdHere = !isNaN(parsedNumber) ? parsedNumber : 0;
      if (qtdHere === 0) {
        return update(state, {
          cart: { $unset: [idHere] }
        });
      } else {
        return update(state, {
          cart: { [idHere]: { $set: { id: idHere, qtd: qtdHere } } }
        });
      }
    case CLEAN_CART:
      return initialState;
    case SET_CART:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

export const calculateItemTotal = (cart, products, id) => {
  return products[id].total * cart[id].qtd;
};

export const calculateTotalComIpi = (cart, products) => {
  return Object.keys(cart).reduce((previous, current) => {
    const newSoma = cart[current].qtd * products[current].total;
    return previous + newSoma;
  }, 0);
};

export const calculateTotalIpi = (cart, products) => {
  return Object.keys(cart).reduce((previous, current) => {
    const newSoma = cart[current].qtd * products[current].ipic;
    return previous + newSoma;
  }, 0);
};
export const calculateTotalNoIpi = (cart, products) => {
  return Object.keys(cart).reduce((previous, current) => {
    const newSoma = cart[current].qtd * products[current].preco;
    return previous + newSoma;
  }, 0);
};
