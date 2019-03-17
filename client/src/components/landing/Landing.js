import React, { Component } from 'react';

import './_landing.scss'

// import ImageWithText from '../body/imagewithtext/ImageWithText';
// import DoubleImageWithText from '../body/doubleimagewithtext/DoubleImageWithText';
// import Collections from '../body/collection/Collections';
// import Testimonial from '../body/testimonials/Testimonial';
// import PhotoGallery from '../body/photogallery/PhotoGallery';
import Contact from '../body/contact/Contact';
import ImgSlides from '../body/imgslider/ImgSlides';
import Carousel from '../body/imgslider/Carousel';
import NewArrivals from '../shops/newArrivals/NewArrivals';

class Landing extends Component {
  render() {
    return (
      <div id="landing">

        <ImgSlides />

        <Carousel />

        <NewArrivals />


        <Contact />

      </div>
    )
  }
}

export default Landing;
