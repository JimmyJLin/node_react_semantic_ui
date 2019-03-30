import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Icon } from 'semantic-ui-react'
import ImageGallery from 'react-image-gallery'

import './_leftColumn.scss'


class LeftColumn extends Component {

  state = {
    product: {},
    slideImages: []
  }

  async componentWillMount(){
    await this.setState({
      product: this.props.product
    })
    console.log('product images----', this.props.product.images)
    let ImgContainer =[]
    await this.props.product.images.map((e) => {
      const { src } = e
      const image = {
        original: src,
        thumbnail: src
      }
      return ImgContainer.push(image)
    })
    await this.setState({
      slideImages: ImgContainer
    })

  }

  renderingImages(){
    const { images } = this.state.product
    console.log('product', images)

    const slideImages = images.map((e) => {
      console.log('e---', e)
      const { id, src } = e
      return(
        <div key={id} id="carousel_container">
          <div id="carousel_img">
            <Image src={src} alt=""/>
          </div>
        </div>
      )
    })

    return slideImages;
  }

  renderingImageGallery(){
    const { slideImages } = this.state
    console.log('slidesToShow', slideImages)
    if( _.isEmpty(slideImages) === false ) {
      return(
        <ImageGallery
          items={slideImages}
          useBrowserFullScreen={true}
          showPlayButton={false}
          renderRightNav={this.renderRightNav}
          renderLeftNav={this.renderLeftNav}
        />
      )
    }
  }

  renderLeftNav(onClick, disabled) {
    return (
      <Icon
        name="chevron left"
        size="big"
        className='image-gallery-custom-left-nav'
        disabled={disabled}
        onClick={onClick}/>
    )
  }

  renderRightNav(onClick, disabled) {
    return (
      <Icon
        name="chevron right"
        size="big"
        className='image-gallery-custom-right-nav'
        disabled={disabled}
        onClick={onClick}/>
    )
  }

  render(){
    return(
      <div id="leftColumn">
        {this.renderingImageGallery()}
      </div>
    )
  }
};

function mapStateToProps({ product }) {
  return { product };
}

export default connect(mapStateToProps, {  })(LeftColumn);
