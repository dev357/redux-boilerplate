import React, {Component} from 'react';
import shouldComponentUpdate from '../../utils/PureRender';

import styles from './styles.css';

import Collapse from 'react-collapse';

export default class ExpandableList extends Component {
  constructor() {
    super();

    this.state = {
      isOpened: false
    }
  }

  shouldComponentUpdate = shouldComponentUpdate;

  setOpened = () => {
    this.setState({isOpened: !this.state.isOpened});
  };

  render() {
    const {title, children} = this.props;
    const {isOpened} = this.state;

    return (
      <div>
        <strong onClick={this.setOpened}>
          {title}
        </strong>
        <Collapse isOpened={isOpened}>
          <ul className={styles.list}>
            {children}
          </ul>
        </Collapse>
      </div>
    );
  }
}
