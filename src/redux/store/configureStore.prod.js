import { applyMiddleware, createStore } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { apiMiddleware } from 'redux-api-middleware';
import reducer from '../reducers';

export default (initialState = {}) => {
  const createStoreWithMiddleware = applyMiddleware(
    routerMiddleware(browserHistory),
    apiMiddleware
  )(createStore);

  return createStoreWithMiddleware(reducer, initialState);
};
