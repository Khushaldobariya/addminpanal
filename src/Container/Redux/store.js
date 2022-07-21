import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./index";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Counter"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default () => {
  
//   return { store, persistor };
// };

export const ConfiguerStore = () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk));
//   let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return {store, persistor};
};
