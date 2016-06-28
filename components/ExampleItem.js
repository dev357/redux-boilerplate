import React, {Component,PropTypes} from 'react';
import classnames from 'classnames';
import TextInput from './TextInput';

export default class ExampleItem extends Component {
  static propTypes = {
    example: PropTypes.object.isRequired
  };

  render() {
    const {todo} = this.props;

    return (
      <li>
        <p>{todo.text}</p>
      </li>
    )
  }
}