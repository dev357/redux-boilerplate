import React, {PropTypes, Component} from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import DevTools from 'src/components/DevTools';
import createRoutes from 'src/routes';

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  };

  render() {
    const {store, history} = this.props;
    return (
      <Provider store={store}>
        <div>
          <Router history={history} routes={createRoutes()} />
          <DevTools />
        </div>
      </Provider>
    );
  }
}
