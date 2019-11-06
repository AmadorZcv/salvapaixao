import {
  SET_IS_LOGGED,
  SET_IS_FETCHING,
  SET_CARGO,
  SET_NOME,
  SET_FUNCIONARIO_ID,
  SET_FILIAL_ID
} from "./actions";

const initialState = {
  logged: false,
  isFetching: false,
  nome: "",
  cargo: "",
  filialId: "",
  funcionarioId: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOGGED:
      return { ...state, logged: action.payload };
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.payload };
    case SET_FUNCIONARIO_ID:
      return { ...state, funcionarioId: action.payload };
    case SET_FILIAL_ID:
      return { ...state, filialId: action.payload };
    case SET_CARGO:
      return { ...state, cargo: action.payload };
    case SET_NOME:
      return { ...state, nome: action.payload };
    default:
      return state;
  }
};
