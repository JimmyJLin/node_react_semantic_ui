import React, { Component } from 'react';

import ImageWithText from './body/ImageWithText';
import DoubleImageWithText from './body/DoubleImageWithText';
import Collections from './body/Collections';
import Testimonial from './body/Testimonial';
import PhotoGallery from './body/PhotoGallery';
import Contact from './body/Contact';
import ImgSlides from './body/ImgSlides';


class Landing extends Component {
  render() {
    return (
      <div>

        <ImgSlides />

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
