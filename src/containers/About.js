import React from 'react';
import shouldComponentUpdate from 'src/utils/PureRender';

export default class About extends React.Component {

  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    return (
      <div key="About" className="about">
        <h1>Powered by:</h1>
        <div className="row">dev357</div>
      </div>
    );
  }
}
