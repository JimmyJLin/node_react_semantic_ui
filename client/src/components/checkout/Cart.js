import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Header, Button, Container, Grid, Image } from 'semantic-ui-react'
import { fetchShoppingCart } from '../../actions';

import './_checkout.scss'

class Cart extends Component {
  state = {
    shoppingCart: []
  }

  async componentWillMount(){
    // await this.props.fetchShoppingCart()
    await this.setState({shoppingCart: this.props.cart})
    console.log('shoppingCart in componentWillMount', this.state.shoppingCart)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cart) {
      this.setState({
        shoppingCart: nextProps.cart
      })
    }
    // console.log('shoppingCart', this.state.shoppingCart)
  }

  handleCartClose() {
    console.log('inside handleCartClose')
    this.setState({
      isCartOpen: false,
    });
    // console.log('isCartOpen - handleCartClose', this.state.isCartOpen)
  }

  renderLineItems(){
    const lineItems = this.state.shoppingCart
    if(_.isEmpty(lineItems) === false ){
      // console.log('lineItems', lineItems)
      // console.log('YESSS')
      return lineItems.map((e) => {
        const { name, imgUrl, qty, varians_id} = e
        return (
          <Grid.Row key={varians_id}>
            <Grid.Column>
              <Image src={imgUrl} size='tiny'/>
            </Grid.Column>
            <Grid.Column>
              <p>{name}</p>
            </Grid.Column>
            <Grid.Column>
              <p>{qty}</p>
            </Grid.Column>
          </Grid.Row>
        )
      })
    } else {
      return (
        <Grid.Row>
          <p>NOOOOO</p>
        </Grid.Row>
      )
    }
  }

  render() {
    // console.log('this.props', this.props)

    return (
      <div className={`Cart ${this.props.isCartOpen === true ? 'Cart--open' : ''}`}>
        <Container>
          <Header size="medium" className="Cart__header">
            <Button className="Cart__close" onClick={this.props.handleCartClose}> x </Button>
          </Header>
          <Grid columns={1} padded className="lineItems">
            <Grid.Column>
              <h3>Shopping Cart</h3>
              {this.renderLineItems()}
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
