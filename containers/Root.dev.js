import React, {Component} from 'react';
import {Provider} from 'react-redux';
import ExampleApp from './ExampleApp';
import DevTools from './DevTools';

export default class Root extends Component {
  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <div>
          <div>tere</div>
          <ExampleApp />
          <DevTools />
        </div>
      </Provider>
    );
  }
}
