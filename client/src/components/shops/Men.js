import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react'
import { fetchMen, setSpinner } from '../../actions';

import Collection from './collection/Collection';
import Spinner from '../spinner/Spinner'

import './_shops.scss'

class Men extends Component {

  state={
    collection: []
  }

  async componentDidMount(){

    await this.props.fetchMen()
    await this.setState({
      collection: this.props.men
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
      <Container id="men">
        <h1>Sock</h1>
        <Spinner />

        {this.renderingCollection()}
      </Container>
    )
  }
}

function mapStateToProps({ men, spinner }) {
  return { men, spinner };
}

export default connect(mapStateToProps, { fetchMen, setSpinner })(Men);
