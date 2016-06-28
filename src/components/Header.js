import React, {PropTypes, Component} from 'react';
import shouldComponentUpdate from 'src/utils/PureRender';

export default class Header extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  };

  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    const {location} = this.props;
    return (
      <header className='app__header'>
        <h1>{location.pathname}</h1>
      </header>
    );
  }
}
