import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ExampleApp from './ExampleApp';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <ExampleApp />
      </Provider>
    );
  }
}
