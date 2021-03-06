import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchShoppingCart } from '../../../actions';

import Cart from '../../checkout/Cart';
import BurgerMenu from './BurgerMenu';

import { Container, Visibility, Menu, Image, Icon, Label } from 'semantic-ui-react';

import './_mobileNavbar.scss';

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '0em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
  backgroundColor: 'transparent'
}

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

class MobileNavbar extends Component {

  constructor(props) {
    super(props);
    this.handleCartClose = this.handleCartClose.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
    this.handleBurgerClose = this.handleBurgerClose.bind(this);
    this.handleBurgerOpen = this.handleBurgerOpen.bind(this);
  }

  state = {
    menuFixed: false,
    shoppingCart: []
  }

  async componentWillMount(){
    await this.setState({shoppingCart: this.props.cart})
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cart) {
      this.setState({
        shoppingCart: nextProps.cart
      })
    }
  }

  stickTopMenu = () => this.setState({ menuFixed: true })
  unStickTopMenu = () => this.setState({ menuFixed: false })
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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

  handleBurgerOpen() {
    // console.log('isBurgerOpen', this.state.isBurgerOpen)
    this.setState({
      isBurgerOpen: true,
    });
  }

  handleBurgerClose() {
    this.setState({
      isBurgerOpen: false,
    });
  }

  render() {
    const { menuFixed, shoppingCart } = this.state

    return (
      <Container id="mobile">
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fluid widths={3}
            fixed={menuFixed ? 'top' : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Menu.Item onClick={this.handleBurgerOpen}>
              <Icon name="sidebar" size='large' />
            </Menu.Item>

            <Menu.Item>
              <Image as={Link} to="/" size='medium' src='/images/logo/logo_color.png' />
            </Menu.Item>
            <Menu.Item onClick={this.handleCartOpen}>
              <Icon name="shop" size='large' />
              <Label color='teal' floating> {shoppingCart.length} </Label>
            </Menu.Item>
          </Menu>
        </Visibility>

        {/* Burger Menu  */}
        <BurgerMenu
          isBurgerOpen={this.state.isBurgerOpen}
          handleBurgerClose={this.handleBurgerClose}
        />

        {/* Shopping Cart  */}
        <Cart
          isCartOpen={this.state.isCartOpen}
          handleCartClose={this.handleCartClose}
        />
      </Container>
    )
  }
}

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(mapStateToProps, { fetchShoppingCart })(MobileNavbar);
