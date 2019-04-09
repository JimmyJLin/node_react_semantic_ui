import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Table, Button, Image } from 'semantic-ui-react'
import { fetchShoppingCart } from '../../actions';

import './_checkoutcart.scss'

class CheckoutCart extends Component {

  state={
    shoppingCart: []
  }

  async componentWillMount(){
    await this.props.fetchShoppingCart()
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
    // console.log('shoppingCart', shoppingCart)
    const cartList = shoppingCart.map((e) => {
      // console.log('renderingCartList', e)
      const { imgUrl, name, price, qty, varians_id, id } = e
      return(
        <Table.Row key={varians_id}>
          <Table.Cell>
            <Image src={imgUrl} size="tiny"></Image>
          </Table.Cell>
          <Table.Cell>{name}</Table.Cell>
          <Table.Cell>{qty}</Table.Cell>
          <Table.Cell> { price * qty } </Table.Cell>
          <Table.Cell className="cursorPointer" data={varians_id} onClick={(e) => this.removeCartItem(id)}> X </Table.Cell>
        </Table.Row>
      )
    })

    return cartList
  }

  removeCartItem(varians_id, e){
    // console.log('e----', e.target.value)
    console.log('Removing Cart Item', varians_id)
  }

  renderShoppingCart() {
    const { shoppingCart } = this.state
    // console.log('shoppingCart', shoppingCart)
    if(_.isEmpty(shoppingCart) === false ) {
      return(
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={4}></Table.HeaderCell>
              <Table.HeaderCell width={8}></Table.HeaderCell>
              <Table.HeaderCell width={2}>Quantity</Table.HeaderCell>
              <Table.HeaderCell width={2}>Total</Table.HeaderCell>
              <Table.HeaderCell width={2}></Table.HeaderCell>
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

export default connect(mapStateToProps, { fetchShoppingCart })(CheckoutCart);
