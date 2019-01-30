import React, { Component } from 'react';

import Mobile from './navbar/Mobile';
import Desktop from './navbar/Desktop';

class Header extends Component {

  render() {

    return(
      <div>
        <Mobile />
        <Desktop />
      </div>
    );
  }
}

export default Header;
