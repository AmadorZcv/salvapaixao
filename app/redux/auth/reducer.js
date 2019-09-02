import { SET_IS_LOGGED, SET_IS_FETCHING, SET_CARGO, SET_NOME } from "./actions";

const initialState = {
  logged: false,
  isFetching: false,
  nome: "",
  cargo: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOGGED:
      return { ...state, logged: action.payload };
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.payload };
    case SET_CARGO:
      return { ...state, cargo: action.payload };
    case SET_NOME:
      return { ...state, nome: action.payload };
    default:
      return state;
  }
};
