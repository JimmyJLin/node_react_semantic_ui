import React, { Component } from 'react';
import StickyBar from '../stickybar/StickyBar';
import DesktopNavbar from '../desktop/DesktopNavbar';

import './_header.scss'

class Header extends Component {

  render() {

    return(
      <div id="Header">
        <DesktopNavbar />
      </div>
    );
  }
}

export default Header;
