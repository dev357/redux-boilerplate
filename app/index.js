import '../node_modules/muicss/lib/css/mui.css';
import './styles/main.css';

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './redux/store/index';
import Root from './containers/Root';

const history = syncHistoryWithStore(browserHistory, store);

function renderApp(RootComponent) {
  render(
    <AppContainer>
      <RootComponent store={store} history={history}/>
    </AppContainer>,
    document.getElementById('app')
  );
}

renderApp(Root);

if (module.hot) {
  module.hot.accept(
    'containers/Root',
    () => renderApp(require('containers/Root'))
  );
}
