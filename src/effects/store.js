import initialState from './initialState';
import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';

export const allReducers = combineReducers({ ...reducers });
const store = createStore(
  allReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
