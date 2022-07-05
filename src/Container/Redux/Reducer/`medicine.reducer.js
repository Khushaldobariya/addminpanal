import * as actionTypes from "../ActionType";

const initialState = {
  isLoading: false,
  medicine: [],
  error: " ",
};

export const medicine = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MEDICINE:
      return {
        ...state,
        isLoading: false,
        medicine: action.payload,
        error: "",
      };
    default:
      return state;
  }
};
