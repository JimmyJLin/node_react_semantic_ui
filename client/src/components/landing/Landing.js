import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import './_landing.scss'

import ImageWithText from '../body/imagewithtext/ImageWithText';
import DoubleImageWithText from '../body/doubleimagewithtext/DoubleImageWithText';
import Collections from '../body/collection/Collections';
import Testimonial from '../body/testimonials/Testimonial';
import PhotoGallery from '../body/photogallery/PhotoGallery';
import Contact from '../body/contact/Contact';
import ImgSlides from '../body/imgslider/ImgSlides';


class Landing extends Component {
  render() {
    return (
      <Container id="landing">

        <ImgSlides />

        <DoubleImageWithText />

        <ImageWithText />

        <Collections />

        <Testimonial />

        <PhotoGallery />

        <Contact />

      </Container>
    )
  }
}

export default Landing;
