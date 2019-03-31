import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react'
import MediaQuery from 'react-responsive';
import Carousel from './Carousel';

import './_collection.scss'

class Collection extends Component {

  state={
    collection: []
  }

  async componentDidMount(){
    await this.setState({
      collection: this.props.collection,
    })
    // console.log('Collection -----', this.state.collection)
  }

  renderingCollection(){

    const { collection } = this.state

    const renderingCollection = collection.map((e) => {
      const { id, title, variants, images, handle } = e
      return(
        <Card
          key={id} as={NavLink}
         to={`/products/${handle}/${id}`}
        >
          <Carousel data={images}/>

          <Card.Content>
            <div id="title">{ title }</div>
            <div id="price"> $ {variants[0].price} </div>
            {/* <Card.Description>Matthew is a musician living in Nashville.</Card.Description>  */}
          </Card.Content>
        </Card>
      )
    })

    return renderingCollection
  }

  renderingMobileCollection(){

    const { collection } = this.state

    const renderingCollection = collection.map((e) => {
      const { id, title, variants, images, handle } = e
      return(
        <Card
          key={id} as={NavLink}
         to={`/products/${handle}/${id}`}
        >
          <Image src={images[0].src} />
          <Card.Content>
            <div id="title">{ title }</div>
            <div id="price"> $ {variants[0].price} </div>
            {/* <Card.Description>Matthew is a musician living in Nashville.</Card.Description>  */}
          </Card.Content>
        </Card>
      )
    })

    return renderingCollection
  }


  render() {

    return (
      <div id="collection">

        <MediaQuery query="(min-device-width: 1024px)">
          <Card.Group itemsPerRow={4}>
            {this.renderingCollection()}
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
