import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Visibility, Menu, Image, Icon, Label, Dropdown } from 'semantic-ui-react';

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
  state = {
    menuFixed: false
  }

  stickTopMenu = () => this.setState({ menuFixed: true })
  unStickTopMenu = () => this.setState({ menuFixed: false })
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { menuFixed } = this.state

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
            <Dropdown id="menuTitle" item text='Shop'>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/shops/new">New Arrivals</Dropdown.Item>
                <Dropdown.Item as={Link} to="/shops/puff_stuff">Puff Stuff</Dropdown.Item>
                <Dropdown.Item as={Link} to="/shops/women">Women</Dropdown.Item>
                <Dropdown.Item as={Link} to="/shops/men">Men</Dropdown.Item>
                <Dropdown.Item as={Link} to="/shops/jewelry">Jewelry</Dropdown.Item>
                <Dropdown.Item as={Link} to="/shops/bags_accessories">Bags & Accessories</Dropdown.Item>
                <Dropdown.Item as={Link} to="/shops/socks">Socks</Dropdown.Item>
                <Dropdown.Item as={Link} to="/shops/sales">Sales</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>
              <Image as={Link} to="/" size='medium' src='/images/logo/logo_color.png' />
            </Menu.Item>
            <Menu.Item as={Link} to="/checkout/shopping_cart">
              <Icon name="shop" size='large' />
              <Label color='teal' floating>1</Label>
            </Menu.Item>
          </Menu>
        </Visibility>
      </Container>
    )
  }
}

export default MobileNavbar;
