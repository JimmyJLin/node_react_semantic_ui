import React, {Component} from 'react';
import Sliders from 'react-slick';
import LazyLoad from 'react-lazyload';

import './_carousel.scss'

class Carousel extends Component {
  state={
    images: []
  }
  async componentDidMount(){
    await this.setState({
      images: this.props.data
    })
  }

  renderingImages(){
    const slideImages = this.state.images.map((e) => {
      const { id, src } = e
      return(
        <div key={id} id="carousel_container">
          <div id="carousel_img">
            <LazyLoad once>
              <img src={src} alt=""/>
            </LazyLoad>
          </div>
        </div>
      )
    })

    return slideImages;
  }
  render(){
    const settings ={
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <div id="carousel">
        <Sliders {...settings}>
          {this.renderingImages()}
        </Sliders>
      </div>
    );
  }
};

export default Carousel;
