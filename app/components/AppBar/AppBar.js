import React, {Component} from 'react';
import shouldComponentUpdate from '../../utils/PureRender';

import './styles.css';

export default class About extends Component {
  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    const {title} = this.props;

    return (
      <header id="header">
        <div className="mui-appbar mui--appbar-line-height">
          <div className="mui-container-fluid">
            <a className="drawer-toggle mui--visible-xs-inline-block js-show-drawer">☰</a>
            <a className="drawer-toggle mui-hidden-xs js-hide-drawer">☰</a>
            <span className="mui--visible-xs-inline-block mui--visible-sm-inline-block">{title}</span>
          </div>
        </div>
      </header>
    )
  }
}
