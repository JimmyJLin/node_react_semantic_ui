import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MediaQuery from 'react-responsive';
import { Container, Grid, Divider, List } from 'semantic-ui-react'


import CartSummary from './CartSummary';

import './_shipping.scss'

class Payment extends Component{

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

  render() {
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
            <CartSummary/>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default Payment
