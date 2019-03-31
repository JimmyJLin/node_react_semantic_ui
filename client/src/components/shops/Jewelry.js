import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react'
import { fetchJewelry, setSpinner } from '../../actions';

import Collection from './collection/Collection';
import Spinner from '../spinner/Spinner'

import './_shops.scss'

class Jewelry extends Component {

  state={
    collection: []
  }

  async componentDidMount(){

    await this.props.fetchJewelry()
    await this.setState({
      collection: this.props.jewelry
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
      <Container id="jewelry">
        <h1>Jewelry</h1>
        <Spinner />

        {this.renderingCollection()}
      </Container>
    )
  }
}

function mapStateToProps({ jewelry, spinner }) {
  return { jewelry, spinner };
}

export default connect(mapStateToProps, { fetchJewelry, setSpinner })(Jewelry);
