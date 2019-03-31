import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react'
import { fetchBag, setSpinner } from '../../actions';

import Collection from './collection/Collection';
import Spinner from '../spinner/Spinner'

import './_shops.scss'

class Bags_Accessories extends Component {

  state={
    collection: []
  }

  async componentDidMount(){

    await this.props.fetchBag()
    await this.setState({
      collection: this.props.bag
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
      <Container id="bags">
        <h1>Bag & Accesorries</h1>
        <Spinner />

        {this.renderingCollection()}
      </Container>
    )
  }
}

function mapStateToProps({ bag, spinner }) {
  return { bag, spinner };
}

export default connect(mapStateToProps, { fetchBag, setSpinner })(Bags_Accessories);
