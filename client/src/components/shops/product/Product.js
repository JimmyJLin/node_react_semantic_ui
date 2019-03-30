import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOneProduct } from '../../../actions';
import { Container, Grid } from 'semantic-ui-react'

import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

import './_product.scss'

class Product extends Component {
  state = {
    product: {},
  }

  async componentWillMount(){
    const productName = this.props.match.params;

    await this.props.fetchOneProduct(productName)
    await this.setState({
      product: this.props.product
    })
    console.log('One Product -----', this.state.product)

  }

  renderingLeftColumn(){
    const { image } = this.state.product;
    if( _.isEmpty(image) === false ) {
      return(
        <div id="leftColumn">
          <LeftColumn />
        </div>
      )
    }
  }

  rendeneringRightColumn(){
    if( _.isEmpty(this.state.product) === false ) {
      return(
        <Container id="rightColumn">
          <RightColumn />
        </Container>
      )
    }
  }

  render() {
    return (
      <Container id="product">

        <Grid stackable columns={2}>
          {/* Left Column */}
          <Grid.Column>
            {this.renderingLeftColumn()}
          </Grid.Column>

          {/* Left Column */}
          <Grid.Column>
            {this.rendeneringRightColumn()}
          </Grid.Column>
        </Grid>

      </Container>
    )
  }
}

function mapStateToProps({ product }) {
  return { product };
}

export default connect(mapStateToProps, { fetchOneProduct })(Product);
