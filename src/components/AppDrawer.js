import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import {Link} from 'react-router';

import {Drawer, Navigation} from 'react-mdl/lib/Layout';

export default class AppDrawer extends Component {

  toggleDrawer = () => {
    const layout = findDOMNode(this.props.layoutRef);
    if (layout) layout.MaterialLayout.toggleDrawer();
  };

  render() {
    const {title} = this.props;
    return (
      <Drawer title={title}>
        <Navigation>
          <Link to="/" onClick={this.toggleDrawer}>Home</Link>
          <Link to="/about" onClick={this.toggleDrawer}>About</Link>
        </Navigation>
      </Drawer>
    );
  }
}
