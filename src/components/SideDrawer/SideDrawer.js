import React, {Component} from 'react';
import shouldComponentUpdate from '../../utils/PureRender';

import './styles.css';

import {Link} from 'react-router';
import Divider from 'muicss/lib/react/divider';

export default class SideDrawer extends Component {
  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    const {title} = this.props;

    return (
      <div>
        <div id="drawer" className="mui--no-user-select">
          <div id="drawer-brand" className="mui--appbar-height mui--appbar-line-height">{title}</div>
          <Divider />
          <ul>
            <li>
              <strong>Examples</strong>
              <ul>
                <li><Link to="/" onClick={this.toggleDrawer}>Home</Link></li>
                <li><Link to="/counter" onClick={this.toggleDrawer}>Counter</Link></li>
                <li><Link to="/about" onClick={this.toggleDrawer}>About</Link></li>
              </ul>
            </li>
            <li>
              <strong>Category 2</strong>
              <ul>
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 1</a></li>
              </ul>
            </li>
            <li>
              <strong>Category 3</strong>
              <ul>
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 1</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
