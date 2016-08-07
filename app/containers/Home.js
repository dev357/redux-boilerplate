import React, {Component} from 'react';
import shouldComponentUpdate from '../utils/PureRender';

export default class Home extends Component {
  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    return (
      <div className="mui-row">
        <div className="content mui-col-md-10 mui-col-xs-12 mui-col-md-offset-1">
          <h3>HOME</h3>
        </div>
      </div>
    )
  }
}
