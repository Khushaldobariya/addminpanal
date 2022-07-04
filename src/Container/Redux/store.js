import { createStore } from 'redux'

export const ConfiguerStore  =() => {
    let store = createStore (rootReducer);
    return store;
} 