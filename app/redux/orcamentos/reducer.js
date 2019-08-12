import { ADD_ORCAMENTO, IS_SAVING } from "./actions";
import _ from "lodash";
import update from "immutability-helper";
import moment from "moment";

const initialState = {
  orcamentos: [],
  logged: true,
  lastOrcamento: null,
  salvando: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORCAMENTO:
      const { orcamentos } = state;
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
        lastOrcamento: { $set: action.payload }
      });
    case "SET_LOGGED":
      return { ...state, logged: action.payload };
    case IS_SAVING:
      return { ...state, salvando: action.payload };
    default:
      return state;
  }
};
