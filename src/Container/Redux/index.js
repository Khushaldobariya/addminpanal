import { combineReducers } from "redux";
import { CounterReducer } from "./Reducer/Counter.Reducer";

export const rootReducer = combineReducers({
  Counter : CounterReducer,
});
