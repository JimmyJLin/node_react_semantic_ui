import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import DesktopNavbar from '../desktop/DesktopNavbar';
import MobileNavbar from '../mobile/MobileNavbar';
import getWidth from '../../../middlewares/getWidth';

import './_header.scss'

class Header extends Component {
  state = {mobileSize: false};

  async componentDidMount() {
    await this.mobileSize();
  };

  mobileSize(){
    if (getWidth() < '767') {
      return this.setState({ mobileSize: true })
    } else {
      return this.setState({ mobileSize: false })
    }
  }

  renderNavbar(){

    switch(this.state.mobileSize) {
      case true:
        return <MobileNavbar />
      default:
        return <DesktopNavbar />
    }
  }

  render() {

    return(
      <div id="Header">

        <MediaQuery query="(min-device-width: 768px)">
          <DesktopNavbar />
        </MediaQuery>

        <MediaQuery query="(max-device-width: 767px)">
          <MobileNavbar />
        </MediaQuery>

      </div>
    );
  }
}

export default Header;
