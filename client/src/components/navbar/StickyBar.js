import _ from 'lodash'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, Visibility, Menu, Dropdown, Image, Icon } from 'semantic-ui-react';

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
  backgroundColor: 'transparent'
}

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

class StickyBar extends Component {
  state = {
    menuFixed: false
  }

  handleOverlayRef = (c) => {
    const { overlayRect } = this.state

    if (!overlayRect) {
      this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
    }
  }

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {
    const { menuFixed, } = this.state

    return(
      <Container>
        <Container text style={{ marginTop: '2em' }}>
          <Header as='h1'>Sticky Example</Header>
          <p>
            This example shows how to use lazy loaded images, a sticky menu, and a simple text
            container
          </p>
        </Container>

        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fluid widths={4}
            fixed={menuFixed ? 'top' : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
              <Menu.Item>
                <Image as={Link} to="/" size='tiny' src='/images/liweilogo.png' />
              </Menu.Item>

                <Dropdown item text='Services'>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/services/skincare">Skin Care</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/services/body_treatment">Body Treatments</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/services/microblading">Microblading</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/services/gm_collin">GM Collin Facials</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              <Menu.Item as={Link} to="/promotion">
                <Icon name='star'/>
                Promotion
              </Menu.Item>
              <Menu.Item as={Link} to="/book">
                <Icon name='address book'/>
                Appointment
              </Menu.Item>

          </Menu>
        </Visibility>

      </Container>

    )
  }
};

export default StickyBar
