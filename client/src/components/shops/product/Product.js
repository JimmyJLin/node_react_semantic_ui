import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOneProduct } from '../../../actions';

import './_product.scss'

class Product extends Component {
  state = {
    product: {}
  }
  async componentWillMount(){
    const productName = this.props.match.params;

    await this.props.fetchOneProduct(productName)
    await this.setState({
      product: this.props.product
    })
    console.log('this.state', this.state.product)
  }

  render() {
    return (
      <div id="product">
        <h1>Product</h1>
      </div>
    )
  }
}

function mapStateToProps({ product }) {
  return { product };
}

export default connect(mapStateToProps, { fetchOneProduct })(Product);
