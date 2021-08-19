import { createStore, compose, applyMiddleware } from 'redux';
import Reducer from './Reducer';
import thunk from 'redux-thunk';

const middleware = [thunk];

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducer, compose(applyMiddleware(...middleware), composeEnhancers()));

export default store;
