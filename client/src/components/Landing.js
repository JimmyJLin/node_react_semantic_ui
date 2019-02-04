import React, { Component } from 'react';

import ImageWithText from './body/ImageWithText';
import DoubleImageWithText from './body/DoubleImageWithText';
import Collections from './body/Collections';
import Testimonial from './body/Testimonial';
import PhotoGallery from './body/PhotoGallery';
import Contact from './body/Contact';


class Landing extends Component {
  render() {
    return (
      <div>

        <DoubleImageWithText />

        <ImageWithText />

        <Collections />

        <Testimonial />

        <PhotoGallery />

        <Contact />

      </div>
    )
  }
}

export default Landing;
