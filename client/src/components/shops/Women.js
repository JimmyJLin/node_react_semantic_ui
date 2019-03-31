import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react'
import { fetchWomen, setSpinner } from '../../actions';

import Collection from './collection/Collection';
import Spinner from '../spinner/Spinner'

import './_shops.scss'

class Women extends Component {

  state={
    collection: []
  }

  async componentDidMount(){

    await this.props.fetchWomen()
    await this.setState({
      collection: this.props.women
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
      <Container id="women">
        <h1>Women</h1>
        <Spinner />
        
        {this.renderingCollection()}
      </Container>
    )
  }
}

function mapStateToProps({ women, spinner }) {
  return { women, spinner };
}

export default connect(mapStateToProps, { fetchWomen, setSpinner })(Women);
