import React, { Component } from 'react';

import ImageWithText from './body/ImageWithText';
import DoubleImageWithText from './body/DoubleImageWithText';
import Collections from './body/Collections';
import Testimonial from './body/Testimonial';
import PhotoGallery from './body/PhotoGallery';
import Gmap from './body/Gmap';


class Landing extends Component {
  render() {
    return (
      <div>

        <DoubleImageWithText />

        <ImageWithText />

        <Collections />

        <Testimonial />

        <PhotoGallery />

        <Gmap />

      </div>
    )
  }
}

export default Landing;
