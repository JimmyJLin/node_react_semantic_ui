import React, { Component } from 'react';

import ImageWithText from '../body/ImageWithText';
import Collections from '../body/Collections';
import Contact from '../body/Contact';

class Treatments extends Component {
  render() {
    return (
      <div>
        Treatments

        <ImageWithText />

        <Collections />

        <Contact />

      </div>
    )
  }
}

export default Treatments;
