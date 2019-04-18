import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Divider, List, Form, Input, Segment } from 'semantic-ui-react'


import CartSummary from './CartSummary';

import './_shipping.scss'

class Shipping extends Component{

  constructor(props) {
    super(props);
    this.handleShippingInfo = this.handleShippingInfo.bind(this)
  }

  state = {
    first_name: "",
    last_name: "",
    stree_address: "",
    address_2: "",
    city: "",
    state: "",
    zipcode: "",
    phone: ""
  }

  async componentWillMount(){

    const atfShippingInfo = localStorage.getItem("atfShippingInfo")

    if(_.isEmpty(atfShippingInfo) === false) {
      const shippingInfo = await JSON.parse(localStorage.getItem("atfShippingInfo"))

      const { first_name, last_name, stree_address, address_2, city, state, zipcode, phone } = shippingInfo

      await this.setState({
        first_name: first_name,
        last_name: last_name,
        stree_address: stree_address,
        address_2: address_2,
        city: city,
        state: state,
        zipcode:zipcode,
        phone: phone
      })
    }

  }

  handleShippingInfo(){
    const { first_name, last_name, stree_address, address_2, city, state, zipcode, phone} = this.state;

    const shippingData = {
      first_name: first_name,
      last_name: last_name,
      stree_address: stree_address,
      address_2: address_2,
      city: city,
      state: state,
      zipcode: zipcode,
      phone: phone
    }

    if(localStorage.getItem("atfShippingInfo") === null) {
      localStorage.setItem('atfShippingInfo', JSON.stringify(shippingData))
    }
    console.log('shippingData ====>', shippingData)
  }


  renderShipping(){
    return(
      <div>
        <h2>Desktop View</h2>
        <Grid stackable columns='equal'>
          <Grid.Column> <h3>Guess Checkout</h3> </Grid.Column>
          <Grid.Column> <h3>SingIn or SingUp</h3> </Grid.Column>
        </Grid>

        <h3>Shipping Address</h3>
        <Segment>
          <p>Please enter a shipping address.</p>
          <Form>
            <Form.Group widths='equal'>
              <Form.Field
                control={Input}
                lable="First Name"
                placeholder="First Name"
                value={this.state.first_name}
                onChange={(e) => this.setState({first_name: e.target.value})}
                required
              />
              <Form.Field
                control={Input}
                lable="Last Name"
                placeholder="Last Name"
                value={this.state.last_name}
                onChange={(e) => this.setState({last_name: e.target.value})}
                required
              />
            </Form.Group>
            <Form.Field
              control={Input}
              lable="Street Address"
              placeholder="Street Address"
              value={this.state.stree_address}
              onChange={(e) => this.setState({stree_address: e.target.value})}
              required
            />
            <Form.Field
              control={Input}
              lable="Address 2"
              placeholder="Address 2"
              value={this.state.address_2}
              onChange={(e) => this.setState({address_2: e.target.value})}
            />
            <Form.Group widths='equal'>
              <Form.Field
                control={Input}
                lable="City"
                placeholder="City"
                value={this.state.city}
                onChange={(e) => this.setState({city: e.target.value})}
                required
              />
              <Form.Field
                control={Input}
                lable="State"
                placeholder="State"
                value={this.state.state}
                onChange={(e) => this.setState({state: e.target.value})}
                required
              />
            </Form.Group>
            <Form.Field
              control={Input}
              lable="Zip Code"
              placeholder="Zip Code"
              value={this.state.zipcode}
              onChange={(e) => this.setState({zipcode: e.target.value})}
              required
            />
            <Form.Field
              control={Input}
              lable="Daytime Phone"
              placeholder="Daytime Phone"
              value={this.state.phone}
              onChange={(e) => this.setState({phone: e.target.value})}
              required
            />
          </Form>
        </Segment>


      </div>
    )
  }


  render() {
    const checkOut={
      type: "shipping",
      btnLink: "/checkout/payment",
      btnName: "Continue"
    }

    return(
      <Container className="TopAndBottomPadding">
        <Grid stackable columns='equal'>
          <Grid.Column>
            <List className="breadcrumb" horizontal link>
              <List.Item as={Link} to="/checkout/shipping" className="shipping onHoverItem not_disabled">Shipping</List.Item>
              <List.Item className="spacer"> / </List.Item>
              <List.Item className="payment onHoverItem disabled">Payment</List.Item>
              <List.Item className="spacer"> / </List.Item>
              <List.Item className="review onHoverItem disabled">Review</List.Item>
            </List>

            <Divider />

            {this.renderShipping()}

          </Grid.Column>

          <Grid.Column width={4}>
            <CartSummary
              checkOut={checkOut}
              handleShippingInfo={this.handleShippingInfo}
            />
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default Shipping
