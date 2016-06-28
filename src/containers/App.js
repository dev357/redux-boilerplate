import React, {PropTypes, Component} from 'react';
import Header from '../components/Header';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  render() {
    const {location, children} = this.props;
    
    return (
      <div className="app">
        <Header location={this.props.location} />
        <main className="app__content">
          <div className="app__container">
            {this.props.children}
          </div>
        </main>
      </div>
    );
  }
}
