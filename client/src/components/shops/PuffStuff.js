import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react'
import { fetchPuffStuff, setSpinner } from '../../actions';

import Collection from './collection/Collection';
import Spinner from '../spinner/Spinner'

import './_shops.scss'

class PuffStuff extends Component {

  state={
    collection: []
  }

  async componentDidMount(){

    await this.props.fetchPuffStuff()
    await this.setState({
      collection: this.props.puffStuff
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
      <Container id="puffStuff">
        <h1>Puff Stuff</h1>
        <Spinner />

        {this.renderingCollection()}
      </Container>
    )
  }
}

function mapStateToProps({ puffStuff, spinner }) {
  return { puffStuff, spinner };
}

export default connect(mapStateToProps, { fetchPuffStuff, setSpinner })(PuffStuff);
