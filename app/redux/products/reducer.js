import {
  SET_IS_CONSUMIDOR,
  SET_CONSUMIDOR,
  SET_REVENDA,
  SET_IS_LOADING
} from "./actions";

const initialState = {
  consumidor: [],
  revenda: [],
  isConsumidor: true,
  isLoading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_CONSUMIDOR:
      return { ...state, isConsumidor: action.payload };

    case SET_CONSUMIDOR:
      return { ...state, consumidor: action.payload };

    case SET_REVENDA:
      return { ...state, revenda: action.payload };
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
