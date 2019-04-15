import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOneProduct, setSpinner } from '../../../actions';
import { Container, Grid } from 'semantic-ui-react'
import { Helmet } from "react-helmet";

import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import Spinner from '../../spinner/Spinner'

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

    const spinner = {
      isLoading: false
    }
    await this.props.setSpinner(spinner)

    // console.log('One Product -----', this.state.product)

  }

  renderingLeftColumn(){
    const { image } = this.state.product;
    if( _.isEmpty(image) === false ) {
      return(
        <div>
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

  renderingHelmet(){
    if( _.isEmpty(this.state.product) === false ) {
      const { title, image } = this.state.product
      return(
        <Helmet>
          <title>{title} || Allthingsfrenchie</title>
          <meta property="og:title" content={title} />
          <meta property="og:image" content={image.url} />
        </Helmet>
      )
    }
  }

  render() {
    return (
      <Container id="product">
        {this.renderingHelmet()}
        <Spinner />

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

function mapStateToProps({ product, spinner }) {
  return { product, spinner };
}

export default connect(mapStateToProps, { fetchOneProduct, setSpinner })(Product);
