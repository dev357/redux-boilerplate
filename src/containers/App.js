import React, {PropTypes, Component} from 'react';

import {Layout, Header, Content} from 'react-mdl/lib/Layout';
import AppFooter from '../components/AppFooter';
import AppDrawer from '../components/AppDrawer';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      layoutRef: 'none'
    }
  }

  componentDidMount = () => {
    this.setState({layoutRef: this.refs.layout});
  };

  render() {
    const {location, children} = this.props;
    const title = "Simple Layout";

    return (
      <Layout ref="layout" className="app" fixedHeader fixedDrawer={false}>
        <Header className="app__header" title={title}/>
        <AppDrawer layoutRef={this.state.layoutRef}  title={title} className="app__drawer"/>
        <Content component="main">{children}</Content>
        <AppFooter />
      </Layout>
    );
  }
}
