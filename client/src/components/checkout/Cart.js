import _ from 'lodash';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header, Button, Container, Grid, Image, Divider } from 'semantic-ui-react'
import { fetchShoppingCart } from '../../actions';

import './_cart.scss'

class Cart extends Component {
  state = {
    shoppingCart: [],
    subTotal: 0,
    shippingFee: 0,
    taxes: 0
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
    await this.getSubtotal()
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

  handleCartClose() {
    this.setState({
      isCartOpen: false,
    });
  }

  renderLineItems(){
    const lineItems = this.state.shoppingCart
    if(_.isEmpty(lineItems) === false ){
      // console.log('lineItems', lineItems)
      // console.log('YESSS')
      return lineItems.map((e) => {
        const { _id, name, imgUrl, qty, price, size, color } = e
        return (
          <Grid.Row key={_id}>
            <Grid.Column className="line__item" floated="left" width={4}>
              <Image src={imgUrl} size='tiny'/>
            </Grid.Column>
            <Grid.Column className="line__item">
              <p>{name} ( {color} / { _.isEmpty(size) === true ? "One Size" : size  } )</p>
            </Grid.Column>
            <Grid.Column className="line__item" width={2}>
              <p>{qty}</p>
            </Grid.Column>
            <Grid.Column className="line__item" width={4} floated="right">
              <p>$ {price}</p>
            </Grid.Column>
          </Grid.Row>
        )
      })
    } else {
      return (
        <Container>
          <span id="empty_cart_title">Your Shopping Bag Is Empty. </span> <span id="underline"><Link to={'/'}>Continue Shopping</Link></span>
        </Container>
      )
    }
  }

  getSubtotal(){
    const lineItems = this.state.shoppingCart
    const subtotal = []
    let returnedtotal
    if(_.isEmpty(lineItems) === false ){
      return lineItems.map((e) => {
        const { qty, price} = e
        const linetotal = parseInt(qty) * parseInt(price)
        subtotal.push(linetotal)
        // console.log('subtotal', subtotal)
        // console.log('_sum', _.sum(subtotal).toFixed(2))
        returnedtotal = _.sum(subtotal).toFixed(2)
        return this.setState({subTotal: returnedtotal})
      })
    } else {
      const zero = 0
      return zero.toFixed(2)
    }
  }

  getTotal(){
    const { subTotal, shippingFee, taxes } = this.state;

    const total = parseInt(subTotal) + parseInt(shippingFee) + parseInt(taxes)
    return total.toFixed(2)
  }

  render() {
    const { shoppingCart, subTotal, shippingFee, taxes } = this.state;
    // console.log('isCartOpen', this.props.isCartOpen)

    return (
      <div className={`Cart ${this.props.isCartOpen === true ? 'Cart--open' : ''}`}>
        <Container>
          <Header size="medium" className="Cart__header">
            <Button className="Cart__close" onClick={this.props.handleCartClose}> x </Button>
          </Header>

          <Grid columns={1} padded>
            <Container>
              <h3>Shopping Cart</h3>
              <Divider />
            </Container>
            <Grid id="lineItems" columns='equal'>
              {this.renderLineItems()}
            </Grid>

            <Grid.Column className="summary">
              <h3 id="order_summary">Order Summary</h3>
              <Divider />
              <Container>
                <Grid columns={2}>
                  <Grid.Row>
                    <Grid.Column className="summary_left summary_subtotal" floated="left">Subtotal</Grid.Column>
                    <Grid.Column className="summary_right summary_subtotal" floated="right">$ { subTotal }</Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column className="summary_left summary_shipping" floated="left">Shipping</Grid.Column>
                    <Grid.Column className="summary_right summary_shipping" floated="right">$ { shippingFee }</Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column className="summary_left summary_tax" floated="left">Estimated Tax</Grid.Column>
                    <Grid.Column className="summary_right summary_tax" floated="right">$ { taxes }</Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column className="summary_left summary_total" floated="left">Total</Grid.Column>
                    <Grid.Column className="summary_right summary_total" floated="right">$ { this.getTotal() }</Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
            </Grid.Column>

            <Grid.Column className="proceed_to_checkout">
              <Grid.Row >
                <Button
                  as={Link}
                  to="/checkout/shopping_cart"
                  className="ProceedToCartButton"
                  fluid color="black"
                  disabled={_.isEmpty(shoppingCart) === true ? true : false}
                  onClick={this.props.handleCartClose}
                >
                  <Button.Content visible> Checkout</Button.Content>
                </Button>
              </Grid.Row>
            </Grid.Column>

          </Grid>
        </Container>
      </div>
    )
  }
}

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(mapStateToProps, { fetchShoppingCart })(Cart);
