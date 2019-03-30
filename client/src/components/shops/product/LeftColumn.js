import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'semantic-ui-react'

class LeftColumn extends Component {

  state = {
    product: {}
  }

  async componentWillMount(){
    await this.setState({
      product: this.props.product
    })
  }

  render() {
    const { image } = this.state.product;

    return (
      <div>
        <Image  src={image.src} />
      </div>
    )
  }
};

function mapStateToProps({ product }) {
  return { product };
}

export default connect(mapStateToProps, {  })(LeftColumn);
