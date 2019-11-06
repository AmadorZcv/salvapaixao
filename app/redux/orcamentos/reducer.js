import { ADD_ORCAMENTO, IS_SAVING, SET_ORCAMENTOS } from "./actions";
import _ from "lodash";
import update from "immutability-helper";

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
      const orcamentos = _.merge(action.payload, state.orcamentos);
      return { ...state, orcamentos };
    case ADD_ORCAMENTO:
      if (state.orcamentos[action.payload.parent]) {
        return update(state, {
          orcamentos: {
            [action.payload.parent]: {
              $merge: {
                [action.payload.title]: action.payload
              }
            }
          }
        });
      }
      const newOrcamento = {
        [action.payload.parent]: {
          [action.payload.title]: action.payload
        }
      };
      return update(state, {
        orcamentos: { $merge: newOrcamento }
      });
    case "SET_LOGGED":
      return { ...state, logged: action.payload };
    case IS_SAVING:
      return { ...state, salvando: action.payload };

    default:
      return state;
  }
};
