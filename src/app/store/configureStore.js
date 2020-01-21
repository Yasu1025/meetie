import { createStore } from "redux"
import { devToolsEnhancer } from 'redux-devtools-extension'
import rootReducers from "../reducers/rootReducers"

export const configureStore = () => {
  const store = createStore(rootReducers, devToolsEnhancer());

  return store;
}