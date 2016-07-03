import React, {Component} from 'react';
import shouldComponentUpdate from 'src/utils/PureRender';

export default class ExampleListItem extends Component {
  shouldComponentUpdate = shouldComponentUpdate;
  render() {
    const {text} = this.props;
    return(
      <li>{text}</li>
    )
  }
}
