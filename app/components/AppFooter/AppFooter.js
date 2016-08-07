import React, { Component } from 'react';
import shouldComponentUpdate from '../../utils/PureRender';

import styles from './styles.css';

export default class AppFooter extends Component {
  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    return (
      <footer className={styles.footer}>
        <br/>
        Made with ♥ by <a href="https://github.com/dev357" target="_blank">dev357</a>
      </footer>
    );
  }
}
