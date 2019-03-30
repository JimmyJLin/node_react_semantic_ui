import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'semantic-ui-react'
import Carousel from './Carousel';

import './_collection.scss'

class Collection extends Component {

  state={
    collection: []
  }

  async componentDidMount(){
    await this.setState({
      collection: this.props.collection
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
            <Card.Header>{ title }</Card.Header>
            <Card.Meta>
              <span> {variants[0].price}</span>
            </Card.Meta>
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
        <Card.Group itemsPerRow={4} stackable>

          {this.renderingCollection()}

        </Card.Group>
      </div>
    )
  }
}

export default Collection;
