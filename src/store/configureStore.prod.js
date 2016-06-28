import { applyMiddleware, createStore, combineReducers } from 'redux';
import { browserHistory } from 'react-router';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { apiMiddleware } from 'redux-api-middleware';
import rootReducer from 'src/reducers/index';

const reducer = combineReducers(Object.assign({}, rootReducer, {
  routing: routerReducer
}));

export default (initialState = {}) => {
  const createStoreWithMiddleware = applyMiddleware(
    routerMiddleware(browserHistory),
    apiMiddleware
  )(createStore);

  return createStoreWithMiddleware(reducer, initialState);
};
