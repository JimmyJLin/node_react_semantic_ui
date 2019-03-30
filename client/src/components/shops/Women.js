import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react'
import { fetchWomen } from '../../actions';

import Collection from './collection/Collection';

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

  }

  renderingCollection(){
    const collection = this.state.collection;
    if( _.isEmpty(collection) === false ) {
      console.log('YESSS')
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
        {this.renderingCollection()}
      </Container>
    )
  }
}

function mapStateToProps({ women }) {
  return { women };
}

export default connect(mapStateToProps, { fetchWomen })(Women);
