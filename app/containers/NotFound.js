import React, {Component} from 'react';
import shouldComponentUpdate from 'utils/PureRender';

export default class NotFound extends Component {
  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    return (
      <div key="404" className="not-found">
        <h1>404 - Not Found</h1>
      </div>
    )
  }
}
