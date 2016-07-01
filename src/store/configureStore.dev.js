import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { browserHistory } from 'react-router';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import { apiMiddleware } from 'redux-api-middleware';
import createLogger from 'redux-logger';

import rootReducer from 'src/reducers';
import DevTools from 'src/components/DevTools';

const reducer = combineReducers(Object.assign({}, rootReducer, {
  routing: routerReducer
}));

const logger = createLogger({collapsed: true, duration: true});

export default (initialState = {}) => {
  const createStoreWithMiddleware = compose(
    applyMiddleware(routerMiddleware(browserHistory), apiMiddleware, logger),
    DevTools.instrument()
  )(createStore);

  const store = createStoreWithMiddleware(reducer, initialState);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('src/reducers/index', () => {
      store.replaceReducer(require('src/reducers').default);
    });
  }

  return store;
};
