import React, { Component } from 'react';

import './_landing.scss'

import Contact from '../body/contact/Contact';
import ImgSlides from '../body/imgslider/ImgSlides';
import NewArrivals from '../shops/newArrivals/NewArrivals';
import Cart from '../checkout/Cart';

class Landing extends Component {
  render() {
    return (
      <div id="landing">

        <ImgSlides />

        <NewArrivals />

        <Cart />

        <Contact />

      </div>
    )
  }
}

export default Landing;
