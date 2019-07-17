import { ADD_ORCAMENTO } from "./actions";
import update from "immutability-helper";

const initialState = {
  orcamentos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORCAMENTO:
      return update(state, { orcamentos: { $push: [action.payload] } });

    default:
      return state;
  }
};
