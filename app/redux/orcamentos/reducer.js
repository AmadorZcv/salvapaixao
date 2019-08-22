import {
  ADD_ORCAMENTO,
  IS_SAVING,
  DECREASE_ID,
  ADD_ID_ORCAMENTO
} from "./actions";
import _ from "lodash";
import update from "immutability-helper";
import moment from "moment";

const initialState = {
  orcamentos: [],
  logged: true,
  lastOrcamento: null,
  salvando: false,
  lastId: 0
};

export default (state = initialState, action) => {
  const { orcamentos } = state;
  switch (action.type) {
    case ADD_ORCAMENTO:
      const { criacao } = action.payload.detalhes;
      const title = moment(criacao).format("DD/MM/YYYY");
      const index = orcamentos.findIndex(value => value.title === title);

      if (index === -1) {
        const oldOrcamentos = state.orcamentos;
        oldOrcamentos.push({
          title,
          data: [action.payload]
        });

        const newOrcamentos = _.sortBy(oldOrcamentos, function(o) {
          return new moment(o.title, "DD/MM/YYYY");
        }).reverse();

        return update(state, {
          orcamentos: { $set: newOrcamentos },
          lastOrcamento: { $set: action.payload }
        });
      }
      return update(state, {
        orcamentos: { [index]: { data: { $push: [action.payload] } } },
        lastOrcamento: { $set: action.payload.id }
      });
    case "SET_LOGGED":
      return { ...state, logged: action.payload };
    case IS_SAVING:
      return { ...state, salvando: action.payload };
    case DECREASE_ID:
      const oldId = state.lastId;
      const lastId = oldId - 1;
      return { ...state, lastId };
    case ADD_ID_ORCAMENTO:
      const criacaoNew = action.payload.orcamento.detalhes.criacao;
      const { id } = action.payload;
      const newTitle = moment(criacaoNew).format("DD/MM/YYYY");
      const newIndex = orcamentos.findIndex(value => value.title === newTitle);
      const innerIndex = orcamentos[newIndex].data.findIndex(value => {
        return value.id === action.payload.orcamento.id;
      });
      return update(state, {
        orcamentos: {
          [newIndex]: { data: { [innerIndex]: { id: { $set: id } } } }
        }
      });
    default:
      return state;
  }
};
