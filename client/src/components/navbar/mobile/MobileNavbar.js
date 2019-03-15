import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Visibility, Menu, Image, Icon, Label, Sidebar, Segment, Header } from 'semantic-ui-react';

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
    menuFixed: false,
    visible: false
  }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  stickTopMenu = () => this.setState({ menuFixed: true })
  unStickTopMenu = () => this.setState({ menuFixed: false })
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { menuFixed, visible } = this.state

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
            <Menu.Item>
              <Icon name="bars" size="large" onClick={this.handleShowClick}></Icon>
            </Menu.Item>
            <Menu.Item>
              <Image as={Link} to="/" size='medium' src='/images/logo/logo_color.png' />
            </Menu.Item>
            <Menu.Item as={Link} to="/checkout/shopping_cart">
              <Icon name="shop" size='large' />
              <Label color='teal' floating>1</Label>
            </Menu.Item>
          </Menu>

          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation='overlay'
              icon='labeled'
              inverted
              onHide={this.handleSidebarHide}
              vertical
              visible={visible}
              width='thin'
            >
              <Menu.Item as='a'>
                <Icon name='home' />
                Home
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='gamepad' />
                Games
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='camera' />
                Channels
              </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher>
            </Sidebar.Pusher>
          </Sidebar.Pushable>

        </Visibility>



      </Container>
    )
  }
}

export default MobileNavbar;
