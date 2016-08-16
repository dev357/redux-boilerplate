import React, {Component} from 'react';
import shouldComponentUpdate from '../../utils/PureRender';

import styles from './styles.css';

import {Link, IndexLink} from 'react-router';
import ExpandableList from 'components/ExpandableList/ExpandableList';

export default class SideDrawer extends Component {
  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    const {title} = this.props;

    return (
        <div className={styles.drawer}>
          <div className={styles.drawerBrand}>{title}</div>
          <hr className={styles.divider}/>
          <ul>
            <li>
              <ExpandableList title="Examples">
                <li><Link to="/examples/home" activeClassName={styles.active}>Home</Link></li>
                <li><Link to="/examples/counter" activeClassName={styles.active}>Counter</Link></li>
                <li><Link to="/examples/about" activeClassName={styles.active}>About</Link></li>
              </ExpandableList>
            </li>
            <li>
              <ExpandableList title="Category 2">
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
              </ExpandableList>
            </li>
            <li>
              <ExpandableList title="Resources">
                <li><Link to="https://facebook.github.io/react/" target="_blank">React</Link></li>
                <li><Link to="http://redux.js.org/" target="_blank">Redux</Link></li>
                <li><Link to="https://github.com/css-modules/css-modules" target="_blank">CSS Modules</Link></li>
                <li><Link to="http://react-toolbox.com/#/" target="_blank">React Toolbox</Link></li>
              </ExpandableList>
            </li>
          </ul>
        </div>
    );
  }
}
