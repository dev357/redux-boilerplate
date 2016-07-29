import React, { Component } from 'react';
import shouldComponentUpdate from '../../utils/PureRender';

import './styles.css';

import Container from 'muicss/lib/react/container';

export default class AppFooter extends Component {
  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    return (
      <footer id="footer">
        <Container fluid>
          <br/>
          Made with ♥ by dev357
        </Container>
      </footer>
    );
  }
}
