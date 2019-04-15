import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react'
import { fetchSale, setSpinner } from '../../actions';

import Collection from './collection/Collection';
import Spinner from '../spinner/Spinner'

import './_shops.scss'

class Sales extends Component {

  state={
    collection: []
  }

  async componentDidMount(){

    await this.props.fetchSale()
    await this.setState({
      collection: this.props.sale
    })

    const spinner = {
      isLoading: false
    }
    await this.props.setSpinner(spinner)

  }

  renderingCollection(){
    const collection = this.state.collection;
    if( _.isEmpty(collection) === false ) {
      // console.log('YESSS')
      return(
        <div>
          <Collection collection={ collection }/>
        </div>
      )
    }
  }

  render() {
    return (
      <Container id="socks">
        <h1>Sales</h1>
        <Spinner />

        {this.renderingCollection()}
      </Container>
    )
  }
}

function mapStateToProps({ sale, spinner }) {
  return { sale, spinner };
}

export default connect(mapStateToProps, { fetchSale, setSpinner })(Sales);
