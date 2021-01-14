import * as actionTypes from "../actions/actionTypes";

const initialState = {
  category: "all",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return { ...state, category: "javascript" };
    case actionTypes.GET_CATEGORY:
      return state.category;
    default:
      return state;
  }
};

export default reducer;
