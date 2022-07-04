import * as actionTypes from "../ActionType";

const initialState = {
  Counter: 0,
};

export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_COUNTER:
      if(state.Counter !== 30){
        return {
          Counter: state.Counter + 1,
        };
      } else {
        alert("Counter Limit is 30 Count")
        return {
          Counter : state.Counter
        }
      
      }
    case actionTypes.DECREMENT_COUNTER:
      if(state.Counter !== 0) {
      
        return {
          Counter: state.Counter - 1,
        };
      } else {
        alert("Can not give value below counter 0")
      }

    default:
      return state;
  }
};
