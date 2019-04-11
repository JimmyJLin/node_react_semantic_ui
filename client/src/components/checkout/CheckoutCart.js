import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Table, Button, Image, Icon } from 'semantic-ui-react'
import { fetchShoppingCart, deleteOneCartItem, chgangeCartItemqty } from '../../actions';

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

  renderingCartList(){
    const { shoppingCart } = this.state
    console.log('shoppingCart', shoppingCart)
    const cartList = shoppingCart.map((e) => {
      const { _id, clientId, imgUrl, name, price, qty, color, size } = e

      return(
        <Table.Row key={_id}>
          <Table.Cell>
            <Image src={imgUrl} size="tiny"></Image>
          </Table.Cell>
          <Table.Cell>{name} { _.isEmpty(color) === false  ? <span>({color})</span> : "" } { _.isEmpty(size) === false ? <span>( {size} )</span> : ""}</Table.Cell>
          <Table.Cell>
            {qty}
            <br/>
            <Icon className="cursorPointer" name='add' onClick={(e) => this.incrementQuantity(_id, clientId, qty)}/>
            <Icon className="cursorPointer" name='minus' onClick={(e)=>this.decrementQuantity(_id, clientId, qty)}/>
          </Table.Cell>
          <Table.Cell> { price * qty } </Table.Cell>
          <Table.Cell className="cursorPointer" onClick={(e) => this.removeCartItem(_id, clientId)}> X </Table.Cell>
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

  renderShoppingCart() {
    const { shoppingCart } = this.state
    // console.log('shoppingCart', shoppingCart)
    if(_.isEmpty(shoppingCart) === false ) {
      return(
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={2}></Table.HeaderCell>
              <Table.HeaderCell width={8}></Table.HeaderCell>
              <Table.HeaderCell width={1}>Quantity</Table.HeaderCell>
              <Table.HeaderCell width={1}>Total</Table.HeaderCell>
              <Table.HeaderCell width={1}></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.renderingCartList()}
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

  render(){

    return(
      <Container id="checkoutcart">
        <h2 className="contentTitle"> Your Cart </h2>

        {this.renderShoppingCart()}

      </Container>
    )
  }
}

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(mapStateToProps, { fetchShoppingCart, deleteOneCartItem, chgangeCartItemqty })(CheckoutCart);
