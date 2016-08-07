import React, {Component} from 'react';
import shouldComponentUpdate from '../../utils/PureRender';

import styles from './styles.css';

export default class About extends Component {
  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    const {title, toggleSidebar} = this.props;

    const renderTitle = title ? <span className={styles.title}>{title}</span> : null;

    return (
      <header className={styles.header}>
        <a
          className={styles.drawerToggle}
          onClick={() => toggleSidebar()}
        >
          ☰
        </a>
        {renderTitle}
      </header>
    )
  }
}
