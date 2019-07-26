import { ADD_ORCAMENTO } from "./actions";
import _ from "lodash";
import update from "immutability-helper";
import moment from "moment";

const initialState = {
  orcamentos: [],
  logged: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORCAMENTO:
      const { orcamentos } = state;
      const { criacao } = action.payload.detalhes;
      const title = moment(criacao).format("DD/MM/YYYY");
      const index = orcamentos.findIndex(value => value.title === title);
      console.log("index é", index);
      if (index === -1) {
        const oldOrcamentos = state.orcamentos;
        oldOrcamentos.push({
          title,
          data: [action.payload]
        });
        console.log("old é", oldOrcamentos);
        const newOrcamentos = _.sortBy(oldOrcamentos, function(o) {
          return new moment(o.title, "DD/MM/YYYY");
        }).reverse();
        console.log("new orcamentos é", newOrcamentos);
        return update(state, {
          orcamentos: { $set: newOrcamentos }
        });
      }
      return update(state, {
        orcamentos: { [index]: { data: { $push: [action.payload] } } }
      });
    case "SET_LOGGED":
      return { ...state, logged: action.payload };
    default:
      return state;
  }
};
