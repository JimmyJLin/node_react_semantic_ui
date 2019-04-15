import _ from 'lodash';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import Carousel from './Carousel';
import LazyLoad from 'react-lazy-load';

import { Card, Image, } from 'semantic-ui-react'

import './_collection.scss'

class Collection extends Component {

  state={
    collection: [],
    show: false
  }

  async componentDidMount(){
    await this.setState({
      collection: this.props.collection,
    })
    // console.log('Collection -----', this.state.collection)
  }

  showImage = () => {
       this.setState({
           show: true,
       })
   }

  renderingDesktopCollection(){

    const { collection } = this.state
    // console.log('collection', collection)
    const renderingCollection = collection.map((e) => {
      const { id, product_id, title, variants, images, handle } = e
      // console.log('onSale', variants[0].compare_at_price)
      // if (_.isEmpty(variants[0].compare_at_price) === false && variants[0].compare_at_price !== null) {
      //   console.log('YESSSS')
      // } else {
      //   console.log('NOOOO')
      // }

      if( _.isEmpty(id) === true && id == null ) {
        // console.log("id-YESSSS")
        return(
          <Card
            key={product_id} as={NavLink}
            to={`/products/${handle}/${product_id}`}
          >
            <Carousel data={images}/>

            <Card.Content>
              <div id="title">{ title }</div>
              <div id="price">
                $ {variants[0].price}
                { _.isEmpty(variants[0].compare_at_price) === false && variants[0].compare_at_price !== null ? <span className="sale">$ {variants[0].compare_at_price}</span> : <span></span> }
              </div>
              {/* <Card.Description>Matthew is a musician living in Nashville.</Card.Description>  */}
            </Card.Content>
          </Card>
        )
      }

      if( _.isEmpty(product_id) === true && product_id == null ) {
        // console.log("product_id-YESSSS")

        return(
          <Card
            key={id} as={NavLink}
            to={`/products/${handle}/${id}`}
          >
            <Carousel data={images}/>

            <Card.Content>
              <div id="title">{ title }</div>
              <div id="price">
                $ {variants[0].price}
                { _.isEmpty(variants[0].compare_at_price) === false && variants[0].compare_at_price !== null ? <span className="sale">$ {variants[0].compare_at_price}</span> : <span></span> }
              </div>
              {/* <Card.Description>Matthew is a musician living in Nashville.</Card.Description>  */}
            </Card.Content>
          </Card>
        )
      }
    })
    return renderingCollection
  }

  renderingMobileCollection(){

    const { collection } = this.state

    const renderingCollection = collection.map((e) => {
      const { id, product_id, title, variants, images, handle } = e
      if( _.isEmpty(id) === true && id == null ) {
        return(
          <Card
          key={product_id} as={NavLink}
          to={`/products/${handle}/${product_id}`}
          >
            <LazyLoad>
              <Image src={images[0].src} />
            </LazyLoad>
            <Card.Content>
              <div id="title">{ title }</div>
              <div id="price"> $ {variants[0].price} </div>
              {/* <Card.Description>Matthew is a musician living in Nashville.</Card.Description>  */}
            </Card.Content>
          </Card>
        )
      }

      if( _.isEmpty(product_id) === true && product_id == null ) {
        return(
          <Card
          key={id} as={NavLink}
          to={`/products/${handle}/${id}`}
          >
            <LazyLoad>
              <Image src={images[0].src} />
            </LazyLoad>
            <Card.Content>
              <div id="title">{ title }</div>
              <div id="price"> $ {variants[0].price} </div>
              {/* <Card.Description>Matthew is a musician living in Nashville.</Card.Description>  */}
            </Card.Content>
          </Card>
        )
      }
    })
    return renderingCollection
  }


  render() {

    return (
      <div id="collection">

        <MediaQuery query="(min-device-width: 1024px)">
          <Card.Group itemsPerRow={4}>
            {this.renderingDesktopCollection()}
          </Card.Group>
        </MediaQuery>

        <MediaQuery query="(max-device-width: 1023px)">
          <Card.Group itemsPerRow={2}>
            {this.renderingMobileCollection()}
          </Card.Group>
        </MediaQuery>

      </div>
    )
  }
}

export default Collection;
