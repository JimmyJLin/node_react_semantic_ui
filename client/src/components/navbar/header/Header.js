import React, { Component } from 'react';
import StickyBar from '../stickybar/StickyBar';

import './_header.scss'

class Header extends Component {

  render() {

    return(
      <div id="Header">
        <StickyBar />
      </div>
    );
  }
}

export default Header;
