import React, { Component } from 'react';
import {Footer, FooterSection, FooterDropDownSection, FooterLinkList} from 'react-mdl/lib/Footer';

export default class AppFooter extends Component {
  render() {
    return (
      <Footer size="mini">
        <FooterSection type="right">
          <FooterLinkList>
            <a href="https://github.com/dev357/react-boilerplate">
              <i className="material-icons icon-text-align">link</i>
              <span className="icon-text-align"> GitHub</span>
            </a>
          </FooterLinkList>
        </FooterSection>
        <FooterSection type="left">
          <div className="mdl-logo">Created with love by dev357</div>
        </FooterSection>
      </Footer>
    );
  }
}
