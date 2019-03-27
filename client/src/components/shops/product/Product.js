import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOneProduct } from '../../../actions';
import { Container, Grid, Image, Select, Button, Icon } from 'semantic-ui-react'

import './_product.scss'

const QtyOptions = [
  {key: "1", text: "1", value: "1"},
  {key: "2", text: "2", value: "2"},
  {key: "3", text: "3", value: "3"},
  {key: "4", text: "4", value: "4"},
  {key: "5", text: "5", value: "5"},
  {key: "6", text: "6", value: "6"},
  {key: "7", text: "7", value: "7"},
  {key: "8", text: "8", value: "8"},
  {key: "9", text: "9", value: "9"},
  {key: "10", text: "10", value: "10"},

]
class Product extends Component {
  state = {
    product: {},
    smallActive: false,
    mediumActive: false,
    largeActive: false,
    xlargeActive: false,
    checked: false,
    selectedSize: "",
    color: "",
    colorOptions: [],
    qty: ""
  }

  async componentWillMount(){
    const productName = this.props.match.params;

    await this.props.fetchOneProduct(productName)
    await this.setState({
      product: this.props.product
    })
    console.log('this.state', this.state.product)
    this.renderColorOptions()
  }

  toggle = () => this.setState({ checked: !this.state.checked })

  renderColorOptions(){
    // this.setState({ colorOptions: this.state.product.options[0].values })
    const colors = this.state.product.options[0].values;
    console.log('colors', colors)
    colors.map((e) => {
      console.log('e', e)
      const data = {
        key: e,
        text: e,
        value: e
      }
      this.state.colorOptions.push(data)
    })
    console.log('this.state.colorOptions', this.state.colorOptions)
  }

  renderingLeftColumn(){
    const { image } = this.state.product;
    if( _.isEmpty(image) === false ) {
      return(
        <div id="leftColumn">
          <Image  src={image.src} />
        </div>
      )
    }
  }

  getColor = async (e, {value}) => {
    await this.setState({color: value})
  }

  getQty = async (e, {value}) => {
    await this.setState({qty: value})
  }

  handleSizeChange(size){
    switch(size) {
      case 0:
        return this.setState({ selectedSize: "Small" });
      case 1:
          return this.setState({ selectedSize: "Medium" });
      case 2:
        return this.setState({ selectedSize: "Large" });
      case 3:
        return this.setState({ selectedSize: "Xlarge" });
      default:
        return ""
    }
  }

  handleSetSmallActive(e) {
    const size = e.target.value
    this.setState({ smallActive: !this.state.smallActive, mediumActive: false, largeActive: false, xlargeActive: false })
    this.handleSizeChange(size)
  }

  handleSetMediumActive(e) {
    const size = e.target.value
    this.setState({ smallActive: false, mediumActive: !this.state.mediumActive, largeActive: false, xlargeActive: false })
    this.handleSizeChange(size)
  }

  handleSetLargeActive(e) {
    const size = e.target.value
    this.setState({ smallActive: false, mediumActive: false, largeActive: !this.state.largeActive, xlargeActive: false })
    this.handleSizeChange(size)
  }

  handleSetXlargeActive(e) {
    const size = e.target.value
    this.setState({ smallActive: false, mediumActive: false, largeActive: false, xlargeActive: !this.state.xlargeActive })
    this.handleSizeChange(size)
  }




  rendeneringRightColumn(){
    const { title, variants } = this.state.product;
    if( _.isEmpty(this.state.product) === false ) {
      return(
        <Container id="rightColumn">
          <h2>{ title }</h2>
          <h5>$ { variants[0].price }</h5>

          {/* Colors */}
          <h5>Color:</h5>
          <Select
            options={this.state.colorOptions}
            onChange={this.getColor}
          />

          {/* Size */}
          <h5>Size:</h5>
          <ul id="variants">
            <li className={`size ${this.state.smallActive ? 'active' : ""}`} data-value="0" onClick={ (e)=> this.handleSetSmallActive(e) }>S</li>
            <li className={`size ${this.state.mediumActive ? 'active' : ""}`} value="1" onClick={ (e)=> this.handleSetMediumActive(e) }>M</li>
            <li className={`size ${this.state.largeActive ? 'active' : ""}`} value="2" onClick={ (e)=> this.handleSetLargeActive(e) }>L</li>
            <li className={`size ${this.state.xlargeActive ? 'active' : ""}`} value="3" onClick={ (e)=> this.handleSetXlargeActive(e) }>XL</li>
          </ul>

          {/* Qty */}
          <h5>Qty:</h5>
          <Select
            options={QtyOptions}
            onChange={this.getQty}
          />

          <Grid.Row >
            <Button className="AddToCartButton" animated="fade" fluid color="black">
              <Button.Content visible>Add to Cart</Button.Content>
              <Button.Content hidden>
                <Icon name='shop' />
              </Button.Content>
            </Button>
          </Grid.Row>

        </Container>
      )
    }
  }

  render() {
    return (
      <Container id="product">
        <h1>Product</h1>

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

function mapStateToProps({ product }) {
  return { product };
}

export default connect(mapStateToProps, { fetchOneProduct })(Product);
