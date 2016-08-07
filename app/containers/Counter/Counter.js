import React, {Component} from 'react';
import {connect} from 'react-redux';
import shouldComponentUpdate from 'utils/PureRender';

import {increment, decrement} from 'redux/modules/counter';
import styles from './styles.css';

import { Button } from 'react-toolbox/lib/button';

@connect(
  state => ({...state.counter}),
  {increment, decrement})
export default class Counter extends Component {
  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    const {count, increment, decrement} = this.props;

    return (
      <div>
        <Button className={styles.fab} icon="remove" floating accent onClick={decrement}/>
        <p>{count}</p>
        <Button icon="add" floating accent onClick={increment}/>
      </div>
    );
  }
}
