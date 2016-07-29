import {applyMiddleware, createStore, compose} from 'redux';
import {browserHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
import {apiMiddleware} from 'redux-api-middleware';
import createLogger from 'redux-logger';

import reducer from '../reducers';
import DevTools from 'app/components/DevTools';

const logger = createLogger({collapsed: true, duration: true});

export default (initialState = {}) => {
  const createStoreWithMiddleware = compose(
    applyMiddleware(routerMiddleware(browserHistory), apiMiddleware, logger),
    DevTools.instrument()
  )(createStore);

  const store = createStoreWithMiddleware(reducer, initialState);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('app/redux/reducers', () => {
      store.replaceReducer(require('app/redux/reducers').default);
    });
  }

  return store;
};
