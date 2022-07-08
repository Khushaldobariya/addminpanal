import * as actionTypes from "../ActionType";

const initialState = {
  isLoading: false,
  medicine: [],
  error: " ",
};

export const medicineReducer = (state = initialState, action) => {
  console.log(action.type, action.payload);
  switch (action.type) {
    case actionTypes.LODAING_MEDICINE:
      return {
        ...state,
        isLoading: true,
        error: "",
      };

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
