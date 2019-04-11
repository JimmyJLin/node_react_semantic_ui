import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Select, Button, Icon, Divider, Rating, Accordion } from 'semantic-ui-react'
import { addShoppingCart } from '../../../actions';

import Shipping from '../../legal/Shipping'
import Cart from '../../checkout/Cart';

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

    this.state = {
      product: {},
      activeIndex: "",
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
      qty: 1,
      variants: [],
      varians_id: "",
      isCartOpen: false,
    }

    this.handleAddCart = this.handleAddCart.bind(this);
    this.handleCartClose = this.handleCartClose.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
  }



  async componentWillMount(){
    await this.setState({
      product: this.props.product,
      variants: this.props.product.variants
    })
    console.log('One Item ======== ', this.props.product)
    console.log("RightColumn componentWillMount --------", this.props)
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


  handleSetSmallActive(e) {
    const size = e.target.value
    // console.log('PROBLEM ---handleSetSmallActive-0000', size)
    this.setState({ xsmallActive: false, smallActive: !this.state.smallActive, mediumActive: false, largeActive: false, xlargeActive: false, xxlargeActive: false })
    // console.log('handleSetSmallActive-state', !this.state.smallActive)

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
    const colors = this.state.product.options.filter((arr) => {return arr.name === "Color"});
    const colorOptions = this.state.colorOptions
    // console.log('colorOptions ======>', colorOptions[0])
    if( _.isEmpty(colors) === false ) {
      return (
        <div>
          <h5>Color:</h5>
          <Select
            options={colorOptions}
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
    if( _.isEmpty(sizes) === false ) {

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
  }

  handleSizeChange(size){
    switch(size) {
      case 0:
        return this.setState({ selectedSize: "S" });
      case 1:
          return this.setState({ selectedSize: "M" });
      case 2:
        return this.setState({ selectedSize: "L" });
      case 3:
        return this.setState({ selectedSize: "XL" });
      case 4:
        return this.setState({ selectedSize: "2XL" });
      default:
        return ""
    }
  }

  renderingAvailableSize(){
    const sSize = this.state.sizesContainer.filter((arr) => {return arr.name === "S"})
    const mSize = this.state.sizesContainer.filter((arr) => {return arr.name === "M"})
    const lSize = this.state.sizesContainer.filter((arr) => {return arr.name === "L"})
    const xlSize = this.state.sizesContainer.filter((arr) => {return arr.name === "XL"})
    const xxlSize = this.state.sizesContainer.filter((arr) => {return arr.name === "2xl"})
    // console.log('this.state.sizesContainer', this.state.sizesContainer)

    if(this.state.sizesContainer.length > 0) {
      return (
        <ul id="variants">
          { _.isEmpty(sSize) === false ? <li className={`size ${this.state.smallActive ? 'active' : ""}`} value="0" onClick={ (e)=> this.handleSetSmallActive(e, console.log('e---xxxxxx', e.target.value)) }>S</li> : ""}

          { _.isEmpty(mSize) === false ? <li className={`size ${this.state.mediumActive ? 'active' : ""}`} value="1" onClick={ (e)=> this.handleSetMediumActive(e) }>M</li> : ""}

          { _.isEmpty(lSize) === false ? <li className={`size ${this.state.largeActive ? 'active' : ""}`} value="2" onClick={ (e)=> this.handleSetLargeActive(e) }>L</li> : ""}

          { _.isEmpty(xlSize) === false ? <li className={`size ${this.state.xlargeActive ? 'active' : ""}`} value="3" onClick={ (e)=> this.handleSetXlargeActive(e) }>XL</li> : ""}

          { _.isEmpty(xxlSize) === false ? <li className={`size ${this.state.xxlargeActive ? 'active' : ""}`} value="4" onClick={ (e)=> this.handleSetXxlargeActive(e) }>2XL</li> : ""}
        </ul>
      )
    }
  }

  renderingSizeSection(){
    const sizes = this.state.product.options.filter((arr) => {return arr.name === "Size"});
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

  handleCartOpen() {
    this.setState({
      isCartOpen: true,
    });
  }

  handleCartClose() {
    this.setState({
      isCartOpen: false,
    });
  }

  async handleAddCart(e){
    e.preventDefault()
    const size = this.state.selectedSize
    const color = this.state.color
    const name = this.state.product.title
    const imgUrl = this.state.product.image.src
    const price = this.state.product.variants[0].price

    // const title = _.isEmpty(this.state.color) === true ?  this.state.selectedSize : this.state.color + ' / ' + this.state.selectedSize;

    const variant_obj = this.state.variants.filter((arr) => {return arr.title.includes(size) && arr.title.includes(color)})

    const allthingsfrenchieId = {
      clientId: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    }

    if(localStorage.getItem("allthingsfrenchieId") === null) {
      await localStorage.setItem('allthingsfrenchieId', JSON.stringify(allthingsfrenchieId))
    }

    const clientId = JSON.parse(localStorage.getItem("allthingsfrenchieId"))

    const shoppingCartData = {
      clientId: clientId.clientId,
      name: name,
      imgUrl: imgUrl,
      color: color,
      price: price,
      size: size,
      varians_id: _.isEmpty(variant_obj) === true ? "" : variant_obj[0].id,
      qty: this.state.qty
    }

    // await cartData.push(shoppingCartData)
    // console.log('cartData', cartData)
    // await localStorage.setItem('shoppingCartData', JSON.stringify(cartData))
    await this.props.addShoppingCart(shoppingCartData)

    this.handleCartOpen()
  }

  render() {
    const { title, variants, body_html } = this.state.product;
    const { activeIndex } = this.state
    // console.log("QtyOption[0]", QtyOptions[0])
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
          defaultValue={QtyOptions[0].value}
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

        {/* Shopping Cart  */}
        <Cart
          isCartOpen={this.state.isCartOpen}
          handleCartClose={this.handleCartClose}
        />

      </div>
    )
  }
};

function mapStateToProps({ product, cart }) {
  return { product, cart };
}

export default connect(mapStateToProps, { addShoppingCart })(RightColumn);
