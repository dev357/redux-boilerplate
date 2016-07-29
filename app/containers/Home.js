import React, {Component} from 'react';
import shouldComponentUpdate from '../utils/PureRender';

export default class Home extends Component {
  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    return (
      <div>
        <div className="content" col={10} tablet={12} offsetDesktop={1} shadow={4}>
          <h3>HOME</h3>
        </div>
      </div>
    )
  }
}
