import * as actionTypes from "../actions/actionTypes";

const initialState = {
  category: null,
  items: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return state;
    case actionTypes.SET_ITEMS:
      return state;
    default:
      return state;
  }
};

export default reducer;
