import { combineReducers } from "redux";
import { CounterReducer } from "./Reducer/Counter.Reducer";
import { medicineReducer } from "./Reducer/medicine.reducer";

export const rootReducer = combineReducers({
  Counter : CounterReducer,
  medicine : medicineReducer
});
