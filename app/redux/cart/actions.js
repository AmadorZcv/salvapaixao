export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_QTD = "SET_QTD";

export const addToCart = id => ({
  type: ADD_TO_CART,
  payload: id
});
export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  payload: id
});

export const setQtdCart = (qtd, id) => ({
  type: SET_QTD,
  payload: { qtd, id }
});
