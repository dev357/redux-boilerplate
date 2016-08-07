import React, {Component} from 'react';
import shouldComponentUpdate from '../utils/PureRender';

export default class About extends Component {
  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    return (
      <div>
        <div className="content" col={10} tablet={12} offsetDesktop={1} shadow={4}>
          <h4>Powered by:</h4>
          <div>React, Redux, CSS Modules</div>
        </div>
      </div>
    );
  }
}
