import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Table, Button, Image } from 'semantic-ui-react'

import './_checkoutcart.scss'

class CheckoutCart extends Component {

  state={
    shoppingCart: []
  }

  async componentWillMount(){
    await this.setState({shoppingCart: this.props.cart})
    console.log('CheckoutCart - componentWillMount', this.state.shoppingCart)
  }

  async componentWillReceiveProps(nextProps) {
    if (nextProps.cart) {
      await this.setState({
        shoppingCart: nextProps.cart
      })
      await this.getSubtotal()
    }
    // console.log('shoppingCart', this.state.shoppingCart)
  }

  renderingCartList(shoppingCart){
    const cartList = shoppingCart.map((e) => {
      console.log('renderingCartList', e)
      const { imgUrl, name, price, qty, varians_id } = e
      return(
        <Table.Row key={varians_id}>
          <Table.Cell>
            <Image src={imgUrl} size="tiny"></Image>
          </Table.Cell>
          <Table.Cell>{name}</Table.Cell>
          <Table.Cell>{qty}</Table.Cell>
          <Table.Cell> { price * qty } </Table.Cell>
          <Table.Cell> X </Table.Cell>
        </Table.Row>
      )
    })

    return cartList
  }

  removeCartItem(){
    console.log('Removing Cart Item')
  }

  renderShoppingCart() {
    const { shoppingCart } = this.state

    if(_.isEmpty(shoppingCart) === false ) {
      console.log('YESSS')

      return(
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={4}></Table.HeaderCell>
              <Table.HeaderCell width={8}></Table.HeaderCell>
              <Table.HeaderCell width={2}>Quantity</Table.HeaderCell>
              <Table.HeaderCell width={2}>Total</Table.HeaderCell>
              <Table.HeaderCell width={2} onClick={this.removeCartItem()} className="cursorPointer"></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.renderingCartList(shoppingCart)}
          </Table.Body>

        </Table>
      )
    } else {
      console.log('NOOOO')
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

export default connect(mapStateToProps, { })(CheckoutCart);
