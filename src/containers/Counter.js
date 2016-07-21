import React, {Component} from 'react';
import {connect} from 'react-redux';
import shouldComponentUpdate from 'src/utils/PureRender';

import {increment, decrement} from '../redux/modules/counter';

@connect(
  state => ({...state.counter}),
  {increment, decrement})
export default class Counter extends Component {
  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    const {count, increment, decrement} = this.props;

    return (
      <div>
        <button onClick={decrement}>decrement</button>
        <p>{count}</p>
        <button onClick={increment}>increment</button>
      </div>
    );

    /*
    return (
      <Grid>
        <Cell className="content" col={10} tablet={12} offsetDesktop={1} shadow={4}>
          <Grid>
            <Cell col={1} offsetDesktop={4} offsetTablet={2}
                  style={{alignItems: "center", justifyContent: "center", display: "flex"}} >
              <FABButton mini colored ripple onClick={decrement}>
                <Icon name="remove"/>
              </FABButton>
            </Cell>
            <Cell col={2} style={{alignItems: "center", justifyContent: "center", display: "flex"}}>
              <h3>
                {count}
              </h3>
            </Cell>
            <Cell col={1} style={{alignItems: "center", justifyContent: "center", display: "flex"}}>
              <FABButton mini colored ripple onClick={increment}>
                <Icon name="add"/>
              </FABButton>
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    )
    */
  }
}
