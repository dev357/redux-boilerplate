import '../node_modules/material-design-lite/dist/material.js';
import '../node_modules/material-design-lite/dist/material.css';
import './styles/main.css';

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from 'src/store/index';
import Root from 'src/containers/Root';

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
    'src/containers/Root',
    () => renderApp(require('./containers/Root'))
  );
}
