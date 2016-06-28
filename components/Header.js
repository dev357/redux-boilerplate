import React, {PropTypes, Component} from 'react';
import TextInput from './TextInput';

export default class Header extends Component {
  static propTypes = {
    addExample: PropTypes.func.isRequired
  };

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addExample(text);
    }
  }

  render() {
    return (
      <header className='header'>
        <h1>Examples</h1>
        <TextInput
          newExample={true}
          onSave={::this.handleSave}
          placeholder='Insert some text'
        />
      </header>
    );
  }
}
