import _ from 'lodash'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../../checkout/Cart';

import { Container, Header, Visibility, Menu, Image, Icon, Label, Grid } from 'semantic-ui-react';

import './_desktopNavbar.scss';

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

class DesktopNavbar extends Component {

  constructor(props) {
    super(props);

    this.handleCartClose = this.handleCartClose.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
  }

  state = {
    menuFixed: false,
    activeItem: 'home',
    isCartOpen: false
  }

  handleOverlayRef = (c) => {
    const { overlayRect } = this.state

    if (!overlayRect) {
      this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
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

  render() {
    const { menuFixed, activeItem } = this.state
    return(
      <Container id="desktop">
        <Container id="sticky_top" text>
          <Header as='h1'>Free Shipping</Header>
          <p>
            on orders over $35 / Subscribe to our newsletter for 15% OFF
          </p>
        </Container>

        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            fluid widths={10}
            fixed={menuFixed ? 'top' : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Grid columns="equal">
              <Grid.Row id="logo_block">
                <Grid.Column></Grid.Column>
                <Grid.Column>
                  <Image as={Link} to="/" size='medium' src='/images/logo/logo_color.png' />
                </Grid.Column>
                <Grid.Column>
                  <Menu text id="shopping_cart">
                    <Menu.Item onClick={this.handleCartOpen}>
                      <Icon name="shop" size='large' />
                      <Label color='teal' floating>1</Label>
                    </Menu.Item>
                  </Menu>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row className="desktopMenu">
                <Menu.Item/>
                <Menu.Item
                  name='New Arrivals'
                  active={activeItem === 'New'}
                  onClick={this.handleItemClick}
                  as={Link} to="/shops/new"
                />
                <Menu.Item
                  name='puff stuff'
                  active={activeItem === 'puff stuff'}
                  onClick={this.handleItemClick}
                  as={Link} to="/shops/puff_stuff"
                />
                <Menu.Item
                  name='women'
                  active={activeItem === 'women'}
                  onClick={this.handleItemClick}
                  as={Link} to="/shops/women"
                />
                <Menu.Item
                  name='men'
                  active={activeItem === 'men'}
                  onClick={this.handleItemClick}
                  as={Link} to="/shops/men"
                />
                <Menu.Item
                  name='jewelry'
                  active={activeItem === 'jewelry'}
                  onClick={this.handleItemClick}
                  as={Link} to="/shops/jewelry"
                />
                <Menu.Item
                  name='bags & accessories'
                  active={activeItem === 'bags & accessories'}
                  onClick={this.handleItemClick}
                  as={Link} to="/shops/bags_accessories"
                />
                <Menu.Item
                  name='socks'
                  active={activeItem === 'socks'}
                  onClick={this.handleItemClick}
                  as={Link} to="/shops/socks"
                />
                <Menu.Item
                  name='sales'
                  active={activeItem === 'sales'}
                  onClick={this.handleItemClick}
                  as={Link} to="/shops/sales"
                />
                <Menu.Item/>
              </Grid.Row>
            </Grid>


          </Menu>

        </Visibility>

        {/* Shopping Cart  */}
        <Cart
          isCartOpen={this.state.isCartOpen}
          handleCartClose={this.handleCartClose}
        />

      </Container>

    )
  }
};

export default DesktopNavbar
