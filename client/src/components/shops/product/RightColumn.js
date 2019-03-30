import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Select, Button, Icon, Divider, Rating, Accordion } from 'semantic-ui-react'

import Shipping from '../../legal/Shipping'

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

class RightColumn extends Component {

  state = {
    product: {},
    activeIndex: "",
    xsmallActive: false,
    smallActive: false,
    mediumActive: false,
    largeActive: false,
    xlargeActive: false,
    xxlargeActive: false,
    checked: false,
    selectedSize: "",
    color: "",
    colorOptions: [],
    sizesContainer: [],
    qty: ""
  }

  async componentWillMount(){
    await this.setState({
      product: this.props.product
    })

    await this.renderColorOptions()
    await this.renderSizeOptions()
  }

  toggle = () => this.setState({ checked: !this.state.checked })

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  renderSizeOptions(){
    if (this.state.product.options.length > 1) {
      if( typeof this.state.product.options[1].values !== "undefined") {

      } else {
        const sizes = this.state.product.options[1].values;
        if(sizes.includes("XS")){
          this.state.sizesContainer.push({size: 0, name: "XS", type: "xsmallActive"})
        }
        if(sizes.includes("S")){
          this.state.sizesContainer.push({size: 1, name: "S", type: "smallActive"})
        }
        if(sizes.includes("M")){
          this.state.sizesContainer.push({size: 2, name: "M", type: "mediumActive"})
        }
        if(sizes.includes("L")){
          this.state.sizesContainer.push({size: 3, name: "L", type: "largeActive"})
        }
        if(sizes.includes("XL")){
          this.state.sizesContainer.push({size: 4, name: "XL", type: "xlargeActive"})
        }
        if(sizes.includes("2XL")){
          this.state.sizesContainer.push({size: 5, name: "2XL", type: "xxlargeActive"})
        }
      }
    }

    // console.log("sizesContainer----", this.state.sizesContainer)
  }

  renderColorOptions(){
    // this.setState({ colorOptions: this.state.product.options[0].values })
    const colors = this.state.product.options[0].values;
    // console.log('colors', colors)
    colors.map((e) => {
      // console.log('e', e)
      const data = {
        key: e,
        text: e,
        value: e
      }
      return this.state.colorOptions.push(data)
    })
    // console.log('this.state.colorOptions', this.state.colorOptions)
  }

  handleSizeChange(size){
    switch(size) {
      case 0:
        return this.setState({ selectedSize: "XS" });
      case 1:
        return this.setState({ selectedSize: "S" });
      case 2:
          return this.setState({ selectedSize: "M" });
      case 3:
        return this.setState({ selectedSize: "L" });
      case 4:
        return this.setState({ selectedSize: "XL" });
      case 5:
        return this.setState({ selectedSize: "2XL" });
      default:
        return ""
    }
  }

  handleSetXSmallActive(e) {
    const size = e.target.value
    this.setState({ xsmallActive: !this.state.xsmallActive, smallActive: false, mediumActive: false, largeActive: false, xlargeActive: false, xxlargeActive: false })
    this.handleSizeChange(size)
  }

  handleSetSmallActive(e) {
    const size = e.target.value
    this.setState({ xsmallActive: false, smallActive: !this.state.smallActive, mediumActive: false, largeActive: false, xlargeActive: false, xxlargeActive: false })
    this.handleSizeChange(size)
  }

  handleSetMediumActive(e) {
    const size = e.target.value
    this.setState({ xsmallActive: false, smallActive: false, mediumActive: !this.state.mediumActive, largeActive: false, xlargeActive: false, xxlargeActive: false })
    this.handleSizeChange(size)
  }

  handleSetLargeActive(e) {
    const size = e.target.value
    this.setState({ xsmallActive: false, smallActive: false, mediumActive: false, largeActive: !this.state.largeActive, xlargeActive: false, xxlargeActive: false })
    this.handleSizeChange(size)
  }

  handleSetXlargeActive(e) {
    const size = e.target.value
    this.setState({ xsmallActive: false, smallActive: false, mediumActive: false, largeActive: false, xlargeActive: !this.state.xlargeActive, xxlargeActive: false })
    this.handleSizeChange(size)
  }

  handleSetXxlargeActive(e) {
    const size = e.target.value
    this.setState({ xsmallActive: false, smallActive: false, mediumActive: false, largeActive: false, xlargeActive: false, xxlargeActive: !this.state.xxlargeActive })
    this.handleSizeChange(size)
  }

  renderingColorSection(){
    // console.log("this.state.colorOptions", this.state.product.options[0].values)
    const colorExist = this.state.product.options[0].values
    if(colorExist[0] === "Default Title") {
    } else {
      return (
        <div>
          <h5>Color:</h5>
          <Select
          options={this.state.colorOptions}
          onChange={this.getColor}
          />
        </div>
      )
    }
  }

  renderingSizeSection(){
    const sizeExist = this.state.product.options[0].values
    if(sizeExist[0] === "Default Title") {
      return (
        <div>
          <h5>Size:</h5>
          <p>One Size</p>
        </div>
      )
    } else {
      return (
        <div>
          <h5>Size:</h5>
          <ul id="variants">
            <li className={`size ${this.state.xsmallActive ? 'active' : ""}`} data-value="0" onClick={ (e)=> this.handleSetXSmallActive(e) }>XS</li>
            <li className={`size ${this.state.smallActive ? 'active' : ""}`} data-value="1" onClick={ (e)=> this.handleSetSmallActive(e) }>S</li>
            <li className={`size ${this.state.mediumActive ? 'active' : ""}`} value="2" onClick={ (e)=> this.handleSetMediumActive(e) }>M</li>
            <li className={`size ${this.state.largeActive ? 'active' : ""}`} value="3" onClick={ (e)=> this.handleSetLargeActive(e) }>L</li>
            <li className={`size ${this.state.xlargeActive ? 'active' : ""}`} value="4" onClick={ (e)=> this.handleSetXlargeActive(e) }>XL</li>
            <li className={`size ${this.state.xxlargeActive ? 'active' : ""}`} value="5" onClick={ (e)=> this.handleSetXxlargeActive(e) }>2XL</li>
          </ul>
        </div>
      )
    }
  }

  render() {
    const { title, variants, body_html } = this.state.product;
    const { activeIndex } = this.state

    return (
      <div>
        <h2 className="productTitle">{ title }</h2>
        <h5 className="productPrice">$ { variants[0].price }</h5>

        <Rating id="rating" maxRating={5} defaultRating={5} icon='heart' size='large' disabled/>

        {/* Colors */}
        {this.renderingColorSection()}


        {/* Size */}
        {this.renderingSizeSection()}


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

        {/* Product Details */}
        <div id="productDetails">
          <Divider className="divider" />

          <Accordion styled>
            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
              Details
              <Icon id="accordionIcon" name='dropdown'/>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <div dangerouslySetInnerHTML={{ __html: body_html }}>
              </div>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
              <Icon id="accordionIcon" name='dropdown' />
              Shipping + Returns
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <Shipping />
            </Accordion.Content>
          </Accordion>

          <Divider className="divider" />
        </div>

      </div>
    )
  }
};

function mapStateToProps({ product }) {
  return { product };
}

export default connect(mapStateToProps, {  })(RightColumn);
