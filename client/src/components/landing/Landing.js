import React, { Component } from 'react';

import './_landing.scss'

// import Contact from '../body/contact/Contact';
import ImgSlides from '../body/imgslider/ImgSlides';
import NewArrivals from '../shops/newArrivals/NewArrivals';
import Cart from '../checkout/Cart';
import Blogs from '../blogs/Blogs';
import Instagram from '../instagram/Instagram';

class Landing extends Component {

  async componentWillMount(){
    const allthingsfrenchieId = {
      clientId: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    }

    if(localStorage.getItem("allthingsfrenchieId") === null) {
      await localStorage.setItem('allthingsfrenchieId', JSON.stringify(allthingsfrenchieId))
    }

  }

  render() {
    return (
      <div id="landing">

        <ImgSlides />

        <NewArrivals />

        <Blogs />

        <Instagram />

        <Cart />

      </div>
    )
  }
}

export default Landing;
