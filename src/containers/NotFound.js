import React, {Component} from 'react';
import shouldComponentUpdate from 'src/utils/PureRender';

export default class NotFound extends Component {
  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    return (
      <div key="404" className="not-found">
        <h1>404</h1>
      </div>
    )
  }
}
