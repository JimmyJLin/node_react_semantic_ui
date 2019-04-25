import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { Container, Table, Button, Image, Icon, Grid, Divider } from 'semantic-ui-react'
import { fetchShoppingCart, deleteOneCartItem, chgangeCartItemqty } from '../../actions';
import CartSummary from './CartSummary';

import './_checkoutcart.scss'

class CheckoutCart extends Component {

  state={
    shoppingCart: []
  }

  async componentWillMount(){
    const allthingsfrenchieId = {
      clientId: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    }

    if(localStorage.getItem("allthingsfrenchieId") === null) {
      await localStorage.setItem('allthingsfrenchieId', JSON.stringify(allthingsfrenchieId))
    }
    const clientId = JSON.parse(localStorage.getItem("allthingsfrenchieId"))

    await this.props.fetchShoppingCart(clientId)
    await this.setState({shoppingCart: this.props.cart})
    // console.log('CheckoutCart - componentWillMount')
  }

  async componentWillReceiveProps(nextProps) {
    if (nextProps.cart) {
      await this.setState({
        shoppingCart: nextProps.cart
      })
      // await this.getSubtotal()
    }
    // console.log('shoppingCart', this.state.shoppingCart)
  }

  renderingDesktopCartList(){
    const { shoppingCart } = this.state
    // console.log('shoppingCart', shoppingCart)
    const cartList = shoppingCart.map((e) => {
      const { _id, clientId, imgUrl, name, price, qty, color, size, productId, productHandle } = e

      return(
        <Table.Row key={_id}>
          <Table.Cell>
            <Link to={`/products/${productHandle}/${productId}`}>
              <Image src={imgUrl} size="tiny" />
            </Link>
          </Table.Cell>
          <Table.Cell>
            <Link
              id="productName"
              to={`/products/${productHandle}/${productId}`}
            >
              <span className="onHoverItem">
                {name} { _.isEmpty(color) === false  ? <span>({color})</span> : "" } { _.isEmpty(size) === false ? <span>( {size} )</span> : ""}
              </span>
            </Link>
          </Table.Cell>
          <Table.Cell>
            <Grid verticalAlign="middle" textAlign="center" columns={2}>
              <Grid.Row>
                <Grid.Column>
                  <span className="centerAlign">{qty}</span>
                </Grid.Column>
                <Grid.Column id="qtyCloumn">
                  <Icon className="cursorPointer" name='add' onClick={(e) => this.incrementQuantity(_id, clientId, qty)}/>
                  <Icon className="cursorPointer" name='minus' onClick={(e)=>this.decrementQuantity(_id, clientId, qty)}/>
                </Grid.Column>
              </Grid.Row>
            </Grid>

          </Table.Cell>
          <Table.Cell> $ { price * qty } </Table.Cell>
          <Table.Cell className="cursorPointer" onClick={(e) => this.removeCartItem(_id, clientId)}>
            <span className="onHoverItem"> Remove </span>
          </Table.Cell>
        </Table.Row>
      )
    })

    return cartList
  }

  incrementQuantity(_id, clientId, qty){
    const qtyInt = parseInt(qty)
    const QuantyChange = {
      id: _id,
      clientId: clientId,
      qty: qtyInt + 1
    }
    // console.log("QuantyChange", QuantyChange)
    this.props.chgangeCartItemqty(QuantyChange)
  }

  decrementQuantity(_id, clientId, qty){
    const qtyInt = parseInt(qty)
    const QuantyChange = {
      id: _id,
      clientId: clientId,
      qty: qtyInt - 1
    }
    // console.log("QuantyChange", QuantyChange)
    this.props.chgangeCartItemqty(QuantyChange)
  }

  removeCartItem(_id, clientId){
    // console.log('Removing Cart Item', _id)
    const cartId = {
      id: _id,
      clientId: clientId
    }
    this.props.deleteOneCartItem(cartId)
  }

  renderDesktopShoppingCart() {
    const { shoppingCart } = this.state
    // console.log('shoppingCart', shoppingCart)
    if(_.isEmpty(shoppingCart) === false ) {
      return(
        <Table selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={2}></Table.HeaderCell>
              <Table.HeaderCell width={8}></Table.HeaderCell>
              <Table.HeaderCell width={1}>Quantity</Table.HeaderCell>
              <Table.HeaderCell width={2}>Total</Table.HeaderCell>
              <Table.HeaderCell width={1}></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.renderingDesktopCartList()}
          </Table.Body>

        </Table>
      )
    } else {
      return(
        <div>
          <p>It appears that your cart is currently empty!</p>
          <Button as={Link} to="/" secondary> Continue Shopping</Button>
        </div>
      )
    }
  }

  renderingMobileCartList(){
    const { shoppingCart } = this.state
    // console.log('shoppingCart', shoppingCart)
    const cartList = shoppingCart.map((e) => {
      const { _id, clientId, imgUrl, name, price, qty, color, size, productId, productHandle } = e

      return (
        <Grid key={_id} as={Container} centered>
          <Grid.Row>
            <Grid.Column
              as={Link}
              to={`/products/${productHandle}/${productId}`}
            >
              {name} { _.isEmpty(color) === false  ? <span>({color})</span> : "" } { _.isEmpty(size) === false ? <span>( {size} )</span> : ""}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid columns='equal' stackable>
              <Grid.Column width={8}>
                <Image as={Link} to={`/products/${productHandle}/${productId}`} src={imgUrl} fluid/>
              </Grid.Column>

              <Grid.Column>
                <Grid columns='equal'>
                  <Grid.Column>
                    <span>$ {price}</span>
                  </Grid.Column>
                  <Grid.Column>
                    <Grid.Row>
                      <span id="qtyCloumn" className="centerAlign">{qty}</span>
                    </Grid.Row>
                    <Grid.Row>
                      <Icon className="cursorPointer" name='add' onClick={(e) => this.incrementQuantity(_id, clientId, qty)}/>
                      <Icon className="cursorPointer" name='minus' onClick={(e)=>this.decrementQuantity(_id, clientId, qty)}/>
                    </Grid.Row>
                  </Grid.Column>
                  <Grid.Column>
                    <span>$ {price * qty}</span>
                  </Grid.Column>
                  <Grid.Column>
                    <span onClick={(e) => this.removeCartItem(_id, clientId)}> Remove </span>
                  </Grid.Column>
                </Grid>
              </Grid.Column>

            </Grid>
          </Grid.Row>

          <Divider/>

        </Grid>
      )
    })
    return cartList
  }

  renderingMobileShoppingCart(){
    const { shoppingCart } = this.state
    // console.log('shoppingCart', shoppingCart)
    if(_.isEmpty(shoppingCart) === false ) {
      return(
        <Grid columns={5}>
          {this.renderingMobileCartList()}
        </Grid>
      )
    } else {
      return(
        <div>
          <p>It appears that your cart is currently empty!</p>
          <Button as={Link} to="/" secondary> Continue Shopping</Button>
        </div>
      )
    }
  }

  render(){
    const checkOut={
      btnLink: "/checkout/shipping",
      btnName: "Proceed to Checkout"
    }

    return(
      <Container id="checkoutcart" className="TopAndBottomPadding">
        <Grid stackable columns='equal'>
          <Grid.Column>
            <h2 className="contentTitle"> Shopping Bag </h2>
            <Divider />
            <MediaQuery query="(min-device-width: 1024px)">
              {this.renderDesktopShoppingCart()}
            </MediaQuery>
            <MediaQuery query="(max-device-width: 1023px)">
              {this.renderingMobileShoppingCart()}
            </MediaQuery>
          </Grid.Column>

          <Grid.Column width={4}>
            <CartSummary checkOut={checkOut}/>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(mapStateToProps, { fetchShoppingCart, deleteOneCartItem, chgangeCartItemqty })(CheckoutCart);
