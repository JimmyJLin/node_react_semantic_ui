import React, { Component } from 'react';
import StickyBar from './stickybar/StickyBar';

class Header extends Component {

  render() {

    return(
      <div>
        <StickyBar />
      </div>
    );
  }
}

export default Header;
