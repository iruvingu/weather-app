import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reducerCity } from '../reducers/city'

// estado inicial
const initialState = {
  city: 'Tokyo,jp'
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducerCity,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
