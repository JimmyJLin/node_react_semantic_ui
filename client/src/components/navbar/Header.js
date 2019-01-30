import React, { Component } from 'react';

import Mobile from './Mobile';
import Desktop from './Desktop';

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
