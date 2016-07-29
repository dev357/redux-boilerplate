import React, {PropTypes, Component} from 'react';
import shouldComponentUpdate from '../../utils/PureRender';

import './styles.css';

import Container from 'muicss/lib/react/container';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import AppBar from '../../components/AppBar/AppBar';
import AppFooter from '../../components/AppFooter/AppFooter';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    const {children} = this.props;
    const title = "dev357.io";

    return (
      <div>
        <SideDrawer title={title} />
        <AppBar id="header" title={title} />
        <div id="content-wrapper">
          <Container>
            {children}
          </Container>
        </div>
        <AppFooter id="footer" />
      </div>
    );

    /*
    return (
      <Layout ref="layout" className="app" fixedHeader fixedDrawer={false}>
        <Header className="app__header" title={title}/>
        <AppDrawer layoutRef={this.state.layoutRef}  title={title} className="app__drawer"/>
        <Content component="main">{children}</Content>
        <AppFooter />
      </Layout>
    );
    */
  }
}
