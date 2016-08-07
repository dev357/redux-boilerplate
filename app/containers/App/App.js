import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import shouldComponentUpdate from '../../utils/PureRender';

import styles from './styles.css';
import {setSidebarDocked, setSidebarOpened, setMQL} from 'redux/modules/sidebar';

import Sidebar  from 'react-sidebar';
import SideDrawer from 'components/SideDrawer/SideDrawer';
import AppBar from 'components/AppBar/AppBar';
import AppFooter from 'components/AppFooter/AppFooter';

@connect(
  state => ({...state.sidebar}),
  {setSidebarDocked, setSidebarOpened, setMQL})
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  componentWillMount = () => {
    const mql = window.matchMedia(`(min-width: 800px)`);
    mql.addListener(this.mediaQueryChanged);
    this.props.setMQL(mql);
    this.props.setSidebarDocked(mql.matches);
    this.props.setSidebarOpened(mql.matches);
  };

  componentWillUnmount = () => {
    this.props.mql.removeListener(this.mediaQueryChanged());
  };

  shouldComponentUpdate = shouldComponentUpdate;

  onSetSidebarOpen = (open) => {
    this.props.setSidebarOpened(open);
  };

  mediaQueryChanged = () => {
    this.props.setSidebarDocked(this.props.mql.matches);
    this.props.setSidebarOpened(this.props.mql.matches);
  };

  render() {
    const {children, isDrawerDocked, isDrawerOpened, setSidebarOpened} = this.props;
    const title = "dev357.io";

    return (
      <div>
        <Sidebar
          sidebar={<SideDrawer title={title}/>}
          open={isDrawerOpened}
          docked={isDrawerDocked}
          onSetOpen={this.onSetSidebarOpen}
          sidebarClassName={styles.sidebar}
        >
          <div className={styles.content}>
            <AppBar
              title={isDrawerDocked ? '' : title}
              toggleSidebar={setSidebarOpened}
            />
            <section>
              {children}
            </section>
            <AppFooter />
          </div>
        </Sidebar>
      </div>
    );
  }
}
