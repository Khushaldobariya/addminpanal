import * as actionTypes from "../ActionType";

const initialState = {
  Counter: 0,
};

export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_COUNTER:
      return {
        Counter: state.Counter + 1,
      };
    case actionTypes.DECREMENT_COUNTER:
      return {
        Counter: state.Counter - 1,
      };

    default:
      return state;
  }
};
