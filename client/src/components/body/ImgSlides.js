import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

class ImgSlides extends Component {

  render() {

    return (
      <Carousel>
        <div>
          <Image src='/images/square-image.png' />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <Image src='/images/square-image.png' />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <Image src='/images/square-image.png' />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    )
  }
}

export default ImgSlides;
