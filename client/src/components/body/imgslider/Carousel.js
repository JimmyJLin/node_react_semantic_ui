import React, {Component} from 'react';
import Sliders from 'react-slick';

import './_carousel.scss'
import carouselOne from './images/carousel-1.png'
import carouselTwo from './images/carousel-2.png'
import carouselThree from './images/carousel-3.png'

class Carousel extends Component {
  render(){
    const settings ={
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <div id="carousel">
        <Sliders {...settings}>
          <div id="carousel_container">
            <div id="carousel_img">
              <img src={carouselOne} alt=""/>
            </div>
            <div id="carousel_body">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div id="carousel_container">
            <div id="carousel_img">
              <img src={carouselTwo} alt=""/>
            </div>
            <div id="carousel_body">
              <h3>Second slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div id="carousel_container">
            <div id="carousel_img">
              <img src={carouselThree} alt=""/>
            </div>
            <div id="carousel_body">
              <h3>Third slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
        </Sliders>
      </div>
    );
  }
};

export default Carousel;
