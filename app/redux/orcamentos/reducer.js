import {
  ADD_ORCAMENTO,
  IS_SAVING,
  DECREASE_ID,
  ADD_ID_ORCAMENTO,
  SET_TITLE_ORCAMENTO,
  SET_LAST_ORCAMENTO,
  SET_ORCAMENTOS
} from "./actions";
import _ from "lodash";
import update from "immutability-helper";
import moment from "moment";

const initialState = {
  orcamentos: {},
  logged: true,
  lastOrcamento: null,
  salvando: false,
  lastId: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ORCAMENTOS:
      return update(state, { orcamentos: { $merge: action.payload } });

    case "SET_LOGGED":
      return { ...state, logged: action.payload };
    case IS_SAVING:
      return { ...state, salvando: action.payload };

    default:
      return state;
  }
};
