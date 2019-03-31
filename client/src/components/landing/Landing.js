import React, { Component } from 'react';

import './_landing.scss'

import Contact from '../body/contact/Contact';
import ImgSlides from '../body/imgslider/ImgSlides';
import NewArrivals from '../shops/newArrivals/NewArrivals';

class Landing extends Component {
  render() {
    return (
      <div id="landing">

        <ImgSlides />

        <NewArrivals />

        <Contact />

      </div>
    )
  }
}

export default Landing;
