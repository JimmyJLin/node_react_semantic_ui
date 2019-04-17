import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './_notFoundPage.scss'

class NotFoundPage extends Component {

  render() {
    return (
      <div id="pageNotFound">
        <h1>Sorry</h1>
        <h3>something went wrong on our end</h3>
        <h4>Please go back and try again or go to <Link className="onHoverItem" to="/">Allthingsfrenchie's home page</Link></h4>
      </div>
    )
  }
}

export default NotFoundPage;
