import React, {PropTypes, Component} from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import createRoutes from 'app/routes';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <div>
      <Router history={history} routes={createRoutes()} />
    </div>
  </Provider>
);

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default Root;
