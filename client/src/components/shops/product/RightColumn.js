import _ from 'lodash';
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
  constructor(props) {
    super(props);
    this.handleAddCart = this.handleAddCart.bind(this);
  }

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
    qty: "",
    variants: [],
    varians_id: ""
  }

  async componentWillMount(){
    await this.setState({
      product: this.props.product,
      variants: this.props.product.variants
    })
    console.log('One Item ======== ', this.props.product)
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

  getColor = (e, {value}) => {
    this.setState({color: value})
  }

  getQty = (e, {value}) => {
    this.setState({qty: value})
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
    // const colorExist = this.state.product.options[0].values
    const colors = this.state.product.options.filter((arr) => {return arr.name === "Color"});
    // console.log('colorSection ======>', colors)
    if(colors.length > 0) {
      return (
        <div>
          <h5>Color:</h5>
          <Select
            options={this.state.colorOptions}
            onChange={this.getColor}
            />
        </div>
      )
    } else {
      return (
        <div>
          <h5>Color:</h5>
          <p>One Color</p>
        </div>
      )
    }
  }

  renderColorOptions(){
    // this.setState({ colorOptions: this.state.product.options[0].values })
    // const color = this.state.product.options.filter((arr) => {return arr.name === "Color"})
    // console.log('color----', color)
    const colors = this.state.product.options.filter((arr) => {return arr.name === "Color"});

    if( _.isEmpty(colors) === false ) {
      colors[0].values.map((e) => {
        // console.log('e', e)
        const data = {
          key: e,
          text: e,
          value: e
        }
        return this.state.colorOptions.push(data)
      })
    }
  }

  renderSizeOptions(){
    let sizeOptions = []

    const sizes = this.state.product.options.filter((arr) => {return arr.name === "Size"});

    // console.log('sizes----xxxxx', sizes)
    if( _.isEmpty(sizes) === false ) {

      if(sizes[0].values.includes("XS") === true || sizes[0].values.includes("XSmall") === true){
        sizeOptions.push({size: 0, name: "XS", type: "xsmallActive"})
      }
      if(sizes[0].values.includes("S") === true || sizes[0].values.includes("Small") === true){
        sizeOptions.push({size: 1, name: "S", type: "smallActive"})
      }
      if(sizes[0].values.includes("M") === true || sizes[0].values.includes("Medium") === true){
        sizeOptions.push({size: 2, name: "M", type: "mediumActive"})
      }
      if(sizes[0].values.includes("L") === true || sizes[0].values.includes("Large") === true){
        sizeOptions.push({size: 3, name: "L", type: "largeActive"})
      }
      if(sizes[0].values.includes("XL") === true || sizes[0].values.includes("Xlarge") === true){
        sizeOptions.push({size: 4, name: "XL", type: "xlargeActive"})
      }
      if(sizes[0].values.includes("2XL") === true || sizes[0].values.includes("XXLarge") === true){
        sizeOptions.push({size: 5, name: "2XL", type: "xxlargeActive"})
      }
    }

    this.setState({ sizesContainer: sizeOptions})
    // console.log("sizesContainer----", this.state.sizesContainer)
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

  renderingAvailableSize(){
    const xsSize = this.state.sizesContainer.filter((arr) => {return arr.name === "XS"})
    const sSize = this.state.sizesContainer.filter((arr) => {return arr.name === "S"})
    const mSize = this.state.sizesContainer.filter((arr) => {return arr.name === "M"})
    const lSize = this.state.sizesContainer.filter((arr) => {return arr.name === "L"})
    const xlSize = this.state.sizesContainer.filter((arr) => {return arr.name === "XL"})
    const xxlSize = this.state.sizesContainer.filter((arr) => {return arr.name === "2xl"})
    // console.log('this.state.sizesContainer', this.state.sizesContainer)
    if(this.state.sizesContainer.length > 0) {
      return (
        <ul id="variants">
          {_.isEmpty(xsSize) === false ? <li className={`size ${this.state.xsmallActive ? 'active' : ""}`} data-value="0" onClick={ (e)=> this.handleSetXSmallActive(e) }>XS</li> : "" }
          { _.isEmpty(sSize) === false ? <li className={`size ${this.state.smallActive ? 'active' : ""}`} data-value="1" onClick={ (e)=> this.handleSetSmallActive(e) }>S</li> : ""}
          { _.isEmpty(mSize) === false ? <li className={`size ${this.state.mediumActive ? 'active' : ""}`} value="2" onClick={ (e)=> this.handleSetMediumActive(e) }>M</li> : ""}
          { _.isEmpty(lSize) === false ? <li className={`size ${this.state.largeActive ? 'active' : ""}`} value="3" onClick={ (e)=> this.handleSetLargeActive(e) }>L</li> : ""}
          { _.isEmpty(xlSize) === false ? <li className={`size ${this.state.xlargeActive ? 'active' : ""}`} value="4" onClick={ (e)=> this.handleSetXlargeActive(e) }>XL</li> : ""}
          { _.isEmpty(xxlSize) === false ? <li className={`size ${this.state.xxlargeActive ? 'active' : ""}`} value="5" onClick={ (e)=> this.handleSetXxlargeActive(e) }>2XL</li> : ""}
        </ul>
      )
    }
  }

  renderingSizeSection(){
    const sizes = this.state.product.options.filter((arr) => {return arr.name === "Size"});
    // console.log('sizes', sizes)

    if( _.isEmpty(sizes) === true ) {
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
          { this.renderingAvailableSize() }
        </div>
      )
    }

  }

  handleAddCart(){

    let title = ""

    const size = this.state.selectedSize
    const color = this.state.color
    if(_.isEmpty(this.state.color) === true) {
      // console.log("YESS")
      title = this.state.selectedSize
      // console.log('title', title)
    } else {
      // console.log("NOOOO")
      title = this.state.color + ' / ' + this.state.selectedSize
      // console.log('title', title)

    }

    let variant_obj = this.state.variants.filter((arr) => {return arr.title.includes(size) && arr.title.includes(color)})

    // console.log('variant_obj -----', variant_obj)

    const shoppingCartData = {
      varians_id: _.isEmpty(variant_obj) === true ? "" : variant_obj[0].id,
      color: this.state.color,
      qty: this.state.qty,
      size: this.state.selectedSize
    }
    console.log('shoppingCartData', shoppingCartData)
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
          <Button onClick={this.handleAddCart} className="AddToCartButton" animated="fade" fluid color="black">
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
