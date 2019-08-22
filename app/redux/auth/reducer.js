import { SET_IS_LOGGED, SET_IS_FETCHING } from "./actions";

const initialState = {
  logged: false,
  isFetching: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOGGED:
      return { ...state, logged: action.payload };
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.payload };
    default:
      return state;
  }
};
