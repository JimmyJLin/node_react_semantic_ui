import React, { Component } from 'react';

import ImageWithText from '../body/ImageWithText';
import Collections from '../body/Collections';
import Contact from '../body/Contact';

class Skincare extends Component {
  render() {
    return (
      <div>
        Skincare

        <ImageWithText />

        <Collections />

        <Contact />

      </div>
    )
  }
}

export default Skincare;
