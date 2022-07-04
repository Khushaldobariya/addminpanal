import * as actionTypes from "../ActionType";

export const incrementCounter = (dispatch) => {
  dispatch({ type:actionTypes.INCREMENT_COUNTER});
};
export const decrementCounter = (dispatch) => {
  dispatch({ type:actionTypes.DECREMENT_COUNTER});
};
