import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchShippingRate, fetchShoppingCart } from '../../actions';

import MediaQuery from 'react-responsive';
import { Container, Grid, Divider, List } from 'semantic-ui-react'


import CartSummary from './CartSummary';

import './_shipping.scss'

class Payment extends Component{

  state = {
    first_name: "",
    last_name: "",
    stree_address: "",
    address_2: "",
    city: "",
    state: "",
    zipcode: "",
    phone: "",
    email: "",
    shippingRate: [],
    shoppingCart: [],
    combinedWeight: ""
  }

  async componentWillMount(){

    await this.getShoppingCartData();

    await this.getShippingInfo();


  }

  async gettotalShippingWeight(){
    // console.log("gettotalShippingWeight -----")
    // console.log("shoppingCart", this.state.shoppingCart)
    const shoppingCart = this.state.shoppingCart;

    const totalWeight = []

    shoppingCart.map((e) => {
      const { weight, weight_unit } = e
      switch (weight_unit) {
          case "lb":
            return totalWeight.push(weight * 16)
          default:
            return totalWeight.push(weight)
      }
    })

    let combinedWeight = _.sum(totalWeight)

    this.setState({combinedWeight: combinedWeight})
    // console.log('combinedWeight=====', this.state.combinedWeight)

  }

  async getShippingInfo(){
    const atfShippingInfo = localStorage.getItem("atfShippingInfo")

    if(_.isEmpty(atfShippingInfo) === false) {
      const shippingInfo = await JSON.parse(localStorage.getItem("atfShippingInfo"))

      // console.log('shippingInfo', shippingInfo)

      const { first_name, last_name, stree_address, address_2, city, state, zipcode, phone, email, emailCheckbox } = shippingInfo

      await this.setState({
        first_name: first_name,
        last_name: last_name,
        stree_address: stree_address,
        address_2: address_2,
        city: city,
        state: state,
        zipcode:zipcode,
        phone: phone,
        email: email,
        emailCheckbox: emailCheckbox
      })

      await this.gettotalShippingWeight();

      const shippingDataWithWeight = {
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode,
        weight: this.state.combinedWeight
      }

      await this.props.fetchShippingRate(shippingDataWithWeight);

      await this.setState({shippingRate: this.props.shippingRate});

      // await localStorage.setItem('shippingRate', JSON.stringify(this.props.shippingRate))

      // console.log('shippingRate -----', this.state.shippingRate)

    }
  }

  async getShoppingCartData(){
    const allthingsfrenchieId = {
      clientId: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    }

    if(localStorage.getItem("allthingsfrenchieId") === null) {
      await localStorage.setItem('allthingsfrenchieId', JSON.stringify(allthingsfrenchieId))
    }
    const clientId = JSON.parse(localStorage.getItem("allthingsfrenchieId"))

    await this.props.fetchShoppingCart(clientId)
    await this.setState({
      shoppingCart: this.props.cart
    })
  }

  renderDesktopView(){
    return(
      <div>
        <h2>Desktop View</h2>
      </div>
    )
  }

  renderingMobileView(){
    return(
      <div>
        <h2>Mobile View</h2>
      </div>
    )
  }

  handlePaymentInfo(){
    console.log("handlePaymentInfo =======>")
  }

  render() {
    const checkOut={
      type: "payment",
      btnLink: "/checkout/review",
      btnName: "Continue"
    }

    return(
      <Container className="TopAndBottomPadding">
        <Grid stackable columns='equal'>
          <Grid.Column>
            <List className="breadcrumb" horizontal link>
              <List.Item as={Link} to="/checkout/shipping" className="shipping onHoverItem not_disabled">Shipping</List.Item>
              <List.Item className="spacer"> / </List.Item>
              <List.Item as={Link} to="/checkout/payment" className="payment onHoverItem not_disabled">Payment</List.Item>
              <List.Item className="spacer"> / </List.Item>
              <List.Item className="review onHoverItem disabled">Review</List.Item>
            </List>

            <Divider />
            <MediaQuery query="(min-device-width: 1024px)">
              {this.renderDesktopView()}
            </MediaQuery>
            <MediaQuery query="(max-device-width: 1023px)">
              {this.renderingMobileView()}
            </MediaQuery>
          </Grid.Column>

          <Grid.Column width={4}>
            <CartSummary
              checkOut={checkOut}
              handlePaymentInfo={this.handlePaymentInfo}
            />
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

function mapStateToProps({ shippingRate, cart }) {
  return { shippingRate, cart };
}

export default connect(mapStateToProps, { fetchShippingRate, fetchShoppingCart })(Payment);
